let path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const AppManifestPlugin = require('webpack-web-app-manifest-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = merge(baseConfig, {
  performance: {
    hints: 'warning'
  },
  plugins: [
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.css',
      inline: false,
      minify: true,
      extract: false,
      width: 1325,
      height: 768,
      penthouse: {
        blockJSRequests: false,
      }
    }),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json'
    }),
    new AppManifestPlugin({
      content: {
        name: 'Paul Watson - Professional remote web-developer',
        short_name: 'Paul Watson',
        background_color: '#3273dc',
      },
      destination: '/'
    })
  ]
});