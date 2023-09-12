import {
	FC,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

//исключаем из типа InputHTMLAttributes<HTMLInputElement> пропсы 'value' | 'onChange'
type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	type?: string
	placeholder?: string
	autoFocus?: boolean
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
	const {
		className,
		value = '',
		onChange,
		type = 'text',
		placeholder,
		autoFocus,
		...otherProps
	} = props

	const [isFocus, setIsFocus] = useState(false)
	const onFocus = () => {
		setIsFocus(true)
	}
	const onBlur = () => {
		setIsFocus(false)
	}

	const onSelect = (event: any) => {
		setCaretPosition(event?.target?.selectionStart || 0)
	}

	const [caretPosition, setCaretPosition] = useState(value.length)

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
		setCaretPosition(event.target.value.length)
	}

	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autoFocus) {
			setIsFocus(true)
			ref.current?.focus()
		}
	}, [autoFocus])

	return (
		<div className={classNames(styles.Input, {}, [className])}>
			{placeholder && <div className={styles.placeholder}>{placeholder}</div>}
			<div className={styles.caret_wrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocus && (
					<span
						className={styles.caret}
						style={{ left: `${caretPosition * 8}px` }}></span>
				)}
			</div>
		</div>
	)
})
