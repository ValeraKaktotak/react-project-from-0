import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Loader } from 'shared/ui/Loader'

export const AppRouter = () => {
	return (
		<Suspense fallback={<Loader />}>
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
