const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

const root = path.join(__dirname, '..');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    main: path.join(root, 'src/js'),
  },
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap',
          'sass?sourceMap',
        ),
        test: /\.scss$/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(root, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    alias: {
      scss: path.join(root, 'src/scss'),
    },
  },
};
