let path = require('path');

const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.s(a|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/index.html' },
        { from: 'src/favicon.ico' },
        { from: 'src/CNAME' },
        { from: 'src/robots.txt' }
      ],
    }),
  ]
};
