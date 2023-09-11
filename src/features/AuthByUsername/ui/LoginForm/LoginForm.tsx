import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { t } = useTranslation('loginForm')

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<input type='text' />
			<input type='text' />
			<Button theme={ThemeButton.OUTLINE}>{t('Enter')}</Button>
		</div>
	)
}
