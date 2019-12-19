const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");

// TODO: Exporting
module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/menu": { page: "/menu" },
      "/about": { page: "/about" }
    };
  }
};

module.exports = withCss({
  cssModules: true
});

module.exports = withSass(
  withTM({
    transpileModules: ["react-bulma-components"],
    sassLoaderOptions: {
      includePaths: ["./components"]
    }
  })
);
