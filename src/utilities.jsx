export const formatDexId = (num, dig) => {
	if (dig < 10) {

		return num.toString()

	} else if (dig < 100) {

		if (num < 10) {
			return '0' + num.toString()
		} else {
			return num.toString()
		}

	} else if (dig < 1000) {

		if (num < 10) {
			return '00' + num.toString()
		} else if (num < 100) {
			return '0' + num.toString()
		} else {
			return num.toString()
		}

	} else {

		if (num < 10) {
			return '000' + num.toString()
		} else if (num < 100) {
			return '00' + num.toString()
		} else if (num < 1000) {
			return '0' + num.toString()
		} else {
			return num.toString()
		}

	}
}

export const getNameByLang = (names, lang) => {
	return names.filter(f => f.language.name === lang).map(m => m.name)[0]
}

export const getNumByDex = (nums, dex) => {
	return nums.filter(f => f.pokedex.name === dex).map(m => m.entry_number)[0]
}