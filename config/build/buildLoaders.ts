import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'
/* в rules конфигурируем лодеры они предназначены для обработки файлов выходящих за рамки js(png, css, ts и т.д.) */

export const builderLoaders = ({
	isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
	// порядок лодеров имеет значение, поэтому вносим их в переменную в опр. порядке
	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [{ loader: '@svgr/webpack', options: { icon: true } }],
	}
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}
	// если не используем typescript то нужен babel
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const cssLoader = buildCssLoader(isDev)

	return [typescriptLoader, cssLoader, svgLoader, fileLoader]
}
