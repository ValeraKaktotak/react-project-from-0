import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/config/i18n/i18n'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StoreProvider>
			<BrowserRouter>
				<ErrorBoundary>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</BrowserRouter>
		</StoreProvider>
	)
}
