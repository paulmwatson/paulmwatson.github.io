const CopyPlugin = require("copy-webpack-plugin");
var path = require('path');
 
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html' },
        { from: 'src/favicon.ico' },
        { from: 'src/CNAME' }
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};