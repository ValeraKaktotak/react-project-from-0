import { LoginModal } from 'features/AuthByUsername'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const [openModal, setOpenModal] = useState<boolean>(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const toggleModal = useCallback(() => {
		setOpenModal((prev) => !prev)
	}, [])
	const logout = useCallback(() => {
		setOpenModal(false)
		dispatch(userActions.userLogout())
	}, [dispatch])

	const { t } = useTranslation('translation')

	if (authData) {
		return (
			<div className={classNames(styles.Navbar, {}, [className])}>
				<div className={styles.userName}>{authData.username}</div>
				<Button onClick={logout} theme={ThemeButton.CLEAR}>
					{t('Logout')}
				</Button>
			</div>
		)
	}

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button onClick={toggleModal} theme={ThemeButton.CLEAR}>
				{t('Login')}
			</Button>
			<LoginModal isOpen={openModal} isClose={toggleModal} />
		</div>
	)
}
