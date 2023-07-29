import path from 'path'
import webpack from 'webpack'
import { buildWebPackConfig } from './config/build/buildWebPackConfig'
import { BuildPath, buildEnv } from './config/build/types/config'

export default (env: buildEnv) => {
	const paths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const PORT = env.port || 3000

	const config: webpack.Configuration = buildWebPackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	})

	return config
}
