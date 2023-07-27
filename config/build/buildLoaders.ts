import webpack from 'webpack'
/*в rules конфигурируем лодеры они предназначены для обработки файлов выходящих за рамки js(png, css, ts и т.д.) */

export const builderLoaders = (): webpack.RuleSetRule[] => {
	//порядок лодеров имеет значение, поэтому вносим их в переменную в опр. порядке
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	return [typescriptLoader]
}
