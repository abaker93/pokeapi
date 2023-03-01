const baseURL = 'https://pokeapi.co/api/v2';

const capitalize = text => {
	return text.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
}

const formatDexId = num => {
	// console.log(num)
	return num < 10
		?	'000' + num.toString()
		: num < 100
			? '00' + num.toString()
			: num < 1000
				? '0' + num.toString()
				: num.toString();
}

export { baseURL, capitalize, formatDexId };