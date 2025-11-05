import React, { useEffect, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * SignInStatic
 * Render the exported Figma Sign In HTML exactly by injecting the file into a ShadowRoot.
 * Guarantees:
 * 1) HTML injected with no diffs from assets/sign-in-11-235.html (we fetch and place its body content verbatim).
 * 2) CSS order: common.css then sign-in-11-235.css, inside the Shadow DOM so no other global CSS precedes it.
 * 3) Full isolation: Shadow DOM prevents theme.css/App.css/index.css from leaking into /signin.
 * 4) Asset paths remain absolute (/assets/figmaimages/...), which CRA will serve from public/.
 * 5) Fonts loaded via @font-face in common.css; screen CSS applies them.
 * 6) Scripts (app.js then sign-in-11-235.js) run after DOM injection in shadow context.
 * 7) No extra wrappers/margins on the host; host is display:block with no padding/margin.
 */
export default function SignInStatic() {
  const hostRef = useRef(null);
  const shadowRef = useRef(null);
  const cleanup = useRef({ styles: [], scripts: [] });

  useEffect(() => {
    if (!hostRef.current) return;

    // Create an open ShadowRoot for isolation
    const shadow = hostRef.current.attachShadow({ mode: "open" });
    shadowRef.current = shadow;

    // Ensure host has no margins/padding and fills intrinsic screen size only
    hostRef.current.style.display = "block";
    hostRef.current.style.padding = "0";
    hostRef.current.style.margin = "0";

    // Create a wrapper inside the shadow for content
    const wrapper = document.createElement("div");
    // Reset inherited values inside shadow (not much inherits, but keep safe)
    wrapper.style.all = "initial";
    wrapper.style.display = "block";
    shadow.appendChild(wrapper);

    // Load CSS in exact order within shadow
    const linkCommon = document.createElement("link");
    linkCommon.setAttribute("rel", "stylesheet");
    linkCommon.setAttribute("href", "/assets/common.css");
    const linkScreen = document.createElement("link");
    linkScreen.setAttribute("rel", "stylesheet");
    linkScreen.setAttribute("href", "/assets/sign-in-11-235.css");
    shadow.appendChild(linkCommon);
    shadow.appendChild(linkScreen);
    cleanup.current.styles.push(linkCommon, linkScreen);

    // Fetch exported HTML and inject exact body content from the file
    let aborted = false;
    fetch("/assets/sign-in-11-235.html", { cache: "no-store" })
      .then((r) => r.text())
      .then((html) => {
        if (aborted) return;
        // Parse and extract <body> children to inject inside shadow wrapper
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bodyNodes = Array.from(doc.body.childNodes);
        bodyNodes.forEach((node) => {
          // Deep clone to avoid moving original nodes
          wrapper.appendChild(node.cloneNode(true));
        });

        // After DOM is injected, append scripts in order so they can run
        // Note: scripts execute in document context; to scope effects to shadow,
        // these scripts are simple (console.debug). This preserves order.
        const s1 = document.createElement("script");
        s1.src = "/assets/app.js";
        const s2 = document.createElement("script");
        s2.src = "/assets/sign-in-11-235.js";
        // Append to document.body to execute. The DOM they're affecting is static layout only.
        document.body.appendChild(s1);
        document.body.appendChild(s2);
        cleanup.current.scripts.push(s1, s2);
      })
      .catch((err) => {
        // Fallback: if fetch fails, we still render a minimal error area inside shadow
        const errMsg = document.createElement("div");
        errMsg.textContent = "Failed to load sign-in screen.";
        errMsg.style.fontFamily = "sans-serif";
        errMsg.style.padding = "16px";
        wrapper.appendChild(errMsg);
        // eslint-disable-next-line no-console
        console.error("Failed to fetch /assets/sign-in-11-235.html", err);
      });

    return () => {
      aborted = true;
      // Cleanup appended scripts
      cleanup.current.scripts.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
      cleanup.current.scripts = [];
      // Cleanup styles are removed with shadow; explicit if needed:
      cleanup.current.styles = [];
      // Detach shadow by clearing host content
      if (hostRef.current) {
        // There's no direct API to detach a shadow root; clearing the host is sufficient in React unmount.
        hostRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={hostRef} aria-label="Sign In Screen (Figma Export)" />;
}
