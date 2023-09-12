import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginModal.module.scss'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	isClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({
	className,
	isClose,
	isOpen,
}) => {
	return (
		<Modal
			lazy
			isOpen={isOpen}
			isClose={isClose}
			className={classNames(styles.LoginModal, {}, [className])}>
			<LoginForm />
		</Modal>
	)
}
