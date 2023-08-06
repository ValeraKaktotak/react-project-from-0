import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/AppRouter'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE THEME</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About Us</Link>
			<AppRouter />
		</div>
	)
}

export default App
