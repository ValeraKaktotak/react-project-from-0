import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppThemeClass } from 'shared/ui/AppLink/AppLink'
import styles from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppThemeClass.PRIMARY} to={'/'}>
					{t('Main page')}
				</AppLink>
				<AppLink theme={AppThemeClass.PRIMARY} to={'/about'}>
					{t('About Us')}
				</AppLink>
			</div>
		</div>
	)
}
