import { Decorator } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeProviderDecorator: Decorator = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
)
