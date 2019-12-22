const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: require("html-webpack-template"),
      title:
        "BlackPearl in your Area! | Home of the Bubble Tea Shop in Bacoor, Cavite",
      favicon: "./src/shared/img/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      showErrors: false,
      meta: [
        {
          name: "description",
          content: "Home of the Bubble Tea Shop in Bacoor, Cavite, Philippines."
        },
        {
          name: "owner",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)"
        }
      ],
      links: [
        {
          rel: "preload",
          href:
            "https://fonts.googleapis.com/css?family=Kanit:400,500,600&display=swap",
          as: "style"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Kanit:400,500,600&display=swap"
        }
      ],
      inlineManifestWebpackName: "webpackManifest"
    }),
    new InlineManifestWebpackPlugin()
  ]
});
