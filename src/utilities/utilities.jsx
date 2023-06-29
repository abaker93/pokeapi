import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from "./colors";
import { defense } from "./types";

export const calcDefense = (def1, def2, off) => {
	let calc, val

	if (def2) {
		calc = defense[def1][off] * defense[def2][off];
	} else {
		calc = defense[def1][off];
	}

	calc === 0.5 ? (val = "½") : calc === 0.25 ? (val = "¼") : (val = calc);

	return val
}

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

export const getColorFromType = (type) => {
	const colorMap = {
		bug:			bug,
		dark:			dark,
		dragon:		dragon,
		electric:	electric,
		fairy:		fairy,
		fighting:	fighting,
		fire:			fire,
		flying:		flying,
		ghost:		ghost,
		grass:		grass,
		ground:		ground,
		ice:			ice,
		normal:		normal,
		poison:		poison,
		psychic:	psychic,
		rock:			rock,
		steel:		steel,
		water:		water,
	}

	return colorMap[type]
}

export const getNumByDex = (nums, dex) => {
	return nums.filter(f => f.pokedex.name === dex).map(m => m.entry_number)[0]
}

export const getIdFromURL = url => {
	let id = url.match(/[\/][0-9]+/g);
	id = id[0].substring(1)
	return id
}

export const normalize = value => {
	const min = 1;
	const max = 255;

	return ((value - min) * 100) / (max - min);
};