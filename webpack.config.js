const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/decorator-pattern/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //指定模板文件
      filename: 'index.html' //产出后的文件名
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
} 