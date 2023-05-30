import axios from 'axios'
import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import PokemonGrids from '../components/Pokemons/PokemonGrids'

function PokemonPage() {
	const [pokemonList, setPokemonList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getPokemons()
	}, [currentPage])

	const getPokemons = async () => {
		setLoading(true)
		const offset = (currentPage - 1) * 20
		try {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon?offset=${offset}`
			)
			const promises = response.data.results.map(async (pokemon) => {
				const result = await axios.get(pokemon.url)
				return result.data
			})

			const results = await Promise.all(promises)

			setPokemonList(results)
		} catch (error) {
			console.log(error)
		}

		setLoading(false)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1)
		}
	}

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1)
	}

	return (
		<div className="container mx-auto p-4 ">
			{/* <div className="flex flex-col md:flex-row md:items-center justify-center mb-4 px-1">
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
			</div> */}
			<PokemonGrids
				pokemonList={pokemonList}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default PokemonPage
