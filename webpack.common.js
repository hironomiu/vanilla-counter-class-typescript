const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: { app: './src/ts/app.ts' },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.ts$/,
      //   loader: 'eslint-webpack-plugin',
      //   exclude: /node_modules/,
      //   options: {
      //     emitWarning: true,
      //   },
      // },
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['app'],
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.js'],
      exclude: 'node_modules',
    }),
  ],
}
