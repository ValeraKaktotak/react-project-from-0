import { FC, InputHTMLAttributes, memo } from 'react'
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
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
	const { className, value, onChange, type = 'text', ...otherProps } = props

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
	}

	return (
		<div className={classNames(styles.Input, {}, [className])}>
			<input type={type} value={value} onChange={onChangeHandler} />
		</div>
	)
})
