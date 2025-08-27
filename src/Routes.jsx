import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'

import App from './components/screens/home/App'
import { Profile } from './components/screens/profile/Profile'
import { Layout } from './components/ui/Layout'

export function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path='/' element={<Layout />}>
					<Route index element={<App />} />
					<Route path='profile' element={<Profile />} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	)
}
