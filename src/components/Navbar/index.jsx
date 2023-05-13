import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navLinkVariants = {
		hover: {
			backgroundColor: '#4B5563',
			color: '#FFFFFF',
		},
	}

	const menuVariants = {
		hidden: { height: 0, opacity: 0 },
		visible: { height: 'auto', opacity: 1 },
	}

	const toggleMenu = () => {
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
	}

	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<a href="/" className="text-white text-xl font-bold font-pokemon">
							MyPokédex
						</a>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<motion.a
								href="/"
								className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Pokémon
							</motion.a>
							<motion.button
								onClick={() => {
									alert('comming soon')
								}}
								className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Berries
							</motion.button>
							<motion.button
								onClick={() => {
									alert('comming soon')
								}}
								className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Items
							</motion.button>
						</div>
					</div>
					<div className="md:hidden flex items-center">
						<button
							type="button"
							className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
							onClick={toggleMenu}
						>
							{isMenuOpen ? (
								<FiX className="w-6 h-6" />
							) : (
								<FiMenu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className="md:hidden"
							variants={menuVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.4, ease: 'easeInOut' }}
						>
							<motion.a
								href="/"
								className="block text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Pokemon
							</motion.a>
							<motion.a
								href="/"
								className="block text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Berries
							</motion.a>
							<motion.a
								href="/"
								className="block text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
								variants={navLinkVariants}
								whileHover="hover"
							>
								Items
							</motion.a>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	)
}

export default Navbar
