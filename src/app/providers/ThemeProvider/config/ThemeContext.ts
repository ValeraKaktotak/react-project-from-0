import { createContext } from 'react'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
	LIGHT = 'app_light_theme',
	DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

//задаем для body класс с темой
const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
document.body.className = defaultTheme

export const ThemeContext = createContext<ThemeContextProps>({})
