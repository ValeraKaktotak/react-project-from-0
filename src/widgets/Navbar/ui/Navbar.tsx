import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppThemeClass } from 'shared/ui/AppLink/AppLink'
import styles from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppThemeClass.PRIMARY} to={'/'}>
					Main Page
				</AppLink>
				<AppLink theme={AppThemeClass.PRIMARY} to={'/about'}>
					About Us
				</AppLink>
			</div>
		</div>
	)
}
