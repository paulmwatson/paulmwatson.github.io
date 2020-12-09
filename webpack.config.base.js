let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    critical: path.resolve(__dirname, './src/index.scss')
  },
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
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/favicon.ico' },
        { from: 'src/CNAME' },
        { from: 'src/robots.txt' }
      ],
    }),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json'
    }),
    new WebpackPwaManifest({
      name: 'Paul Watson - Professional Web Developer',
      short_name: 'Paul Watson',
      description: 'The website of Paul Watson, a professional remote web-developer in Cape Town, South Africa.',
      background_color: '#3273dc',
      theme_color: '#3273dc',
      crossorigin: 'use-credentials',
      ios: true,
      icons: [
        {
          src: path.resolve('src/images/photo-flowers-1-583w.webp'),
          sizes: [96, 128, 192, 256, 384, 512],
          ios: true
        },
        {
          src: path.resolve('src/images/icon_512.png'),
          sizes: [512],
          ios: 'startup'
        },
        {
          src: path.resolve('src/images/photo-flowers-1-583w.webp'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: process.env.NODE_ENV == 'development',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new GenerateSW()
  ]
};
