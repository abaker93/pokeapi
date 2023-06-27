export const filterByLang = (type, arr, lang) => {
	let filter
	filter = arr.filter(f => f.language.name === lang)

	if (type === 'name') return filter.map(m => m.name)[0]
	if (type === 'genus') return filter.map(m => m.genus)[0]
}

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

export const getNumByDex = (nums, dex) => {
	return nums.filter(f => f.pokedex.name === dex).map(m => m.entry_number)[0]
}

export const normalize = value => {
	const min = 1;
	const max = 255;

	return ((value - min) * 100) / (max - min);
};