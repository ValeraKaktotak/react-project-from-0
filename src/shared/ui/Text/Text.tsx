import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { FC } from 'react'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}

export const Text: FC<TextProps> = ({
	className,
	title,
	text,
	theme = TextTheme.PRIMARY
}) => {
	const mods = {
		[styles[theme]]: true
	}
	return (
		<div className={classNames(styles.Text, mods, [className])}>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	)
}
