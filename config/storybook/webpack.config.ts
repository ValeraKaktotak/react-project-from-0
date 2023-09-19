import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPath } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPath = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '../', '../', 'src')
	}
	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')
	config.module?.rules?.push(buildCssLoader(true))

	//отключаем дефольный svg лодер сторибука
	if (config.module && config.module.rules) {
		// @ts-ignore
		config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i }
			}
			return rule
		})
	}

	config.module?.rules?.push({
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [{ loader: '@svgr/webpack', options: { icon: true } }]
	})

	config.plugins.push(
		new webpack.DefinePlugin({
			__IS_DEV__: true
		})
	)

	return config
}
