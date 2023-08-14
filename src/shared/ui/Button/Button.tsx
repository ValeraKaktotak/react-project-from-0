import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	ERROR = 'error',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props
	return (
		<button
			className={classNames(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}>
			{children}
		</button>
	)
}
