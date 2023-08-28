import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
	const DecoratorFn: Decorator = (Story) => (
		<div className={`app ${theme}`}>
			<Story />
		</div>
	)
	return DecoratorFn
}
