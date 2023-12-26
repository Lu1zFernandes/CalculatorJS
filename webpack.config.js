//webpack.config.js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8000,
  },
  entry: {
    index: "./src/js/index.js",
    calculate: "./src/js/calculate.js",
    clear: "./src/js/clear.js",
    copy: "./src/js/copy.js",
    keys: "./src/js/keys.js",
    theme: "./src/js/theme.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
  },
  plugins: [new MiniCssExtractPlugin()],
};
