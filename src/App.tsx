import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'

const App = () => {
	return (
		<div>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About Us</Link>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</div>
	)
}

export default App
