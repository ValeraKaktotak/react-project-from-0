import { useCallback, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal'
import styles from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const [openModal, setOpenModal] = useState<boolean>(false)
	const toggleModal = useCallback(() => {
		setOpenModal((prev) => !prev)
	}, [])
	const { t } = useTranslation('translation')

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button onClick={toggleModal} theme={ThemeButton.CLEAR}>
				{t('Login')}
			</Button>
			<Modal isOpen={openModal} isClose={toggleModal}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, deserunt.
			</Modal>
		</div>
	)
}
