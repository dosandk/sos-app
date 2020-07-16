require('dotenv/config');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const jsLoaders = require('./loaders/js-loaders');
const cssLoaders = require('./loaders/css-loaders');
// const fontLoaders = require('./loaders/font-loaders');
// const imageLoaders = require('./loaders/image-loaders');

module.exports = {
  target: 'web',
  entry: {
    app: path.join(__dirname, '../src/index.js'),
    // styles: path.join(__dirname, '../src/css/style.scss')
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
    chunkFilename: '[name]-[id].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: imageLoaders
      // },
      // {
      //   // | svg - add in case when we need load svg font
      //   test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: fontLoaders
      // },
      {
        test: /\.(css|scss)$/i,
        use: cssLoaders
      },
      {
        test: /\.(js)?$/,
        use: jsLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.apiKey': JSON.stringify(process.env.apiKey),
      'process.env.authDomain': JSON.stringify(process.env.authDomain),
      'process.env.databaseURL': JSON.stringify(process.env.databaseURL),
      'process.env.projectId': JSON.stringify(process.env.projectId),
      'process.env.storageBucket': JSON.stringify(process.env.storageBucket),
      'process.env.messagingSenderId': JSON.stringify(process.env.messagingSenderId),
      'process.env.appId': JSON.stringify(process.env.appId),
      'process.env.measurementId': JSON.stringify(process.env.measurementId),
      'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname, '../src/assets')
    //   },
    //   {
    //     from: path.join(__dirname, '../src/components/product-form/*.svg'),
    //     flatten: true
    //   }
    // ])
  ]
};

