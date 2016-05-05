var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: ['./private/main.js'],
  output: {
    path: './public/assets',
    filename: 'main.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/, loaders: ['babel'], exclude: /node_modules/
    }]
  }
};
