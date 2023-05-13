import axios from 'axios'
import { useEffect, useState } from 'react'

import PokemonGrids from './components/Pokemons/PokemonGrids'
import Navbar from './components/Navbar'
import SearchInput from './components/SearchInput'

function App() {
	const [pokemonList, setPokemonList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getPokemons()
	}, [currentPage])

	const getPokemons = async () => {
		setLoading(true)
		const offset = (currentPage - 1) * 8
		try {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`
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
		<>
			<Navbar />
			<div className="container mx-auto p-4 ">
				<SearchInput />
				<PokemonGrids
					pokemonList={pokemonList}
					handleNextPage={handleNextPage}
					handlePreviousPage={handlePreviousPage}
					currentPage={currentPage}
					loading={loading}
				/>
			</div>
		</>
	)
}

export default App
