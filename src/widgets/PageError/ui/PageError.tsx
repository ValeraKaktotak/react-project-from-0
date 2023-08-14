import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

const pageRestart = () => {
	location.reload()
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(styles.PageError, {}, [className])}>
			<h1>{t('Something went wrong!!!')}</h1>
			<Button theme={ThemeButton.ERROR} onClick={pageRestart}>
				{t('Reload page')}
			</Button>
		</div>
	)
}
