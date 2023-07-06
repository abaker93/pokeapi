import { filterByLang, getNumByDex } from "./utilities";

// export const gamesArray = [
//   {
//     id: 'gen_i',
//     name: 'Gen I',
//     games: [
//       {
//         id: 'red',
//         name: 'Red',
//         pokedex: [ 'kanto', ],
//       },
//       {
//         id: 'blue',
//         name: 'Blue',
//         pokedex: [ 'kanto', ],
//       },
//       {
//         id: 'yellow',
//         name: 'Yellow',
//         pokedex: [ 'kanto', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_ii',
//     name: 'Gen II',
//     games: [
//       {
//         id: 'gold',
//         name: 'Gold',
//         pokedex: [ 'original-johto', ],
//       },
//       {
//         id: 'silver',
//         name: 'Silver',
//         pokedex: [ 'original-johto', ],
//       },
//       {
//         id: 'crystal',
//         name: 'Crystal',
//         pokedex: [ 'original-johto', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_iii',
//     name: 'Gen III',
//     games: [
//       {
//         id: 'ruby',
//         name: 'Ruby',
//         pokedex: [ 'hoenn', ],
//       },
//       {
//         id: 'sapphire',
//         name: 'Sapphire',
//         pokedex: [ 'hoenn', ],
//       },
//       {
//         id: 'emerald',
//         name: 'Emerald',
//         pokedex: [ 'hoenn', ],
//       },
//       {
//         id: 'firered',
//         name: 'FireRed',
//         pokedex: [ 'kanto', ],
//       },
//       {
//         id: 'leafgreen',
//         name: 'LeafGreen',
//         pokedex: [ 'kanto', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_iv',
//     name: 'Gen IV',
//     games: [
//       {
//         id: 'diamond',
//         name: 'Diamond',
//         pokedex: [ 'original-sinnoh', ],
//       },
//       {
//         id: 'pearl',
//         name: 'Pearl',
//         pokedex: [ 'original-sinnoh', ],
//       },
//       {
//         id: 'platinum',
//         name: 'Platinum',
//         pokedex: [ 'original-sinnoh', ],
//       },
//       {
//         id: 'heartgold',
//         name: 'HeartGold',
//         pokedex: [ 'updated-johto', ],
//       },
//       {
//         id: 'soulsilver',
//         name: 'SoulSilver',
//         pokedex: [ 'updated-johto', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_v',
//     name: 'Gen V',
//     games: [
//       {
//         id: 'black',
//         name: 'Black',
//         pokedex: [ 'original-unova', ],
//       },
//       {
//         id: 'white',
//         name: 'White',
//         pokedex: [ 'original-unova', ],
//       },
//       {
//         id: 'black_2',
//         name: 'Black 2',
//         pokedex: [ 'updated-unova', ],
//       },
//       {
//         id: 'white_2',
//         name: 'White 2',
//         pokedex: [ 'updated-unova', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_vi',
//     name: 'Gen VI',
//     games: [
//       {
//         id: 'x',
//         name: 'X',
//         pokedex: [ 'kalos-central', 'kalos-coastal', 'kalos-mountain', ],
//       },
//       {
//         id: 'y',
//         name: 'Y',
//         pokedex: [ 'kalos-central', 'kalos-coastal', 'kalos-mountain', ],
//       },
//       {
//         id: 'omega_ruby',
//         name: 'Omega Ruby',
//         pokedex: [ 'updated-hoenn', ],
//       },
//       {
//         id: 'alpha_sapphire',
//         name: 'Alpha Sapphire',
//         pokedex: [ 'updated-hoenn', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_vii',
//     name: 'Gen VII',
//     games: [
//       {
//         id: 'sun',
//         name: 'Sun',
//         pokedex:  [ 'original-alola', 'original-melemele', 'original-akala', 'original-ulaula', 'original-poni', ],
//       },
//       {
//         id: 'moon',
//         name: 'Moon',
//         pokedex: [ 'original-alola', 'original-melemele', 'original-akala', 'original-ulaula', 'original-poni', ],
//       },
//       {
//         id: 'ultra_sun',
//         name: 'Ultra Sun',
//         pokedex: [ 'updated-alola', 'updated-melemele', 'updated-akala', 'updated-ulaula', 'updated-poni', ],
//       },
//       {
//         id: 'ultra_moon',
//         name: 'Ultra Moon',
//         pokedex: [ 'updated-alola', 'updated-melemele', 'updated-akala', 'updated-ulaula', 'updated-poni', ],
//       },
//       {
//         id: 'lets_go_pikachu',
//         name: `Let's Go Pikachu`,
//         pokedex: [ 'letsgo-kanto' ],
//       },
//       {
//         id: 'lets_go_eevee',
//         name: `Let's Go Eevee`,
//         pokedex: [ 'letsgo-kanto' ],
//       },
//     ],
//   },
//   {
//     id: 'gen_viii',
//     name: 'Gen VIII',
//     games: [
//       {
//         id: 'sword',
//         name: 'Sword',
//         pokedex: [ 'galar', 'isle-of-armor', 'crown-tundra', ],
//       },
//       {
//         id: 'shield',
//         name: 'Shield',
//         pokedex: [ 'galar', 'isle-of-armor', 'crown-tundra', ],
//       },
//       {
//         id: 'brilliant_diamond',
//         name: 'Brilliant Diamond',
//         pokedex: [ 'updated-sinnoh', ],
//       },
//       {
//         id: 'shining_pearl',
//         name: 'Shining Pearl',
//         pokedex: [ 'updated-sinnoh', ],
//       },
//       {
//         id: 'legends_arceus',
//         name: 'Legends Arceus',
//         pokedex: [ 'hisui', ],
//       },
//     ],
//   },
//   {
//     id: 'gen_ix',
//     name: 'Gen IX',
//     games: [
//       {
//         id: 'scarlet',
//         name: 'Scarlet',
//         pokedex: [ 'paldea', ],
//       },
//       {
//         id: 'violet',
//         name: 'Violet',
//         pokedex: [ 'paldea', ],
//       },
//     ],
//   },
// ];

export const gameDataByPokemon = props => {
	const { lang, pokemon } = props.state

	// console.log(pokemon)

	const pokedexNumbers = pokemon.pokedex_numbers
	const filterFlavorText = game => {
		let text = pokemon.flavor_text_entries.filter(f => f.version.name === game)
		return filterByLang('flavor_text', text, lang)
	}

	const data = {
		gen_i: {
			id: 1,
			name: 'gen_i',
			label: 'Gen I',
			games: {
				red: {
					id: 1,
					name: 'red',
					label: 'Red',
					pokedex: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							num: getNumByDex(pokedexNumbers, 'kanto'),
						},
					},
					text: filterFlavorText('red'),
				},
				blue: {
					id: 2,
					name: 'blue',
					label: 'Blue',
					pokedex: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							num: getNumByDex(pokedexNumbers, 'kanto'),
						},
					},
					text: filterFlavorText('blue'),
				},
				yellow: {
					id: 3,
					name: 'yellow',
					label: 'Yellow',
					pokedex: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							num: getNumByDex(pokedexNumbers, 'kanto'),
						},
					},
					text: filterFlavorText('yellow'),
				},
			},
		},
		gen_ii: {
			id: 2,
			name: 'gen_ii',
			label: 'Gen II',
			games: {
				gold: {
					id: 4,
					name: 'gold',
					label: 'Gold',
					pokedex: {
						johto: {
							id: 1,
							name: 'original-johto',
							label: 'Johto',
							num: getNumByDex(pokedexNumbers, 'original-johto'),
						},
					},
					pokedex: [ 'original-johto', ],
				},
				silver: {
					id: 5,
					name: 'silver',
					label: 'Silver',
					pokedex: [ 'original-johto', ],
				},
				crystal: {
					id: 6,
					name: 'crystal',
					label: 'Crystal',
					pokedex: [ 'original-johto', ],
				},
			},
		},
		gen_iii: {
			id: 3,
			name: 'gen_iii',
			label: 'Gen III',
			games: {
				ruby: {
					id: 7,
					name: 'ruby',
					label: 'Ruby',
					pokedex: [ 'hoenn', ],
				},
				sapphire: {
					id: 8,
					name: 'sapphire',
					label: 'Sapphire',
					pokedex: [ 'hoenn', ],
				},
				emerald: {
					id: 9,
					name: 'emerald',
					label: 'Emerald',
					pokedex: [ 'hoenn', ],
				},
				firered: {
					id: 10,
					name: 'firered',
					label: 'FireRed',
					pokedex: [ 'kanto', ],
				},
				leafgreen: {
					id: 11,
					name: 'leafgreen',
					label: 'LeafGreen',
					pokedex: [ 'kanto', ],
				},
			},
		},
		gen_iv: {
			id: 4,
			name: 'gen_iv',
			label: 'Gen IV',
			games: {
				diamond: {
					id: 12,
					name: 'diamond',
					label: 'Diamond',
					pokedex: [ 'original-sinnoh', ],
				},
				pearl: {
					id: 13,
					name: 'pearl',
					label: 'Pearl',
					pokedex: [ 'original-sinnoh', ],
				},
				platinum: {
					id: 14,
					name: 'platinum',
					label: 'Platinum',
					pokedex: [ 'extended-sinnoh', ],
				},
				heart_gold: {
					id: 15,
					name: 'heart_gold',
					label: 'Heart Gold',
					pokedex: [ 'updated-johto', ],
				},
				soul_silver: {
					id: 16,
					name: 'soul_silver',
					label: 'Soul Silver',
					pokedex: [ 'updated-johto', ],
				},
			},
		},
		gen_v: {
			id: 5,
			name: 'gen_v',
			label: 'Gen V',
			games: {
				black: {
					id: 17,
					name: 'black',
					label: 'Black',
					pokedex: [ 'original-unova', ],
				},
				white: {
					id: 18,
					name: 'white',
					label: 'White',
					pokedex: [ 'original-unova', ],
				},
				black_2: {
					id: 19,
					name: 'black_2',
					label: 'Black 2',
					pokedex: [ 'updated-unova', ],
				},
				white_2: {
					id: 20,
					name: 'white_2',
					label: 'White 2',
					pokedex: [ 'updated-unova', ],
				},
			},
		},
		gen_vi: {
			id: 6,
			name: 'gen_vi',
			label: 'Gen VI',
			games: {
				x: {
					id: 21,
					name: 'x',
					label: 'X',
					pokedex: [ 'kalos-central', 'kalos-coastal', 'kalos-mountain', ],
				},
				y: {
					id: 22,
					name: 'y',
					label: 'Y',
					pokedex: [ 'kalos-central', 'kalos-coastal', 'kalos-mountain', ],
				},
				omega_ruby: {
					id: 23,
					name: 'omega_ruby',
					label: 'Omega Ruby',
					pokedex: [ 'updated-hoenn', ],
				},
				alpha_sapphire: {
					id: 24,
					name: 'alpha_sapphire',
					label: 'Alpha Sapphire',
					pokedex: [ 'updated-hoenn', ],
				},
			},
		},
		gen_vii: {
			id: 7,
			name: 'gen_vii',
			label: 'Gen VII',
			games: {
				sun: {
					id: 25,
					name: 'sun',
					label: 'Sun',
					pokedex: [ 'original-alola', ],
				},
				moon: {
					id: 26,
					name: 'moon',
					label: 'Moon',
					pokedex: [ 'original-alola', ],
				},
				ultra_sun: {
					id: 27,
					name: 'ultra_sun',
					label: 'Ultra Sun',
					pokedex: [ 'updated-alola', ],
				},
				ultra_moon: {
					id: 28,
					name: 'ultra_moon',
					label: 'Ultra Moon',
					pokedex: [ 'updated-alola', ],
				},
			},
		},
		gen_viii: {
			id: 8,
			name: 'gen_viii',
			label: 'Gen VIII',
			games: {
				sword: {
					id: 29,
					name: 'sword',
					label: 'Sword',
					pokedex: [ 'galar', ],
				},
				shield: {
					id: 30,
					name: 'shield',
					label: 'Shield',
					pokedex: [ 'galar', ],
				},
			},
		},
	}

	return data
}
