import { Decorator } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
	const DecoratorFn: Decorator = (Story) => (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	)
	return DecoratorFn
}
