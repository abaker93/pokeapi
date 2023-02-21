const baseURL = 'https://pokeapi.co/api/v2';

const formatDexId = num => {
	return num < 10
		?	'000' + num.toString()
		: num < 100
			? '00' + num.toString()
			: num < 1000
				? '0' + num.toString()
				: num.toString();
}

export { baseURL, formatDexId };