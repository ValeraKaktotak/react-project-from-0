import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE THEME</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About Us</Link>
			<Suspense fallback='Loading...'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
