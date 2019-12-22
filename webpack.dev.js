const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title:
        "BlackPearl in your Area! | Home of the Bubble Tea Shop in Bacoor, Cavite | Developer Mode",
      favicon: "./src/shared/img/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      meta: [
        {
          name: "description",
          content: "Front-End Web Developer, Open-Source Enthusiast."
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