const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const dist = path.resolve(__dirname, "./src/dist")
const manifest = path.resolve(__dirname, "./src/_data/manifest.json")

module.exports = {
  mode: "production",

  entry: "./src/_js/main.js",

  output: {
    filename: "app.[chunkhash].js",
    path: dist,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        options: {
          presets: ["env"],
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?sourceMap",
          "sass-loader?sourceMap&outputStyle=compressed",
        ],
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin([dist]),
    new MiniCssExtractPlugin({
      filename: "app.[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new ManifestPlugin({
      fileName: manifest,
      publicPath: "dist/",
    }),
  ],
};
