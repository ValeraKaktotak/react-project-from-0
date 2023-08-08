import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme: currentTheme, toggleTheme } = useTheme()
	console.log(currentTheme)
	return (
		<Button
			className={classNames(styles.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}>
			{currentTheme === Theme.DARK ? (
				<DarkIcon width='40px' height='40px' />
			) : (
				<LightIcon width='40px' height='40px' />
			)}
		</Button>
	)
}
