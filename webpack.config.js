const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;
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
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              }
            },
          },
        ],
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new WebpackManifestPlugin({
      fileName: manifest,
      publicPath: "dist/",
    }),
  ],
};
