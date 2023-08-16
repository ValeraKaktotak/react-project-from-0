import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('classNames', () => {
	test('Test render', () => {
		const { getByText } = render(<Button>Click me</Button>)
		const buttonElement = getByText('Click me')
		expect(buttonElement).toBeInTheDocument()
	}),
		test('Test class', () => {
			const { getByText } = render(
				<Button theme={ThemeButton.ERROR}>Click me</Button>
			)
			const buttonElement = getByText('Click me')
			expect(buttonElement).toHaveClass('Button', 'error')
			screen.debug()
		})
})
