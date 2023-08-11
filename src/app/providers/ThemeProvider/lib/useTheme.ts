import { useContext } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../config/ThemeContext'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export const useTheme = (): UseThemeResult => {
	const { setTheme, theme } = useContext(ThemeContext)

	const toggleTheme = () => {
		if (setTheme) {
			const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
			setTheme(newTheme)
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		}
	}

	return { toggleTheme, theme }
}
