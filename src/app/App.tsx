import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/AppRouter'

const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='Loading...'>
				<Navbar />
				<div className='app-container'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
