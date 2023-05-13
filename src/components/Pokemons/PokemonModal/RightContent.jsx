import { useState } from 'react'

const RightContent = () => {
	const [activeTab, setActiveTab] = useState('details')

	const handleTabClick = (tab) => {
		setActiveTab(tab)
	}
	return (
		<>
			<button
				className={`mr-2 px-4 py-2 rounded ${
					activeTab === 'details' ? 'bg-gray-700 text-white' : 'bg-gray-200'
				}`}
				onClick={() => handleTabClick('details')}
			>
				Details
			</button>
			<button
				className={`mr-2 px-4 py-2 rounded ${
					activeTab === 'moves' ? 'bg-gray-700 text-white' : 'bg-gray-200'
				}`}
				onClick={() => handleTabClick('moves')}
			>
				Moves
			</button>
			{activeTab === 'details' && (
				<div>
					<h2 className="text-lg font-bold mb-2">Details</h2>
					<p>Details content goes here...</p>
				</div>
			)}

			{activeTab === 'moves' && (
				<div>
					<h2 className="text-lg font-bold mb-2">Moves</h2>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
					<p>Moves content goes here...</p>
				</div>
			)}

			{activeTab === 'stats' && (
				<div>
					<h2 className="text-lg font-bold mb-2">Stats</h2>
					<p>Stats content goes here...</p>
				</div>
			)}
		</>
	)
}

export default RightContent
