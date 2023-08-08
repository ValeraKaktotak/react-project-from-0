import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppThemeClass {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

//добавляем пропсы to, children и т.д. для линка
interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppThemeClass
}

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	theme = AppThemeClass.PRIMARY,
	...otherProps
}) => {
	return (
		<Link
			to={to}
			className={classNames(styles.AppLink, {}, [className, styles[theme]])}
			{...otherProps}>
			{children}
		</Link>
	)
}
