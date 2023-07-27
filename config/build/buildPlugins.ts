import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPath } from './types/config'

export const buildPlugins = (
	path: BuildPath
): webpack.WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
	]
}
