import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }),
		new webpack.ProgressPlugin(),
	],
	module: {
		/*в rules конфигурируем лодеры они предназначены для обработки файлов выходящих за рамки js(png, css, ts и т.д.) */
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		//указываем расширения файлов, при импорте которых не надо будет указывать расширение
		//(import Component from './component')
		extensions: ['.tsx', '.ts', '.js'],
	},
}

export default config
