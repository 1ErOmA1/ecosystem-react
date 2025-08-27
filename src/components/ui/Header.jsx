import { Link } from 'react-router-dom'

export function Header() {
	return (
		<div className='navbar bg-base-100 rounded-lg'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>EcoSystem React</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
