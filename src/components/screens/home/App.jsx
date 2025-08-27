import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Modal from 'react-modal'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Form } from './Form'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

function App() {
	const [modalIsOpen, setIsOpen] = useState(false)

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setIsOpen(true)}>Open modal</button>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					closeTimeoutMS={500}
				>
					<h2 style={{ color: '#333' }}>Hello</h2>
					<button onClick={closeModal}>
						<AiOutlineCloseCircle />
					</button>
					<div>I am a modal</div>
					<Form />
				</Modal>

				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
