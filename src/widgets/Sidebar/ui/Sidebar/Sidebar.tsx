import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsIcon from 'shared/assets/icons/about-us.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppThemeClass } from 'shared/ui/AppLink/AppLink'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LanguagesSwitcher } from 'shared/ui/LanguagesSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import styles from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false)

	const { t } = useTranslation()

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}
	return (
		<div
			data-testid='sidebarTestId'
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}>
			<div className={styles.links}>
				<AppLink theme={AppThemeClass.PRIMARY} to={RoutePath.main}>
					<div className={styles.link}>
						<div className={styles.icon}>
							<HomeIcon />
						</div>
						<span>{t('Main page')}</span>
					</div>
				</AppLink>
				<AppLink theme={AppThemeClass.PRIMARY} to={RoutePath.about}>
					<div className={styles.link}>
						<div className={styles.icon}>
							<AboutUsIcon />
						</div>
						<span>{t('About Us')}</span>
					</div>
				</AppLink>
			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguagesSwitcher short={!collapsed} />
			</div>
			<Button
				className={styles.collapseBtn}
				theme={ThemeButton.CLEAR}
				background={ThemeButton.BACKGROUND_INVERTED}
				data-testid='sidebar-toggle'
				onClick={onToggle}
				round>
				{collapsed ? '<' : '>'}
			</Button>
		</div>
	)
}
