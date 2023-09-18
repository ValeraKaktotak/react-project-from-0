import { type FC, Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/AppRouter'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app')}>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<div className="app-container">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
