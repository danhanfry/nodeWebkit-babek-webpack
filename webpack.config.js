var path = require('path');
module.exports = {
  entry: './react/render.js',
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
         test: /\.js$/,
         loader: 'babel',
         exclude: /node_modules/
      }
    ]
  }
}
