import { useState } from 'react'
import { motion } from 'framer-motion'
import PokemonCard from '../PokemonCard'
import PokemonModal from '../PokemonModal'

const PokemonGrids = ({
	pokemonList,
	handleNextPage,
	handlePreviousPage,
	currentPage,
	loading,
}) => {
	const [selectedId, setSelectedId] = useState(null)

	const closeModal = () => {
		setSelectedId(null)
	}

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{pokemonList.map((pokemon, index) => (
					<motion.div
						key={pokemon.name}
						initial={{ x: -100, opacity: 0, scale: 0.5 }}
						animate={{
							x: 0,
							opacity: 1,
							scale: 1,
							transition: {
								duration: 0.7,
								delay: index * 0.1,
								ease: 'easeOut',
							},
						}}
						exit={{ x: -100, opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.5 }}
						layoutId={pokemon.id}
						onClick={() => setSelectedId(pokemon.id)}
					>
						<PokemonCard pokemon={pokemon} />
					</motion.div>
				))}
			</div>
			{selectedId && (
				<PokemonModal selected={selectedId} onClose={closeModal} />
			)}
			<div className="flex justify-center mt-4">
				<motion.button
					onClick={handlePreviousPage}
					disabled={loading}
					className={`
						${currentPage === 1 ? `hidden` : 'block'} 
						px-4 py-2 mx-1 bg-gray-300 text-gray-600 rounded-md 
					`}
					whileHover={{
						scale: 1.1,
						backgroundColor: '#D1D5DB',
					}}
					whileTap={{
						scale: 0.9,
					}}
				>
					Previous
				</motion.button>
				<motion.button
					onClick={handleNextPage}
					className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md "
					whileHover={{
						scale: 1.1,
						backgroundColor: '#2563EB',
					}}
					whileTap={{
						scale: 0.9,
					}}
					disabled={loading}
				>
					Next
				</motion.button>
			</div>
		</>
	)
}

export default PokemonGrids
