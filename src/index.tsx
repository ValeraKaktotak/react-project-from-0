import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/config/i18n/i18n'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	)
}
