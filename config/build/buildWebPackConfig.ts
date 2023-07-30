import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { builderLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { BuildOptions } from './types/config'

export const buildWebPackConfig = (
	options: BuildOptions
): webpack.Configuration => {
	const { mode, paths, isDev } = options
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(paths),
		module: {
			rules: builderLoaders(),
		},
		resolve: buildResolves(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}