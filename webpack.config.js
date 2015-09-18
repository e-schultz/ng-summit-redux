var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
];

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index',
    './src/simple-party/index',
    './src/simple-party-dev-tools/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ],
  resolve: {
    extensions: ['', '.js'],
    
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      exclude: /node_modules/
    }, {
      // SASS LOADER
      // Reference: https://github.com/jtangelder/sass-loader
      // Allow loading scss through js
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw'
    }]
  }
};
