module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard-with-typescript', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react'],
	rules: {
		'no-tabs': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/consistent-type-imports': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'no-unneeded-ternary': 'off',
		'@typescript-eslint/naming-convention': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
}
