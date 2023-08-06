import webpack from 'webpack'
import { BuildOptions } from './types/config'
/*
указываем расширения файлов, при импорте которых не надо будет указывать расширение
(import Component from './component')
*/

export const buildResolves = (
	options: BuildOptions
): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	}
}
