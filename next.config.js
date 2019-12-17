const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");

module.exports = withCss();
module.exports = withSass(
  withTM({
    transpileModules: ["react-bulma-components"],
    sassLoaderOptions: {
      includePaths: ["./components"]
    }
  })
);
