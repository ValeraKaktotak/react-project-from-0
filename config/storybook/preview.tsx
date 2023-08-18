import type { Preview } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { BrowserDecorator } from '../../src/shared/config/storybook/BrowserDecorator/BrowserDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeProviderDecorator } from '../../src/shared/config/storybook/ThemeProviderDecorator/ThemeProviderDecorator'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		BrowserDecorator,
		ThemeProviderDecorator,
	],
}

export default preview
