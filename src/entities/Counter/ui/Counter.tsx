import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const { t } = useTranslation()

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	return (
		<div data-testid='counterTestId'>
			<h1 data-testid='counterTestValue'>
				{t('value')} = {counterValue}
			</h1>
			<Button
				theme={ThemeButton.OUTLINE}
				onClick={increment}
				data-testid='counterTestIncrement'>
				{t('increment')}
			</Button>
			<Button
				theme={ThemeButton.OUTLINE}
				onClick={decrement}
				data-testid='counterTestDecrement'>
				{t('decrement')}
			</Button>
		</div>
	)
}
