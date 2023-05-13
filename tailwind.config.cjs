/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			scale: {
				175: '1.75',
			},
			backgroundColor: {
				grass: '#6DD1B1',
				fire: '#E96769',
				electric: '#FBCF49',
				water: '#77BEFC',
				normal: '#C5BEA9',
				ice: '#A1D9FB',
				fighting: '#FF6A6A',
				poison: '#D46B9C',
				ground: '#CAD572',
				flying: '#C9A8F7',
				psychic: '#F18ABD',
				bug: '#CAD572',
				rock: '#D6C378',
				ghost: '#A995C7',
				dragon: '#99A7FF',
				dark: '#A38D7A',
				steel: '#C5C5DB',
				fairy: '#F6A6C6',
			},
		},
	},
	plugins: [],
}
