import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Suspense, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/AppRouter'

const App: FC = () => {
	const { theme } = useTheme()

	const [openModal, setOpenModal] = useState<boolean>(false)
	const closeModal = () => {
		setOpenModal(false)
	}

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<Button onClick={() => setOpenModal(true)}>Modal</Button>
				<Modal isOpen={openModal} isClose={closeModal}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
					deserunt.
				</Modal>
				<div className='app-container'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
