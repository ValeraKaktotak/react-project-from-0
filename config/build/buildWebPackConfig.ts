import webpack from 'webpack'
import { builderLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { BuildOptions } from './types/config'

export const buildWebPackConfig = (
	options: BuildOptions
): webpack.Configuration => {
	const { mode, paths } = options
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
	}
}
