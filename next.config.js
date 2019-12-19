const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");

module.exports = withCss(
  withSass(
    withTM({
      transpileModules: ["react-bulma-components"],
      sassLoaderOptions: {
        includePaths: ["./components"]
      },
      exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          "/": { page: "/" },
          "/menu": { page: "/menu" },
          "/about": { page: "/about" }
        };
      }
    })
  )
);
