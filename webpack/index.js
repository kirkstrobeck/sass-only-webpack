//Variable Declarations
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*var KssWebpackPlugin = require('kss-webpack-plugin');
var KssConfig = {
  source: '../src/scss'
};*/
var webpack = require('webpack');
var path = require('path');
var root = path.join(__dirname, '..');

//Modules
module.exports = {
    debug: true,
    entry: {
        main: path.join(root, 'src/js')
    },
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js',
        //sourceMapFilename: '[name].map'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {

          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap',
                    'sass?sourceMap'
                )
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        //new KssWebpackPlugin(KssConfig)
    ],
    resolve: {
        alias: {

            scss: path.join(root, 'src/scss')
        }
    }
};
