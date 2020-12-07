const CopyPlugin = require("copy-webpack-plugin");
var path = require('path');
 
module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html' }
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};