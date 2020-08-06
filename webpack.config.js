const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExctractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "src/js/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExctractPlugin.loader, // Esto devuelve un string
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portfolio",
    }),
    new MiniCSSExctractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
