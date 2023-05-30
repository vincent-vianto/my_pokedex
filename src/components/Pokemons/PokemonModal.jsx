import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

import getTypeBgColor from '../../utils/getTypeBgColor'
import getFormattedId from '../../utils/getFormattedId'
import capitalizeName from '../../utils/capitalizeName'

const PokemonStats = ({ stats }) => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-2">Stats:</h2>
			{stats.map((stat) => (
				<div key={stat.stat.name} className="flex items-center mb-2">
					<div className="w-24 ">
						<span className="font-bold">{stat.stat.name}:</span>
					</div>
					<div className="w-full bg-gray-300 rounded-full">
						<div
							className="h-3 bg-green-400 rounded-full"
							style={{
								width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%`,
							}}
						></div>
					</div>
					<div className="w-10 text-left pl-2">
						<span>{stat.base_stat}</span>
					</div>
				</div>
			))}
		</div>
	)
}

const PokemonModal = ({ selected, onClose }) => {
	const formattedId = getFormattedId(selected?.id)
	const imagePokemon = `poke_images/${formattedId}.png`
	const bgPokemon = getTypeBgColor(selected?.types[0]?.type?.name)

	// Function to handle the body scroll
	const handleBodyScroll = (isOpen) => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto'
	}

	// Call the function on mount and unmount
	useEffect(() => {
		handleBodyScroll(true)
		return () => {
			handleBodyScroll(false)
		}
	}, [])

	return (
		<motion.div
			layoutId={selected.id}
			className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="fixed inset-0 bg-black opacity-75"></div>
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<div className="bg-white w-full h-full mx-auto flex flex-col lg:flex-row relative rounded-lg shadow-lg">
					<div
						className={`w-full md:w-1/3 flex flex-col relative p-4 text-white rounded-b-[80px] md:rounded-b-[0px] ${bgPokemon}  `}
					>
						<div className="flex flex-col justify-center items-center gap-4">
							<p className="font-bold text-2xl">#{formattedId || '???'}</p>
							<p className="font-bold text-2xl">
								{selected ? capitalizeName(selected.name) : 'Unidentified'}
							</p>
							<div className="flex gap-2">
								{selected?.types?.map(({ type: { name } }, index) => (
									<div
										key={index}
										className="bg-white bg-opacity-25 rounded-full px-2 py-0.5"
									>
										<p className="text-[0.7rem] lg:text-sm font-semibold whitespace-normal">
											{capitalizeName(name)}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="flex justify-center items-center relative flex-1">
							<img
								className="opacity-25 w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
								src="pokeball_white.png"
								alt="pokeball_white"
							/>
							<img
								className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
								src={imagePokemon}
								loading="lazy"
								alt="tets"
							/>
						</div>
					</div>

					<div className="w-full md:w-2/3 lg:pl-4 mt-4 lg:mt-0 overflow-y-auto p-4">
						<PokemonStats stats={selected?.stats} />
					</div>
					<button
						className="absolute top-2 right-2 text-white text-xl bg-gray-700 rounded-full p-1 hover:bg-gray-900"
						onClick={onClose}
					>
						<FaTimes className="w-4 h-4" />
					</button>
				</div>
			</div>
		</motion.div>
	)
}

export default PokemonModal
