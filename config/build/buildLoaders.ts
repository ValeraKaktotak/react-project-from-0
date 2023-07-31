import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
/*в rules конфигурируем лодеры они предназначены для обработки файлов выходящих за рамки js(png, css, ts и т.д.) */

export const builderLoaders = ({
	isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
	//порядок лодеров имеет значение, поэтому вносим их в переменную в опр. порядке
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) =>
							Boolean(resPath.includes('.module.scss')),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	}
	return [typescriptLoader, cssLoader]
}
