import { fireEvent, screen } from '@testing-library/react'
import { renderWithRoutes } from 'shared/lib/tests/renderWithRoutes/renderWithRoutes'
import { Counter } from './Counter'

describe('counter component', () => {
	test('Test render', () => {
		renderWithRoutes(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		expect(screen.getByTestId('counterTestId')).toBeInTheDocument()
	}),
		test('push increment', () => {
			renderWithRoutes(<Counter />, {
				initialState: { counter: { value: 10 } },
			})
			const toggleBtn = screen.getByTestId('counterTestIncrement')
			expect(screen.getByTestId('counterTestId')).toBeInTheDocument()
			fireEvent.click(toggleBtn)
			expect(screen.getByTestId('counterTestValue')).toHaveTextContent('11')
		}),
		test('push decrement', () => {
			renderWithRoutes(<Counter />, {
				initialState: { counter: { value: 10 } },
			})
			const toggleBtn = screen.getByTestId('counterTestDecrement')
			expect(screen.getByTestId('counterTestId')).toBeInTheDocument()
			fireEvent.click(toggleBtn)
			expect(screen.getByTestId('counterTestValue')).toHaveTextContent('9')
		})
})
