const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared'
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared'
    // },
    // shared: 'lodash'
  },
  // optimization: {
  //   // runtimeChunk: 'single'
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|svg|jpeg|gif)$/i, type: "asset/resource"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: "Caching"})
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
}