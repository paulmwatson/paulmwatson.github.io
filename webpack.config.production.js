let path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.css',
      inline: false,
      minify: true,
      extract: false,
      width: 1024,
      height: 768,
      penthouse: {
        blockJSRequests: false,
      }
    })
  ]
});