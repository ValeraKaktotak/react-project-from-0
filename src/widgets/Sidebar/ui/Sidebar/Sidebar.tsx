import { useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LanguagesSwitcher } from 'shared/ui/LanguagesSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import styles from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}
	return (
		<div
			data-testid='sidebarTestId'
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}>
			<Button
				className={styles.collapseBtn}
				theme={ThemeButton.CLEAR}
				background={ThemeButton.BACKGROUND_INVERTED}
				data-testid='sidebar-toggle'
				onClick={onToggle}
				round>
				{collapsed ? '<' : '>'}
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguagesSwitcher />
			</div>
		</div>
	)
}
