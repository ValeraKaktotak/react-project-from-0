import { fireEvent, screen } from '@testing-library/react'
import { renderWithRoutes } from 'shared/lib/tests/renderWithRoutes/renderWithRoutes'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('classNames', () => {
	test('Test render', () => {
		renderWithRoutes(<Sidebar />)
		expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument()
	}),
		test('Test toggle sidebar', () => {
			// renderWithRoutes(<Sidebar />)
			renderWithRoutes(<Sidebar />)
			const toggleBtn = screen.getByTestId('sidebar-toggle')
			expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument()
			fireEvent.click(toggleBtn)
			expect(screen.getByTestId('sidebarTestId')).toHaveClass('collapsed')
		})
})
