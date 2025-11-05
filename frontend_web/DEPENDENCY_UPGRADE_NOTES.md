# Dependency upgrade summary

Updated dependencies (package.json):
- react: ^18.3.1 (from ^18.2.0)
- react-dom: ^18.3.1 (from ^18.2.0)
- react-router-dom: ^6.30.1 (unchanged; current latest in v6 line)
- react-scripts: ^5.0.1 (unchanged; last CRA v5 release)
- dev: cross-env: ^7.0.3 (unchanged)

Lockfile: package-lock.json updated via npm install.

Build status:
- npm run build: Successful. Only ESLint warnings in SignInStatic.jsx about refs inside effect cleanup; non-blocking.

Notable considerations:
- React 19 is available but this project remains on React 18 to avoid breaking changes with CRA v5 and testing stack.
- CRA v5 remains; migrating to Vite or CRA alternatives is optional and not required.

Environment variables:
- No script/env changes. Ensure .env contains:
  REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL, REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS, REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_HEALTHCHECK_PATH, REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

Follow-up recommended (optional):
- Run: npx update-browserslist-db@latest to refresh caniuse-lite data.
- Consider addressing ESLint warnings in src/pages/SignInStatic.jsx by capturing refs inside effect before cleanup.
- Optionally run: npm audit fix (non-breaking fixes), or npm audit fix --force (may introduce breaking updates).
