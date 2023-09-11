import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { t } = useTranslation('loginForm')

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Input type='text' value='test' />
			<Input type='text' value='test' />
			<Button theme={ThemeButton.OUTLINE}>{t('Enter')}</Button>
		</div>
	)
}
