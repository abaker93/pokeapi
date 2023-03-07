import { defense } from "./data";

export const baseURL = 'https://pokeapi.co/api/v2';

export const capitalize = text => {
	return text.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
}

export const formatDexId = num => {
	return num < 10
		?	'000' + num.toString()
		: num < 100
			? '00' + num.toString()
			: num < 1000
				? '0' + num.toString()
				: num.toString();
}

export const normalize = (value) => {
	const min = 1;
	const max = 255;

	return ((value - min) * 100) / (max - min)
};

export const calcDefense = (def1, def2, off) => {
	console.log(def1, def2, off)
	console.log(defense[def1][off], defense[def2][off])
	const calc = defense[def1][off] * defense[def2][off];

	return (calc)
}