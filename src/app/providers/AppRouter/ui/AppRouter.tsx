import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
	return (
		<Suspense fallback='Loading...'>
			<Routes>
				{Object.values(routeConfig).map((value) => (
					<Route
						key={value.path}
						path={value.path}
						element={<div className='page-wrapper'>{value.element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
