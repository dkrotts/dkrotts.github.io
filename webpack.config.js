var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: './bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}