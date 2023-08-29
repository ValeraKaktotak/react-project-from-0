import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './LanguagesSwitcher.module.scss'

interface LanguagesSwitcherProps {
	className?: string
	short?: boolean
}

export const LanguagesSwitcher: FC<LanguagesSwitcherProps> = ({
	className,
	short,
}) => {
	const { t, i18n } = useTranslation('translation')

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}
	return (
		<Button
			onClick={changeLanguage}
			theme={ThemeButton.CLEAR}
			className={classNames(styles.LanguagesSwitcher, {}, [className])}>
			{short ? t('Language last') : t('Language')}
		</Button>
	)
}
