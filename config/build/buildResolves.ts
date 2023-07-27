import webpack from 'webpack'
/*
	указываем расширения файлов, при импорте которых не надо будет указывать расширение
	(import Component from './component')
	*/

export const buildResolves = (): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}
}
