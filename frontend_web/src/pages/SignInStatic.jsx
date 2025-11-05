import React, { useEffect, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * SignInStatic
 * A minimal wrapper that mounts the Figma-exported Sign In screen without altering styles.
 * It injects the assets/common.css, assets/sign-in-11-235.css styles and runs assets/app.js, assets/sign-in-11-235.js scripts.
 * The HTML is used verbatim, and we avoid applying the app's global styles to prevent style drift.
 */
export default function SignInStatic() {
  const containerRef = useRef(null);
  const prevHeadInjections = useRef({ links: [], scripts: [] });

  useEffect(() => {
    // Helper to create <link rel="stylesheet"> for assets served from /assets
    function injectStyles() {
      const links = [];

      const commonCss = document.createElement("link");
      commonCss.rel = "stylesheet";
      commonCss.href = "/assets/common.css";
      commonCss.dataset.injected = "signin";
      links.push(commonCss);

      const screenCss = document.createElement("link");
      screenCss.rel = "stylesheet";
      screenCss.href = "/assets/sign-in-11-235.css";
      screenCss.dataset.injected = "signin";
      links.push(screenCss);

      // Append to head
      links.forEach((l) => document.head.appendChild(l));
      prevHeadInjections.current.links = links;
    }

    // Helper to inject scripts after DOM nodes are placed
    function injectScripts() {
      const scripts = [];

      const appJs = document.createElement("script");
      appJs.src = "/assets/app.js";
      appJs.defer = true;
      appJs.dataset.injected = "signin";
      scripts.push(appJs);

      const screenJs = document.createElement("script");
      screenJs.src = "/assets/sign-in-11-235.js";
      screenJs.defer = true;
      screenJs.dataset.injected = "signin";
      scripts.push(screenJs);

      scripts.forEach((s) => document.body.appendChild(s));
      prevHeadInjections.current.scripts = scripts;
    }

    // Mount: add styles and HTML content verbatim
    injectStyles();

    if (containerRef.current) {
      // Insert the inner content of the exported HTML body
      containerRef.current.innerHTML = `
        <!-- Screen container derived from root -->
        <div id="screen-sign-in-11-235" class="style-10" style="position: relative; width: 375px; height: 812px; overflow: hidden; background-color: var(--color-ffffff);">
          <!-- Titttle group (x:456,y:-336) relative to root (426,-430) => left:30, top:94 -->
          <div id="grp-13-110" style="position: absolute; left: 30px; top: 94px; width: 155px; height: 75px;">
            <!-- Hello, text (x:456,y:-336) => left:0, top:0 within group -->
            <div id="text-12-29" class="typo-60" style="position: absolute; left: 0px; top: 0px; width: 84px; height: 45px; color: var(--color-000000);">
              Hello,
            </div>
            <!-- Welcome Back! (x:456,y:-291) => relative to group parent (456,-336): left:0, top:45 -->
            <div id="text-12-30" class="typo-61" style="position: absolute; left: 0px; top: 45px; width: 155px; height: 30px; color: var(--color-121212);">
              Welcome Back!
            </div>
          </div>

          <!-- Forgot Password group (x:466,y:8) -> left:40, top:438 -->
          <div id="grp-12-91" style="position: absolute; left: 40px; top: 438px; width: 97px; height: 17px;">
            <div id="text-12-94" class="typo-62" style="position: absolute; left: 0px; top: 0px; width: 97px; height: 17px; color: var(--color-ff9c00);">
              Forgot Password?
            </div>
          </div>

          <!-- Button Google (x:557,y:167) -> left:131, top:597, 44x44 -->
          <div id="btn-13-35" style="position: absolute; left: 131px; top: 597px; width: 44px; height: 44px;">
            <!-- Rectangle 642 background card -->
            <div id="rect-13-36" class="style-126" style="position: absolute; left: 0px; top: 0px; width: 44px; height: 44px;"></div>
            <!-- Google component at (567,177) relative: left:10, top:10 -->
            <div id="cmp-13-48" class="style-2" style="position: absolute; left: 10px; top: 10px; width: 24px; height: 24px;">
              <!-- Vector layers within Google icon -->
              <img id="ico-13-39" src="/assets/figmaimages/figma_image_13_39.svg" alt="google-vector-1" class="icon-crisp" style="position: absolute; left: 2px; top: 2px; width: 19.999996185302734px; height: 19.999996185302734px;">
              <!-- The following vectors had only style refs; they are shapes with colors. Since no imagePath, we approximate via empty layers; maintained for structure -->
              <div id="ico-13-40" class="style-22" style="position: absolute; left: 3.15301513671875px; top: 0px; width: 15.655999183654785px; height: 7.755001068115234px; opacity: 1;"></div>
              <div id="ico-13-41" class="style-23" style="position: absolute; left: 3.09747314453125px; top: 12.027008056640625px; width: 15.607002258300781px; height: 7.972998142242432px; opacity: 1;"></div>
              <img id="ico-13-42" src="/assets/figmaimages/figma_image_13_42.svg" alt="google-vector-4" class="icon-crisp" style="position: absolute; left: 12px; top: 10px; width: 9.999998092651367px; height: 9.4141206741333px;">
            </div>
          </div>

          <!-- Button Facebook (x:626,y:167) -> left:200, top:597, 44x44 -->
          <div id="btn-13-49" style="position: absolute; left: 200px; top: 597px; width: 44px; height: 44px;">
            <div id="rect-13-50" class="style-126" style="position: absolute; left: 0px; top: 0px; width: 44px; height: 44px;"></div>
            <!-- facebook nested group at (636,177) => left:10, top:10 -->
            <div id="grp-13-58" style="position: absolute; left: 10px; top: 10px; width: 24px; height: 24px;">
              <div id="grp-13-59" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px;">
                <!-- BG 111 as style_25 (opacity 0.58) shape background -->
                <div id="ico-13-60" class="style-25" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px; opacity: 0.58;"></div>
                <img id="ico-13-61" src="/assets/figmaimages/figma_image_13_61.svg" alt="facebook-vector" class="icon-crisp" style="position: absolute; left: 2px; top: 2px; width: 20.000003814697266px; height: 20px;">
                <!-- style_27 opacity 0 (non-visible shape) -->
                <div id="ico-13-62" class="style-27" style="position: absolute; left: 0px; top: 0px; width: 24px; height: 24px; opacity: 0;"></div>
              </div>
            </div>
          </div>

          <!-- Don’t have an account (x:525,y:266)-> left:99, top:696 -->
          <div id="text-13-67" class="typo-63" style="position: absolute; left: 99px; top: 696px; width: 177px; height: 17px; color: var(--typo-63-color);">
            Don’t have an account? Sign up
          </div>

          <!-- Line group (x:516,y:130)-> left:90, top:560 -->
          <div id="grp-12-139" style="position: absolute; left: 90px; top: 560px; width: 195px; height: 17px;">
            <!-- Line 6 at (661,139) relative to group left:145, top:9 width50 height0: render as 1px line -->
            <div id="line-12-141" class="style-28" style="position: absolute; left: 145px; top: 9px; width: 50px; height: 1px; background-color: var(--color-d9d9d9);"></div>
            <!-- Line 5 at (516,139) -> left:0, top:9 -->
            <div id="line-12-140" class="style-28" style="position: absolute; left: 0px; top: 9px; width: 50px; height: 1px; background-color: var(--color-d9d9d9);"></div>
            <!-- Or Sign in With at (573,130) -> left:57, top:0 -->
            <div id="text-12-142" class="typo-64" style="position: absolute; left: 57px; top: 0px; width: 81px; height: 17px; color: var(--color-d9d9d9);">
              Or Sign in With
            </div>
          </div>

          <!-- Input field Email (x:456,y:-204)-> left:30, top:226 -->
          <div id="cmp-30-585" style="position: absolute; left: 30px; top: 226px; width: 315px; height: 81px;">
            <!-- Rectangle 6 (x:456,y:-178)-> within parent top offset: 26 -->
            <div id="rect-I30-585-30-298" class="style-30" style="position: absolute; left: 0px; top: 26px; width: 315px; height: 55px;"></div>
            <!-- Placeholder (x:476,y:-159) -> left:20, top:45 -->
            <div id="text-I30-585-30-300" class="typo-65" style="position: absolute; left: 20px; top: 45px; width: 61px; height: 17px; color: var(--color-d9d9d9);">
              Enter Email
            </div>
            <!-- Label (x:456,y:-204) -> left:0, top:0 -->
            <div id="text-I30-585-30-301" class="typo-66" style="position: absolute; left: 0px; top: 0px; width: 38px; height: 21px; color: var(--color-121212);">
              Email
            </div>
          </div>

          <!-- Input field Password (x:456,y:-93)-> left:30, top:337 -->
          <div id="cmp-30-590" style="position: absolute; left: 30px; top: 337px; width: 315px; height: 81px;">
            <!-- Rectangle 6 (x:456,y:-67)-> top:26 -->
            <div id="rect-I30-590-30-298" class="style-30" style="position: absolute; left: 0px; top: 26px; width: 315px; height: 55px;"></div>
            <!-- Placeholder (x:476,y:-48)-> left:20 top:45 -->
            <div id="text-I30-590-30-300" class="typo-65" style="position: absolute; left: 20px; top: 45px; width: 84px; height: 17px; color: var(--color-d9d9d9);">
              Enter Password
            </div>
            <!-- Label (x:456,y:-93)-> left:0 top:0 -->
            <div id="text-I30-590-30-301" class="typo-66" style="position: absolute; left: 0px; top: 0px; width: 107px; height: 21px; color: var(--color-121212);">
              Enter Password
            </div>
          </div>

          <!-- Home Indicator (x:426,y:348)-> left:0, top:778, width:375 height:34 -->
          <div id="cmp-42-614" style="position: absolute; left: 0px; top: 778px; width: 375px; height: 34px;">
            <!-- Line (x:546,y:369) relative to root; relative to component: left:120, top:21 -->
            <div id="rect-I42-614-42-603" class="style-32" style="position: absolute; left: 120px; top: 21px; width: 135px; height: 5px;"></div>
          </div>

          <!-- Big Button (x:456,y:50)-> left:30 top:480 width:315 height:60 layout horizontal -->
          <div id="btn-54-668" class="style-11" style="position: absolute; left: 30px; top: 480px; width: 315px; height: 60px; display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 12px;">
            <div id="text-I54-668-53-624" class="typo-58" style="color: var(--color-ffffff);">Sign In</div>
            <!-- Arrow icon composed -->
            <div id="cmp-I54-668-53-625" style="position: relative; width: 20px; height: 20px;">
              <div id="rect-I54-668-53-625-139-3256" class="style-12" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px;"></div>
              <!-- Union with two strokes -->
              <div id="boolean-I54-668-53-625-139-3257" class="style-2" style="position: absolute; left: 3.33331298828125px; top: 4.1665191650390625px; width: 13.333196640014648px; height: 11.666667938232422px;">
                <div id="stroke1" class="style-3" style="position: absolute; left: 0px; top: 5.187601089477539px; width: 13.333174705505371px; height: 1.2916088104248047px; background-color: var(--color-000000);"></div>
                <div id="stroke3" class="style-3" style="position: absolute; left: 7.23223876953125px; top: 0px; width: 6.100937843322754px; height: 11.666667938232422px; background-color: var(--color-000000);"></div>
              </div>
              <!-- Also include the provided imagePath for precise icon if available -->
              <img id="img-54-668-53-625" src="/assets/figmaimages/figma_image_54_668_53_625.svg" alt="Icon/General/Arrow-Right" class="icon-crisp" style="position: absolute; left: 0; top: 0; width: 20px; height: 20px;">
            </div>
          </div>

          <!-- Status Bar (x:426,y:-430)-> left:0 top:0 width:375 height:44 -->
          <div id="cmp-13-71" style="position: absolute; left: 0px; top: 0px; width: 375px; height: 44px;">
            <!-- Symbols frame (x:719.5,y:-413.4) relative to root vs status bar parent. parent origin (426,-430) => left:293.5, top:16.6 -->
            <div id="frame-I13-71-128-302" class="style-2" style="position: absolute; left: 293.5px; top: 16.6px; width: 68px; height: 13px;">
              <!-- Battery group -->
              <div id="grp-I13-71-128-303" class="style-2" style="position: absolute; left: 468.5px; top: 0.760009765625px; width: 24.5px; height: 11.5px; display:none;"></div>
              <!-- Combined Shape (signal bars) -->
              <div id="boolean-I13-71-128-310" class="style-35" style="position: absolute; left: 0px; top: 1px; width: 17.099990844726562px; height: 10.700004577636719px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_311.svg" alt="signal-bar-1" class="icon-crisp" style="position:absolute; left:0px; top:6.70001220703125px; width:3px; height:4px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_312.svg" alt="signal-bar-2" class="icon-crisp" style="position:absolute; left:4.79998779296875px; top:4.70001220703125px; width:3px; height:6px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_313.svg" alt="signal-bar-3" class="icon-crisp" style="position:absolute; left:9.4000244140625px; top:2.399993896484375px; width:3px; height:8.300003051757812px;">
                <img src="/assets/figmaimages/figma_image_13_71_128_314.svg" alt="signal-bar-4" class="icon-crisp" style="position:absolute; left:14.0999755859375px; top:0px; width:3px; height:10.699999809265137px;">
              </div>
              <!-- Wi-Fi composition (no image paths, render as placeholder shapes for completeness) -->
              <div id="boolean-I13-71-128-315" class="style-35" style="position: absolute; left: 22.1px; top: 1px; width: 15.4px; height: 11.05721px;">
                <div style="position:absolute; left:0; top:0; width:15.4px; height:4.78288px; background-color: var(--color-000000); opacity:0;"></div>
                <div style="position:absolute; left:2.6855px; top:3.82574px; width:10.03215px; height:3.66435px; background-color: var(--color-000000); opacity:0;"></div>
                <div style="position:absolute; left:5.36786px; top:7.6546px; width:4.66496px; height:3.40261px; background-color: var(--color-000000); opacity:0;"></div>
              </div>
            </div>
            <!-- Time frame (x:426,y:-418) -> left:0, top:12 -->
            <div id="frame-I13-71-128-319" style="position: absolute; left: 0px; top: 12px; width: 180px; height: 22px;">
              <div id="text-I13-71-128-320" class="typo-67" style="position: absolute; left: 29.5px; top: 14px; width: 37px; height: 18px; color: var(--color-303030);">
                19:27
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // After HTML is set, inject scripts so they can run
    injectScripts();

    // Cleanup on unmount: remove injected scripts/links and clear container
    return () => {
      prevHeadInjections.current.links.forEach((l) => {
        if (l.parentNode) l.parentNode.removeChild(l);
      });
      prevHeadInjections.current.scripts.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  // Wrapper with isolation: ensure our app layout styling does not affect the screen
  // We avoid additional wrappers/styles that could alter computed layout.
  return (
    <div
      // role and aria-labels are not added to avoid any default browser styling variations
      ref={containerRef}
      style={{
        // neutralize app container styles that might cascade
        all: "initial",
        // allow nested content to render as authored
        display: "block",
      }}
    />
  );
}
