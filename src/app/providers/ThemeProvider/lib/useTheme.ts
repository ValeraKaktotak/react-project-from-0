import { useContext } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../config/ThemeContext'

interface UseThemeResult {
	toggleTheme: () => void
	fnSetTheme: (theme: Theme) => void
	theme: Theme
}

export const useTheme = (): UseThemeResult => {
	const { setTheme, theme } = useContext(ThemeContext)

	const fnSetTheme = (theme: Theme) => {
		setTheme(theme)
	}

	const toggleTheme = () => {
		if (setTheme) {
			const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
			setTheme(newTheme)
			document.body.className = newTheme
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		}
	}

	return { toggleTheme, theme, fnSetTheme }
}
