const LeftContent = () => {
	return (
		<>
			<div className="flex justify-center px-2 py-1 gap-2">
				<p className="font-bold text-lg">#001</p>
				<p className="font-bold text-lg">Bulbasaur</p>
			</div>
			<div className="flex justify-center items-center relative flex-1">
				<h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
					Bursaks
				</h2>
				<img
					className="opacity-25"
                    width={300}
					height={300}
					src="pokeball_white.png"
					alt="pokeball_white"
				/>
				<img
					className="absolute"
					src="poke_images/001.png"
					width={150}
					height={150}
					loading="lazy"
					alt="tets"
				/>
			</div>
		</>
	)
}

export default LeftContent