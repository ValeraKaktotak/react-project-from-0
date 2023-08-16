import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('classNames', () => {
	test('Test render', () => {
		renderWithTranslations(<Sidebar />)
		expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument()
	}),
		test('Test toggle sidebar', () => {
			renderWithTranslations(<Sidebar />)
			const toggleBtn = screen.getByTestId('sidebar-toggle')
			expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument()
			fireEvent.click(toggleBtn)
			expect(screen.getByTestId('sidebarTestId')).toHaveClass('collapsed')
		})
})
