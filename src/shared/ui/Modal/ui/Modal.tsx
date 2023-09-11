import {
	FC,
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	isClose?: () => void
}
const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = (props) => {
	const { children, className, isClose, isOpen } = props

	const [isClosing, setClosing] = useState<boolean>(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeModal = useCallback(() => {
		if (isClose) {
			setClosing(true)
			timerRef.current = setTimeout(() => {
				isClose()
				setClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [isClose])

	const clickHandler = useCallback(
		(e: MouseEvent) => {
			e.stopPropagation()
		},
		[closeModal]
	)

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		},
		[closeModal]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.closingModal]: isClosing,
	}
	return (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className])}>
				<div className={styles.overlay} onClick={closeModal}>
					<div className={styles.content} onClick={clickHandler}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
