import { render } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('classNames', () => {
	test('Test render', () => {
		const { getByText } = render(<Button>Click me</Button>)
		const buttonElement = getByText('Click me')
		expect(buttonElement).toBeInTheDocument()
	})
})
