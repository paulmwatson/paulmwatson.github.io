let path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = merge(baseConfig, {
  performance: {
    hints: 'warning'
  },
  plugins: [
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1325,
      height: 768,
      penthouse: {
        blockJSRequests: false,
      }
    }),
  ]
});