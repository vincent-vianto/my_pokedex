const getFormattedId = (id) => {
	const formattedId = String(id).padStart(3, '0')
    return formattedId
}

export default getFormattedId