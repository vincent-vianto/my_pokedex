import { motion } from 'framer-motion'

const SearchInput = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center justify-center mb-4 px-1">
			<motion.input
				type="text"
				placeholder="Search Pokémon"
				className="w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-300 rounded-md"
				whileHover={{
					boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)',
				}}
				whileFocus={{
					boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)',
				}}
			/>
			<motion.button
				className="px-4 py-2 bg-blue-500 text-white rounded-md"
				whileHover={{
					backgroundColor: '#2563EB',
					scale: 1.1,
					boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)',
				}}
				whileFocus={{
					backgroundColor: '#2563EB',
					scale: 1.1,
					boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)',
				}}
				onClick={() => {
					alert('comming soon')
				}}
			>
				Search
			</motion.button>
		</div>
	)
}

export default SearchInput
