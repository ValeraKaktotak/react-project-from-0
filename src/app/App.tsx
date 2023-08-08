import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/AppRouter'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='app-container'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
