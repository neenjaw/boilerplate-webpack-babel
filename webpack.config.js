const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/assets/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'assets/js/[name].bundle.[contenthash].js'
  },
  devServer: { contentBase: './dist' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': {'browsers': ['last 2 versions', 'safari >= 7']}
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body', // or 'head'
      chunks: ['index']
    })
  ]
};