import { type FC, type ReactNode, useMemo, useState } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext
} from '../config/ThemeContext'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface MyComponentProps {
	children: ReactNode
}

const ThemeProvider: FC<MyComponentProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const themeProps = useMemo(
		() => ({
			theme,
			setTheme
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
	)
}

export default ThemeProvider
