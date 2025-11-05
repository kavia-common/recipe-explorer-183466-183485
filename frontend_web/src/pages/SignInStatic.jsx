import React, { useEffect, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * SignInStatic
 * Renders the Figma-exported Sign In screen as-is with isolated styles and exact asset load order.
 * This component:
 * - Removes any app shell wrapping to prevent layout/style drift
 * - Injects CSS (assets/common.css then assets/sign-in-11-235.css) before scripts
 * - Injects JS (assets/app.js then assets/sign-in-11-235.js) in document order
 * - Ensures all figmaimages paths are absolute (/assets/figmaimages/...)
 * - Removes global theme interference by isolating styles (reset and toggling a body class)
 */
export default function SignInStatic() {
  const containerRef = useRef(null);
  const injected = useRef({ links: [], scripts: [] });
  const previousBodyClassAdded = useRef(false);

  useEffect(() => {
    // Add a route-level body class to neutralize global app styles (if any).
    // Keep it minimal and only when this route is mounted.
    const BODY_CLASS = "signin-isolation";
    if (!document.body.classList.contains(BODY_CLASS)) {
      document.body.classList.add(BODY_CLASS);
      previousBodyClassAdded.current = true;
    }

    // 1) Inject CSS in this exact order: common.css then screen css
    function injectStyles() {
      const l1 = document.createElement("link");
      l1.rel = "stylesheet";
      l1.href = "/assets/common.css";
      l1.dataset.injected = "signin";
      const l2 = document.createElement("link");
      l2.rel = "stylesheet";
      l2.href = "/assets/sign-in-11-235.css";
      l2.dataset.injected = "signin";

      document.head.appendChild(l1);
      document.head.appendChild(l2);
      injected.current.links.push(l1, l2);
    }

    // 2) Mount HTML content with corrected absolute image paths
    function mountHtml() {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = `
        <div id="screen-sign-in-11-235" class="style-10" style="position: relative; width: 375px; height: 812px; overflow: hidden; background-color: var(--color-ffffff);">
          <div id="grp-13-110" style="position: absolute; left: 30px; top: 94px; width: 155px; height: 75px;">
            <div id="text-12-29" class="typo-60" style="position: absolute; left: 0px; top: 0px; width: 84px; height: 45px; color: var(--color-000000);">
              Hello,
            </div>
            <div id="text-12-30" class="typo-61" style="position: absolute; left: 0px; top: 45px; width: 155px; height: 30px; color: var(--color-121212);">
              Welcome Back!
            </div>
          </div>

          <div id="grp-12-91" style="position: absolute; left: 40px; top: 438px; width: 97px; height: 17px;">
            <div id="text-12-94" class="typo-62" style="position: absolute; left: 0px; top: 0px; width: 97px; height: 17px; color: var(--color-ff9c00);">
              Forgot Password?
            </div>
          </div>

          <div id="btn-13-35" style="position: absolute; left: 131px; top: 597px; width: 44px; height: 44px;">
            <div id="rect-13-36" class="style-126" style="position: absolute; left: 0px; top: 0px; width: 44px; height: 44px;"></div>
            <div id="cmp-13-48" class="style-2" style="position: absolute; left: 10px; top: 10px; width: 24px; height: 24px;">
              <img id="ico-13-39" src="/assets/figmaimages/figma_image_13_39.svg" alt="google-vector-1" class="icon-crisp" style="position: absolute; left: 2px; top: 2px; width: 19.999996185302734px; height: 19.999996185302734px;">
              <div id="ico-13-40" class="style-22" style="position: absolute; left: 3.15301513671875px; top: 0px; width: 15.655999183654785px; height: 7.755001068115234px; opacity: 1;"></div>
              <div id="ico-13-41" class="style-23" style="position: absolute; left: 3.09747314453125px; top: 12.027008056640625px; width: 15.607002258300781px; height: 7.972998142242432px; opacity: 1;"></div>
              <img id="ico-13-42" src="/assets/figmaimages/figma_image_13_42.svg" alt="google-vector-4" class="icon-crisp" style="position: absolute; left: 12px; top: 10px; width: 9.999998092651367px; height: 9.4141206741333px;">
            </div>
          </div>

          <div id="btn-13-49" style="position: absolute; left: 200px; top: 597px; width: 44px; height: 44px;">
            <div id="rect-13-50" class="style-126" style="position: absolute; left: 0px; top: 0px; width: 44px; height: 44px;"></div>
            <div id="grp-13-58" style="position: absolute; left: 10px; top: 10px; width: 24px; height: 24px;">
              <div id="grp-13-59" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px;">
                <div id="ico-13-60" class="style-25" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px; opacity: 0.58;"></div>
                <img id="ico-13-61" src="/assets/figmaimages/figma_image_13_61.svg" alt="facebook-vector" class="icon-crisp" style="position: absolute; left: 2px; top: 2px; width: 20.000003814697266px; height: 20px;">
                <div id="ico-13-62" class="style-27" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px; opacity: 0;"></div>
              </div>
            </div>
          </div>

          <div id="text-13-67" class="typo-63" style="position: absolute; left: 99px; top: 696px; width: 177px; height: 17px; color: var(--typo-63-color);">
            Don’t have an account? Sign up
          </div>

          <div id="grp-12-139" style="position: absolute; left: 90px; top: 560px; width: 195px; height: 17px;">
            <div id="line-12-141" class="style-28" style="position: absolute; left: 145px; top: 9px; width: 50px; height: 1px; background-color: var(--color-d9d9d9);"></div>
            <div id="line-12-140" class="style-28" style="position: absolute; left: 0px; top: 9px; width: 50px; height: 1px; background-color: var(--color-d9d9d9);"></div>
            <div id="text-12-142" class="typo-64" style="position: absolute; left: 57px; top: 0px; width: 81px; height: 17px; color: var(--color-d9d9d9);">
              Or Sign in With
            </div>
          </div>

          <div id="cmp-30-585" style="position: absolute; left: 30px; top: 226px; width: 315px; height: 81px;">
            <div id="rect-I30-585-30-298" class="style-30" style="position: absolute; left: 0px; top: 26px; width: 315px; height: 55px;"></div>
            <div id="text-I30-585-30-300" class="typo-65" style="position: absolute; left: 20px; top: 45px; width: 61px; height: 17px; color: var(--color-d9d9d9);">
              Enter Email
            </div>
            <div id="text-I30-585-30-301" class="typo-66" style="position: absolute; left: 0px; top: 0px; width: 38px; height: 21px; color: var(--color-121212);">
              Email
            </div>
          </div>

          <div id="cmp-30-590" style="position: absolute; left: 30px; top: 337px; width: 315px; height: 81px;">
            <div id="rect-I30-590-30-298" class="style-30" style="position: absolute; left: 0px; top: 26px; width: 315px; height: 55px;"></div>
            <div id="text-I30-590-30-300" class="typo-65" style="position: absolute; left: 20px; top: 45px; width: 84px; height: 17px; color: var(--color-d9d9d9);">
              Enter Password
            </div>
            <div id="text-I30-590-30-301" class="typo-66" style="position: absolute; left: 0px; top: 0px; width: 107px; height: 21px; color: var(--color-121212);">
              Enter Password
            </div>
          </div>

          <div id="cmp-42-614" style="position: absolute; left: 0px; top: 778px; width: 375px; height: 34px;">
            <div id="rect-I42-614-42-603" class="style-32" style="position: absolute; left: 120px; top: 21px; width: 135px; height: 5px;"></div>
          </div>

          <div id="btn-54-668" class="style-11" style="position: absolute; left: 30px; top: 480px; width: 315px; height: 60px; display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 12px;">
            <div id="text-I54-668-53-624" class="typo-58" style="color: var(--color-ffffff);">Sign In</div>
            <div id="cmp-I54-668-53-625" style="position: relative; width: 20px; height: 20px;">
              <div id="rect-I54-668-53-625-139-3256" class="style-12" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px;"></div>
              <div id="boolean-I54-668-53-625-139-3257" class="style-2" style="position: absolute; left: 3.33331298828125px; top: 4.1665191650390625px; width: 13.333196640014648px; height: 11.666667938232422px;">
                <div id="stroke1" class="style-3" style="position: absolute; left: 0px; top: 5.187601089477539px; width: 13.333174705505371px; height: 1.2916088104248047px; background-color: var(--color-000000);"></div>
                <div id="stroke3" class="style-3" style="position: absolute; left: 7.23223876953125px; top: 0px; width: 6.100937843322754px; height: 11.666667938232422px; background-color: var(--color-000000);"></div>
              </div>
              <img id="img-54-668-53-625" src="/assets/figmaimages/figma_image_54_668_53_625.svg" alt="Icon/General/Arrow-Right" class="icon-crisp" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px;">
            </div>
          </div>

          <div id="cmp-13-71" style="position: absolute; left: 0px; top: 0px; width: 375px; height: 44px;">
            <div id="frame-I13-71-128-302" class="style-2" style="position: absolute; left: 293.5px; top: 16.6px; width: 68px; height: 13px;">
              <div id="grp-I13-71-128-303" class="style-2" style="position: absolute; left: 468.5px; top: 0.760009765625px; width: 24.5px; height: 11.5px; display:none;"></div>
              <div id="boolean-I13-71-128-310" class="style-35" style="position: absolute; left: 0px; top: 1px; width: 17.099990844726562px; height: 10.700004577636719px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_311.svg" alt="signal-bar-1" class="icon-crisp" style="position:absolute; left:0px; top:6.70001220703125px; width:3px; height:4px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_312.svg" alt="signal-bar-2" class="icon-crisp" style="position:absolute; left:4.79998779296875px; top:4.70001220703125px; width:3px; height:6px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_313.svg" alt="signal-bar-3" class="icon-crisp" style="position:absolute; left:9.4000244140625px; top:2.399993896484375px; width:3px; height:8.300003051757812px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_314.svg" alt="signal-bar-4" class="icon-crisp" style="position:absolute; left:14.0999755859375px; top:0px; width:3px; height:10.699999809265137px;">
              </div>
              <div id="boolean-I13-71-128-315" class="style-35" style="position: absolute; left: 22.1px; top: 1px; width: 15.4px; height: 11.05721px;">
                <div style="position:absolute; left:0; top:0; width:15.4px; height:4.78288px; background-color: var(--color-000000); opacity:0;"></div>
                <div style="position:absolute; left:2.6855px; top:3.82574px; width:10.03215px; height:3.66435px; background-color: var(--color-000000); opacity:0;"></div>
                <div style="position:absolute; left:5.36786px; top:7.6546px; width:4.66496px; height:3.40261px; background-color: var(--color-000000); opacity:0;"></div>
              </div>
            </div>
            <div id="frame-I13-71-128-319" style="position: absolute; left: 0px; top: 12px; width: 180px; height: 22px;">
              <div id="text-I13-71-128-320" class="typo-67" style="position: absolute; left: 29.5px; top: 14px; width: 37px; height: 18px; color: var(--color-303030);">
                19:27
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 3) Inject scripts in this exact order: app.js then screen-specific js
    function injectScripts() {
      const s1 = document.createElement("script");
      s1.src = "/assets/app.js";
      s1.dataset.injected = "signin";
      // Use defer=false to preserve immediate execution in append order
      const s2 = document.createElement("script");
      s2.src = "/assets/sign-in-11-235.js";
      s2.dataset.injected = "signin";

      document.body.appendChild(s1);
      document.body.appendChild(s2);
      injected.current.scripts.push(s1, s2);
    }

    // 4) Apply isolation on the wrapper to avoid global CSS interference.
    // Use all: initial to reset, but ensure fonts render as defined by Figma CSS.
    function applyWrapperIsolation() {
      if (!containerRef.current) return;
      containerRef.current.style.all = "initial";
      containerRef.current.style.display = "block";
    }

    injectStyles();
    applyWrapperIsolation();
    mountHtml();
    injectScripts();

    // Cleanup on unmount
    return () => {
      injected.current.links.forEach((l) => l.parentNode && l.parentNode.removeChild(l));
      injected.current.scripts.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
      if (containerRef.current) containerRef.current.innerHTML = "";

      const BODY_CLASS = "signin-isolation";
      if (previousBodyClassAdded.current && document.body.classList.contains(BODY_CLASS)) {
        document.body.classList.remove(BODY_CLASS);
      }
    };
  }, []);

  // Minimal container; no app shell; no other wrapping
  return <div ref={containerRef} />;
}
