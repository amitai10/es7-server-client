module.exports = {
  entry: [
    'babel-polyfill',
    './main.js'
    ],
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 1111
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}