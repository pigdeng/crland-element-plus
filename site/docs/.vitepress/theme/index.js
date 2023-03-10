// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("crland-base").then((module) => {
      app.use(module.Button);
      app.use(module.Icon);
    });
  },
};
