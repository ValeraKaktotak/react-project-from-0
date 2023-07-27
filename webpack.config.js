const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') //to access built-in plugins

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }),
		new webpack.ProgressPlugin(),
	],
}
