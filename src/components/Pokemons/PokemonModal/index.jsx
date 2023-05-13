import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PokemonModal = ({ selected = null, onClose }) => {
	if (!selected) {
		return null
	}

	const overlayVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 0.7 },
		exit: { opacity: 0 },
	}

	const modalVariants = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -50 },
	}

	return (
		<motion.div
			layoutId={selected}
			className="fixed inset-0 flex items-center justify-center z-50"
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<motion.div
				className="fixed inset-0 bg-black"
				variants={overlayVariants}
			></motion.div>
			{/* Overlay */}
			<motion.div
				className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4"
				variants={modalVariants}
			>
				<motion.div
					className="bg-white w-full h-full mx-auto flex flex-col lg:flex-row relative"
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<div className="w-full md:w-1/3 bg-grass flex flex-col relative p-4 text-white">
						<LeftContent />
					</div>

					<div className="w-full md:w-2/3 lg:pl-4 mt-4 lg:mt-0 overflow-y-auto">
						<RightContent />
					</div>
					<button
						className="absolute top-2 right-2 text-white text-lg font-bold bg-gray-700 rounded-full p-2 hover:bg-gray-900"
						onClick={onClose}
					>
						<FaTimes className="w-4 h-4" />
					</button>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default PokemonModal
