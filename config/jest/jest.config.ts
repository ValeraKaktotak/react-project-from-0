/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	globals: {
		__IS_DEV__: true,
	},
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
			'<rootDir>/config/jest/fileTransformer.tsx',
		'\\.s?css$': 'identity-obj-proxy',
	},
}
