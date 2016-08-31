module.exports = {
  entry: './js/main.js',
  output: {
    path: './',
    filename: 'dist/bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './js/main.js',
        query: {
          presets: [
            'es2015'
          ]
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
  }
}