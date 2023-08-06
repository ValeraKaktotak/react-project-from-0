import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => {
	return (
		<Suspense fallback='Loading...'>
			<Routes>
				{Object.values(routeConfig).map((value) => (
					<Route key={value.path} path={value.path} element={value.element} />
				))}
			</Routes>
		</Suspense>
	)
}
