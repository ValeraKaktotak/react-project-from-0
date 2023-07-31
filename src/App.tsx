import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'

const App = () => {
	return (
		<div>
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
