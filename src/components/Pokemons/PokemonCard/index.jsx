import { motion } from 'framer-motion'
import getTypeBgColor from '../../../utils/getTypeBgColor'

const PokemonCard = ({ pokemon }) => {
	const capitalize = (name) => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	const formattedId = String(pokemon?.id).padStart(3, '0')
	const imagePokemon = `poke_images/${formattedId}.png`

	const bgPokemon = getTypeBgColor(pokemon?.types[0]?.type?.name)

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			className={`w-full rounded-xl overflow-hidden text-white p-0.5 ${bgPokemon}`}
		>
			<div className="flex justify-between px-2 py-1">
				<p className="font-bold text-[0.6rem] sm:text-base mb-1">
					{pokemon ? capitalize(pokemon.name) : 'Unidentified'}
				</p>
				<p className="font-bold text-[0.6rem] sm:text-base mb-1">
					#{formattedId || '???'}
				</p>
			</div>
			<div className="grid grid-cols-2 gap-2 pl-2 pb-1 pt-2">
				<div className="space-y-2">
					{pokemon?.types?.map(({ type: { name } }, index) => (
						<div
							key={index}
							className="bg-white bg-opacity-25 rounded-full px-2 py-0.5"
						>
							<p className="text-[0.4rem] sm:text-[0.7rem] lg:text-sm font-semibold whitespace-normal">
								{capitalize(name)}
							</p>
						</div>
					))}
				</div>

				<div className="w-3/4 flex justify-center items-center ml-auto min-h-100">
					<div className="relative">
						<img
							className="w-full h-auto transform scale-150 opacity-25"
							src="pokeball_white.png"
							alt="pokeball_white"
						/>
						{pokemon && (
							<img
								className="absolute top-0 right-0 md:right-2"
								src={imagePokemon}
								width={100}
								height={100}
								loading="lazy"
								alt={pokemon.name}
							/>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default PokemonCard
