// UI Lovelace Minimalist tapbar compatibility patch for Home Assistant 2026+
// Runs only when the selected/card-mod theme is a Minimalist tapbar theme.
(function () {
  const STYLE_ID = "ulm-mobile-tapbar-ha2026-fix";
  const TAPBAR_THEMES = new Set([
    "minimalist-mobile-tapbar",
    "minimalist-ios-tapbar",
  ]);

  const CSS = `
    .header {
      position: fixed !important;
      top: auto !important;
      bottom: 0px !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      z-index: 999 !important;
      height: var(--header-height, 70px) !important;
      transform: none !important;
      box-shadow: var(--footer-shadow, 0px -1px 3px 0px rgba(0,0,0,0.12));
    }
    .toolbar {
      height: var(--header-height, var(--header-base-height, 70px)) !important;
      padding-bottom: env(safe-area-inset-bottom) !important;
    }
    #view {
      padding-top: 0 !important;
      padding-bottom: var(--header-height, 70px) !important;
    }
    ha-tab-group {
      display: flex !important;
      justify-content: flex-start !important;
      width: 100% !important;
      min-width: 0 !important;
      overflow: hidden !important;
    }
    ha-tab-group::part(base),
    ha-tab-group::part(nav) {
      width: 100% !important;
      min-width: 0 !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    ha-tab-group::part(nav)::-webkit-scrollbar {
      display: none;
    }
    ha-tab-group::part(tabs) {
      width: max-content !important;
      min-width: max-content !important;
      display: flex !important;
    }
    ha-tab-group-tab,
    ha-tab,
    paper-tab,
    sl-tab {
      flex: 0 0 56px !important;
      width: 56px !important;
      min-width: 56px !important;
      justify-content: center !important;
    }
  `;

  function selectedThemeMatches() {
    try {
      const raw = localStorage.getItem("selectedTheme");
      if (raw && TAPBAR_THEMES.has(JSON.parse(raw).theme)) return true;
    } catch (_) {}

    const theme = getComputedStyle(document.documentElement)
      .getPropertyValue("--card-mod-theme")
      .trim();
    return TAPBAR_THEMES.has(theme);
  }

  function findHuiRootShadow() {
    const ha = document.querySelector("home-assistant");
    const main = ha?.shadowRoot?.querySelector("home-assistant-main");
    const panel = main?.shadowRoot?.querySelector("ha-panel-lovelace");
    const root = panel?.shadowRoot?.querySelector("hui-root");
    return root?.shadowRoot;
  }

  function isMobileViewport() {
    // Do not run the bottom tapbar fix on desktop-width layouts. Otherwise the
    // fixed bottom header can cover HA sidebar items such as the user/profile
    // icon at the bottom of the sidebar.
    return window.matchMedia("(max-width: 767px)").matches;
  }

  function apply() {
    const root = findHuiRootShadow();
    if (!root) return false;

    if (!selectedThemeMatches() || !isMobileViewport()) {
      const style = root.getElementById(STYLE_ID);
      if (style) style.remove();
      return false;
    }

    let style = root.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      root.appendChild(style);
    }
    if (style.textContent !== CSS) style.textContent = CSS;
    return true;
  }

  function schedule() {
    apply();
    setTimeout(apply, 500);
    setTimeout(apply, 1500);
    setTimeout(apply, 4000);
  }

  window.addEventListener("location-changed", schedule);
  window.addEventListener("resize", schedule);
  window.addEventListener("hashchange", schedule);
  window.addEventListener("storage", schedule);
  document.addEventListener("visibilitychange", schedule);
  schedule();
  setInterval(apply, 5000);
})();
