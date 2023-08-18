import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeContext } from 'app/providers/ThemeProvider/config/ThemeContext'
import { useContext } from 'react'

// export const ThemeSwitcherDecorator: Decorator = (Story) => {
// 	const { fnSetTheme } = useTheme()
// 	fnSetTheme(Theme.DARK)
// 	return <Story />
// }

export const ThemeSwitcherDecorator = (theme: Theme) => {
	const DecoratorFn: Decorator = (Story) => {
		const { setTheme } = useContext(ThemeContext)
		setTheme(theme)
		return <Story />
	}
	return DecoratorFn
}
