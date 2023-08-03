import Pokedex from 'pokedex-promise-v2'
import { useState } from 'react'
const P = new Pokedex()


const getEncounterMethods = () => {
	let i = 1
	let arr = []

	const getLimit = () => {
		P.getEncounterMethodsList({ limit: 9999 })
			.then(data => getArr(i, data.count))
			.catch(console.error)
	}

	const getArr = (i, limit) => {
		while (i <= limit) {
			P.getEncounterMethodByName(i)
				.then(data => {
					arr.push(data)
				})
				.catch(err => console.log(err))
			i++
		}
	}

	getLimit()

	return arr
}

export const encounterMethods = getEncounterMethods()


export const generationsArray = [
	{
		id: 1,
		name: 'gen_i',
		label: 'Generation I',
		short_label: 'Gen I',
		location_groups: [
			{
				id: 1,
				name: 'red_blue_yellow',
				label: 'Red/Blue/Yellow',
				games: [
					{
						id: 1,
						name: 'red',
						label: 'Red',
					},
					{
						id: 2,
						name: 'blue',
						label: 'Blue',
					},
					{
						id: 3,
						name: 'yellow',
						label: 'Yellow',
					},
				]
			}
		]
	},
	{
		id: 2,
		name: 'gen_ii',
		label: 'Generation II',
		short_label: 'Gen II',
		location_groups: [
			{
				id: 1,
				name: 'gold_silver_crystal',
				label: 'Gold/Silver/Crystal',
				games: [
					{
						id: 1,
						name: 'gold',
						label: 'Gold',
					},
					{
						id: 2,
						name: 'silver',
						label: 'Silver',
					},
					{
						id: 3,
						name: 'crystal',
						label: 'Crystal',
					},
				]
			}
		]
	},
	{
		id: 3,
		name: 'gen_iii',
		label: 'Generation III',
		short_label: 'Gen III',
		location_groups: [
			{
				id: 1,
				name: 'ruby_sapphire_emerald',
				label: 'Ruby/Sapphire/Emerald',
				games: [
					{
						id: 1,
						name: 'ruby',
						label: 'Ruby',
					},
					{
						id: 2,
						name: 'sapphire',
						label: 'Sapphire',
					},
					{
						id: 3,
						name: 'emerald',
						label: 'Emerald',
					},
				]
			},
			{
				id: 2,
				name: 'firered_leafgreen',
				label: 'FireRed/LeafGreen',
				games: [
					{
						id: 1,
						name: 'firered',
						label: 'FireRed',
					},
					{
						id: 2,
						name: 'leafgreen',
						label: 'LeafGreen',
					},
				]
			}
		]
	},
	{
		id: 4,
		name: 'gen_iv',
		label: 'Generation IV',
		short_label: 'Gen IV',
		location_groups: [
			{
				id: 1,
				name: 'diamond_pearl_platinum',
				label: 'Diamond/Pearl/Platinum',
				games: [
					{
						id: 1,
						name: 'diamond',
						label: 'Diamond',
					},
					{
						id: 2,
						name: 'pearl',
						label: 'Pearl',
					},
					{
						id: 3,
						name: 'platinum',
						label: 'Platinum',
					},
				]
			},
			{
				id: 2,
				name: 'heartgold_soulsilver',
				label: 'HeartGold/SoulSilver',
				games: [
					{
						id: 1,
						name: 'heartgold',
						label: 'HeartGold',
					},
					{
						id: 2,
						name: 'soulsilver',
						label: 'SoulSilver',
					},
				]
			}
		]
	},
	{
		id: 5,
		name: 'gen_v',
		label: 'Generation V',
		short_label: 'Gen V',
		location_groups: [
			{
				id: 1,
				name: 'black_white',
				label: 'Black/White',
				games: [
					{
						id: 1,
						name: 'black',
						label: 'Black',
					},
					{
						id: 2,
						name: 'white',
						label: 'White',
					},
				]
			},
			{
				id: 2,
				name: 'black_2_white_2',
				label: 'Black 2/White 2',
				games: [
					{
						id: 1,
						name: 'black_2',
						label: 'Black 2',
					},
					{
						id: 2,
						name: 'white_2',
						label: 'White 2',
					},
				]
			}
		]
	},
	{
		id: 6,
		name: 'gen_vi',
		label: 'Generation VI',
		short_label: 'Gen VI',
		location_groups: [
			{
				id: 1,
				name: 'x_y',
				label: 'X/Y',
				games: [
					{
						id: 1,
						name: 'x',
						label: 'X',
					},
					{
						id: 2,
						name: 'y',
						label: 'Y',
					},
				]
			},
			{
				id: 2,
				name: 'omega_ruby_alpha_sapphire',
				label: 'Omega Ruby/Alpha Sapphire',
				games: [
					{
						id: 1,
						name: 'omega_ruby',
						label: 'Omega Ruby',
					},
					{
						id: 2,
						name: 'alpha_sapphire',
						label: 'Alpha Sapphire',
					},
				]
			}
		]
	},
	{
		id: 7,
		name: 'gen_vii',
		label: 'Generation VII',
		short_label: 'Gen VII',
		location_groups: [
			{
				id: 1,
				name: 'sun_moon',
				label: 'Sun/Moon',
				games: [
					{
						id: 1,
						name: 'sun',
						label: 'Sun',
					},
					{
						id: 2,
						name: 'moon',
						label: 'Moon',
					},
				],
			},
			{
				id: 2,
				name: 'ultra_sun_ultra_moon',
				label: 'Ultra Sun/Ultra Moon',
				games: [
					{
						id: 1,
						name: 'ultra_sun',
						label: 'Ultra Sun',
					},
					{
						id: 2,
						name: 'ultra_moon',
						label: 'Ultra Moon',
					},
				],
			},
		],
	},
	{
		id: 8,
		name: 'gen_viii',
		label: 'Generation VIII',
		short_label: 'Gen VIII',
		location_groups: [
			{
				id: 1,
				name: 'sword_shield',
				label: 'Sword/Shield',
				games: [
					{
						id: 1,
						name: 'sword',
						label: 'Sword',
					},
					{
						id: 2,
						name: 'shield',
						label: 'Shield',
					},
				],
			},
			{
				id: 2,
				name: 'brilliant_diamond_shining_pearl',
				label: 'Brilliant Diamond/Shining Pearl',
				games: [
					{
						id: 1,
						name: 'brilliant_diamond',
						label: 'Brilliant Diamond',
					},
					{
						id: 2,
						name: 'shining_pearl',
						label: 'Shining Pearl',
					},
				],
			},
			{
				id: 3,
				name: 'legends_arceus',
				label: 'Legends: Arceus',
				games: [
					{
						id: 1,
						name: 'legends_arceus',
						label: 'Legends: Arceus',
					},
				],
			},
		],
	},
	{
		id: 9,
		name: 'gen_ix',
		label: 'Generation IX',
		short_label: 'Gen IX',
		location_groups: [
			{
				id: 1,
				name: 'scarlet_violet',
				label: 'Scarlet/Violet',
				games: [
					{
						id: 1,
						name: 'scarlet',
						label: 'Scarlet',
					},
					{
						id: 2,
						name: 'violet',
						label: 'Violet',
					},
				],
			},
		],
	},
]