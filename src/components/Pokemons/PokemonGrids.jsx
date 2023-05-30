import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import PokemonCard from './PokemonCard'
import PokemonModal from './PokemonModal'

const PokemonGrids = ({
	pokemonList,
	handleNextPage,
	handlePreviousPage,
	currentPage,
}) => {
	const [selectedPokemon, setSelectedPokemon] = useState(null)

	const closeModal = () => {
		setSelectedPokemon(null)
	}

	return (
		<Fragment>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{pokemonList.map((pokemon, index) => (
					<motion.div
						key={pokemon.name}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.4,
								delay: index * 0.2,
								ease: 'easeOut',
							},
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						layoutId={pokemon.id}
						onClick={() => setSelectedPokemon(pokemon)}
					>
						<PokemonCard pokemon={pokemon} />
					</motion.div>
				))}
			</div>
			{selectedPokemon && (
				<PokemonModal selected={selectedPokemon} onClose={closeModal} />
			)}
			<div className="flex justify-center mt-4">
				<motion.button
					onClick={handlePreviousPage}
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
				>
					Next
				</motion.button>
			</div>
		</Fragment>
	)
}

export default PokemonGrids
