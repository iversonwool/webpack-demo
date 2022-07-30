const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'production',
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
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        // type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: "Caching"})
  ],
  // devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist'
  // }
}