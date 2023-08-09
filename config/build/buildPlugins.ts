import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildPath } from './types/config'

export const buildPlugins = (
	path: BuildPath,
	isDev: boolean
): webpack.WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		//плагин для создания глобальных переменных, доступный в приложении
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	]
}
