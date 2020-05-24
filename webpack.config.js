const webpack = require("webpack");
const path = require("path");
require("@babel/polyfill");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    devtool: isProduction ? 'none' : 'source-map',
    cache: false,
    entry: ["@babel/polyfill", "./src/index.js", "./src/scss/style.scss"],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ]
  }

  return config;
};
