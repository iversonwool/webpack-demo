const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: "[name].bundle.js",
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
    new HtmlWebpackPlugin({title: "开发环境"})
  ],
  devtool: 'inline-source-map'
}