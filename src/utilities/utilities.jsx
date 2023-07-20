import { Physical, Special, Status } from '../assets/MoveIcon'
import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from './colors'
import { game_red, game_black, game_blue, game_crystal, game_diamond, game_eevee, game_emerald, game_gold, game_green, game_moon, game_pearl, game_silver, game_sun, game_yellow } from './colors'
import { defense } from "./types"

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

			if (inches === 12) {
				feet++
				inches = 0
			}

			if (inches < 10) {
				inches = '0' + inches.toString()
			} else {
				inches.toString()
			}

			return `${feet}' ${inches}"`
		} case 'm': {
			return `${round2Decimal(num / 10)} m`
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

export const getColorFromType = type => {
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

export const getColorFromGame = game => {
	const colorMap = {
		red:									game_red,
		blue:									game_blue,
		yellow:								game_yellow,
		gold:									game_gold,
		silver:								game_silver,
		crystal:							game_crystal,
		ruby:									game_red,
		sapphire:							game_blue,
		emerald:							game_emerald,
		firered:							game_red,
		leafgreen:						game_green,
		diamond:							game_diamond,
		pearl:								game_pearl,
		platinum:							game_silver,
		heartgold:						game_gold,
		soulsilver:						game_silver,
		black:								game_black,
		white:								game_silver,
		'black-2':						game_black,
		'white-2':						game_silver,
		x:										game_blue,
		y:										game_red,
		'omega-ruby':					game_red,
		'alpha-sapphire':			game_blue,
		sun:									game_sun,
		moon:									game_moon,
		'ultra-sun':					game_sun,
		'ultra-moon':					game_moon,
		'lets-go-pikachu':		game_yellow,
		'lets-go-eevee':			game_eevee,
		sword:								game_blue,
		shield:								game_red,
		'brilliant-diamond':	game_diamond,
		'shining-pearl':			game_pearl,
		'legends-arceus':			game_green,
		scarlet:							game_red,
		violet:								game_moon,
	}

	return colorMap[game]
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