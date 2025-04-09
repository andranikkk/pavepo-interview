import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { store } from './app/store'
// import FetchUsers from './pages/FetchUsers/FetchUsers'
import { UserPage } from './pages/UserPage/UserPage'

import './index.scss'

const queryClient = new QueryClient()

const container = document.getElementById('root')

const FetchUsers = lazy(() => import('./pages/FetchUsers/FetchUsers')) // Пример разделения страницы по чанкам

if (container) {
	const root = createRoot(container)

	root.render(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Suspense fallback={<div>Загрузка пользователей...</div>}>
						{/* Здесь можно было бы подключить компонент Skeleton, Spinner либо Loader */}
						<Routes>
							<Route path='/' element={<Navigate to='/users' replace />} />
							<Route path='/users' element={<FetchUsers />} />
							<Route path='/users/:id' element={<UserPage />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	)
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
	)
}
