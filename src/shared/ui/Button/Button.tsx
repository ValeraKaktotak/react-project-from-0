import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	ERROR = 'error',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	round?: boolean
	background?: ThemeButton
	disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		background,
		round,
		disabled,
		...otherProps
	} = props

	const mods = {
		[styles.round]: round,
		[styles.disabled]: disabled
	}

	return (
		<button
			className={classNames(styles.Button, mods, [
				className,
				styles[theme],
				styles[background]
			])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
