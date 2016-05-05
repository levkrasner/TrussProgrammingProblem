module.exports = {
  entry: ['./private/main.js'],
  output: {
    path: './public/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
