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

export const calcMeasurement = (num, type) => {
	switch (type) {
		case 'in': {
			let meas = round2Decimal(num * 3.93701)
			let feet = Math.floor(meas / 12)
			let inches = Math.round(meas % 12)

			inches < 10
				? inches = '0' + inches.toString()
				: inches.toString()

			return `${feet}' ${inches}"`
		} case 'cm': {
			return `${round2Decimal(num * 10)} cm`
		} case 'lb': {
			return `${round2Decimal(num * 0.220462)} lbs`
		} case 'kg': {
			return `${round2Decimal(num / 10)} kg`
		} default: {
			console.log('ERROR:', type, 'is not a valid measurement type.')
		}
	}
}

export const filterByLang = (type, arr, lang) => {
	let filter
	filter = arr.filter(f => f.language.name === lang)

	return filter.map(m => m[type])[0]
	
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
	const num = nums.filter(f => f.pokedex.name === dex).map(m => m.entry_number)[0]

	return num ? num : null
}

export const getIdFromURL = url => {
	let id = url.match(/[\/][0-9]+/g);
	id = id[0].substring(1)
	return id
}

export const normalize = value => ((value - 1) * 100) / (255 - 1)

export const round2Decimal = num => Math.round(num * 100) / 100