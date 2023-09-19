import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input'
import styles from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getUserLogin } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { AppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
	const { t } = useTranslation('loginForm')
	const dispatch: AppDispatch = useDispatch()
	const { username, password, isLoading, error } = useSelector(getUserLogin)

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(loginActions.setUserName(value))
		},
		[dispatch]
	)
	const onChangeUserPassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setUserPassword(value))
		},
		[dispatch]
	)
	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, username, password])

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Text title={t('Authorization form')} />
			{error && <Text theme={TextTheme.ERROR} title="Error" text={error} />}
			<Input
				type="text"
				value={username}
				onChange={onChangeUserName}
				placeholder={t('Enter login >')}
				autoFocus
			/>
			<Input
				type="text"
				value={password}
				onChange={onChangeUserPassword}
				placeholder={t('Enter password >')}
			/>
			<Button
				theme={ThemeButton.OUTLINE}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Enter')}
			</Button>
		</div>
	)
})
