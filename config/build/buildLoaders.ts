import webpack from 'webpack'
/*в rules конфигурируем лодеры они предназначены для обработки файлов выходящих за рамки js(png, css, ts и т.д.) */

export const builderLoaders = (): webpack.RuleSetRule[] => {
	//порядок лодеров имеет значение, поэтому вносим их в переменную в опр. порядке
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates CSS into CommonJS
			'css-loader',
			// Compiles Sass to CSS
			'sass-loader',
		],
	}
	return [typescriptLoader, cssLoader]
}
