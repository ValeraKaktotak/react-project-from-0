import { Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const BrowserDecorator: Decorator = (Story) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
)
