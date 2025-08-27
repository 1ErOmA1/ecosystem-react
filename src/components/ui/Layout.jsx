import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
	const location = useLocation()
	console.log(location)

	return (
		<div className='mockup-browser border bg-base-300 mt-10'>
			<div className='mockup-browser-toolbar'>
				<div className='input '>https://htmllessons.ru</div>
			</div>
			<div className='px-4 py-16 pt-4 bg-base-200'>
				<Header />
				<div className='text-sm breadcrumbs mt-5'>
					<ul>
						<li>EcoSystem React</li>
						<li>{location.pathname === '/profile' ? 'Profile' : 'Home'}</li>
					</ul>
				</div>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
