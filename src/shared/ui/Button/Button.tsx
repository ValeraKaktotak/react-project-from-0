import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	ERROR = 'error',
	OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	round?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, round, ...otherProps } = props

	return (
		<button
			className={classNames(styles.Button, { [styles.round]: round }, [
				className,
				styles[theme],
			])}
			{...otherProps}>
			{children}
		</button>
	)
}
