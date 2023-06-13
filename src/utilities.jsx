export const formatDexId = (num, dig) => {
	switch (dig) {
		case 3 :
			if (num < 10) {
				return '00' + num.toString()
			} else if (num < 100) {
				return '0' + num.toString()
			} else {
				return num.toString()
			}
			break
		case 4 :
			if (num < 10) {
				return '000' + num.toString()
			} else if (num < 100) {
				return '00' + num.toString()
			} else if (num < 1000) {
				return '0' + num.toString()
			} else {
				return num.toString()
			}
			break
		default:
			return num.toString()
	}
}

export const getNameByLang = (names, lang) => {
	return names.filter(f => f.language.name === lang).map(m => m.name)[0]
}