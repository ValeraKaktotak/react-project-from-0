import { screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('classNames', () => {
	test('Test render', () => {
		renderWithTranslations(<Sidebar />)
		expect(screen.getByTestId('sidebarTestId')).toBeInTheDocument()
	})
})
