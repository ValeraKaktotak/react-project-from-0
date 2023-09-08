import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	return (
		<div>
			<h1>value = {counterValue}</h1>
			<Button theme={ThemeButton.OUTLINE} onClick={increment}>
				increment
			</Button>
			<Button theme={ThemeButton.OUTLINE} onClick={decrement}>
				decrement
			</Button>
		</div>
	)
}
