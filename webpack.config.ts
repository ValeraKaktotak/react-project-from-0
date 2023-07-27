import { BuildPath } from 'config/build/types/config'
import path from 'path'
import webpack from 'webpack'
import { buildWebPackConfig } from './config/build/buildWebPackConfig'

const paths: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'build', 'index.html'),
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebPackConfig({
	mode,
	paths,
	isDev,
})

export default config
