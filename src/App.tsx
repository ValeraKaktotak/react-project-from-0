import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE THEME</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About Us</Link>
			<Suspense fallback='Loading...'>
				<Routes>
					<Route path='/' element={<MainPageLazy />} />
					<Route path='/about' element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
