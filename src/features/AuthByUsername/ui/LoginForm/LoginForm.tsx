import { FC, useState } from 'react'
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

	const [loginValue, setLoginValue] = useState('')
	const changeLoginValue = (newValue: string) => {
		setLoginValue(newValue)
	}
	const [passwordValue, setPasswordValue] = useState('')
	const changePasswordValue = (newValue: string) => {
		setPasswordValue(newValue)
	}

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Input
				type='text'
				value={loginValue}
				onChange={changeLoginValue}
				placeholder={t('Enter login >')}
				autoFocus
			/>
			<Input
				type='text'
				value={passwordValue}
				onChange={changePasswordValue}
				placeholder={t('Enter password >')}
			/>
			<Button theme={ThemeButton.OUTLINE}>{t('Enter')}</Button>
		</div>
	)
}
