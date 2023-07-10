import { filterByLang, getNumByDex } from './utilities'

export const gameDataByPokemon = props => {
	const { encounters, lang, pokemon } = props.state
	const pokedexNumbers = pokemon.pokedex_numbers

	const filterFlavorText = game => {
		let text = pokemon.flavor_text_entries.filter(f => f.version.name === game)
		return filterByLang('flavor_text', text, lang)
	}

	const filterEncounters = game => {
		let enc = encounters.filter(f => f.version_details.some(s => s.version.name === game))
		return enc
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
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				blue: {
					id: 2,
					name: 'blue',
					label: 'Blue',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				yellow: {
					id: 3,
					name: 'yellow',
					label: 'Yellow',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_ii: {
			id: 2,
			name: 'gen_ii',
			label: 'Gen II',
			games: {
				gold: {
					id: 1,
					name: 'gold',
					label: 'Gold',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						johto: {
							id: 1,
							name: 'original-johto',
							label: 'Johto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				silver: {
					id: 2,
					name: 'silver',
					label: 'Silver',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						johto: {
							id: 1,
							name: 'original-johto',
							label: 'Johto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				crystal: {
					id: 3,
					name: 'crystal',
					label: 'Crystal',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						johto: {
							id: 1,
							name: 'original-johto',
							label: 'Johto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_iii: {
			id: 3,
			name: 'gen_iii',
			label: 'Gen III',
			games: {
				ruby: {
					id: 1,
					name: 'ruby',
					label: 'Ruby',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hoenn: {
							id: 1,
							name: 'hoenn',
							label: 'Hoenn',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				sapphire: {
					id: 2,
					name: 'sapphire',
					label: 'Sapphire',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hoenn: {
							id: 1,
							name: 'hoenn',
							label: 'Hoenn',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				emerald: {
					id: 3,
					name: 'emerald',
					label: 'Emerald',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hoenn: {
							id: 1,
							name: 'hoenn',
							label: 'Hoenn',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				firered: {
					id: 4,
					name: 'firered',
					label: 'FireRed',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				leafgreen: {
					id: 5,
					name: 'leafgreen',
					label: 'LeafGreen',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_iv: {
			id: 4,
			name: 'gen_iv',
			label: 'Gen IV',
			games: {
				diamond: {
					id: 1,
					name: 'diamond',
					label: 'Diamond',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						sinnoh: {
							id: 1,
							name: 'original-sinnoh',
							label: 'Sinnoh',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				pearl: {
					id: 2,
					name: 'pearl',
					label: 'Pearl',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						sinnoh: {
							id: 1,
							name: 'original-sinnoh',
							label: 'Sinnoh',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				platinum: {
					id: 3,
					name: 'platinum',
					label: 'Platinum',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						sinnoh: {
							id: 1,
							name: 'extended-sinnoh',
							label: 'Sinnoh',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				heartgold: {
					id: 4,
					name: 'heartgold',
					label: 'HeartGold',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						johto: {
							id: 1,
							name: 'updated-johto',
							label: 'Johto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				soulsilver: {
					id: 5,
					name: 'soulsilver',
					label: 'SoulSilver',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						johto: {
							id: 1,
							name: 'updated-johto',
							label: 'Johto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_v: {
			id: 5,
			name: 'gen_v',
			label: 'Gen V',
			games: {
				black: {
					id: 1,
					name: 'black',
					label: 'Black',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						unova: {
							id: 1,
							name: 'original-unova',
							label: 'Unova',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				white: {
					id: 2,
					name: 'white',
					label: 'White',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						unova: {
							id: 1,
							name: 'original-unova',
							label: 'Unova',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				black_2: {
					id: 3,
					name: 'black-2',
					label: 'Black 2',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						pokedexes: {
							unova: {
								id: 1,
								name: 'updated-unova',
								label: 'Unova',
								get num() {
									return getNumByDex(pokedexNumbers, this.name)
								},
							},
						},
					},
				},
				white_2: {
					id: 4,
					name: 'white-2',
					label: 'White 2',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						unova: {
							id: 1,
							name: 'updated-unova',
							label: 'Unova',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_vi: {
			id: 6,
			name: 'gen_vi',
			label: 'Gen VI',
			games: {
				x: {
					id: 1,
					name: 'x',
					label: 'X',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kalos_central: {
							id: 1,
							name: 'kalos-central',
							label: 'Central Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						kalos_coastal: {
							id: 2,
							name: 'kalos-coastal',
							label: 'Coastal Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						kalos_mountain: {
							id: 3,
							name: 'kalos-mountain',
							label: 'Mountain Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				y: {
					id: 2,
					name: 'y',
					label: 'Y',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kalos_central: {
							id: 1,
							name: 'kalos-central',
							label: 'Central Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						kalos_coastal: {
							id: 2,
							name: 'kalos-coastal',
							label: 'Coastal Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						kalos_mountain: {
							id: 3,
							name: 'kalos-mountain',
							label: 'Mountain Kalos',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				omega_ruby: {
					id: 3,
					name: 'omega-ruby',
					label: 'Omega Ruby',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hoenn: {
							id: 1,
							name: 'updated-hoenn',
							label: 'Hoenn',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				alpha_sapphire: {
					id: 4,
					name: 'alpha-sapphire',
					label: 'Alpha Sapphire',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hoenn: {
							id: 1,
							name: 'updated-hoenn',
							label: 'Hoenn',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_vii: {
			id: 7,
			name: 'gen_vii',
			label: 'Gen VII',
			games: {
				sun: {
					id: 1,
					name: 'sun',
					label: 'Sun',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						alola: {
							id: 1,
							name: 'original-alola',
							label: 'Alola',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						melemele: {
							id: 2,
							name: 'original-melemele',
							label: 'Melemele',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						akala: {
							id: 3,
							name: 'original-akala',
							label: 'Akala',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						ulaula: {
							id: 4,
							name: 'original-ulaula',
							label: 'Ulaula',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						poni: {
							id: 5,
							name: 'original-poni',
							label: 'Poni',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				moon: {
					id: 2,
					name: 'moon',
					label: 'Moon',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						alola: {
							id: 1,
							name: 'original-alola',
							label: 'Alola',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						melemele: {
							id: 2,
							name: 'original-melemele',
							label: 'Melemele',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						akala: {
							id: 3,
							name: 'original-akala',
							label: 'Akala',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						ulaula: {
							id: 4,
							name: 'original-ulaula',
							label: 'Ulaula',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						poni: {
							id: 5,
							name: 'original-poni',
							label: 'Poni',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				ultra_sun: {
					id: 3,
					name: 'ultra-sun',
					label: 'Ultra Sun',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						alola: {
							id: 1,
							name: 'updated-alola',
							label: 'Alola',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						melemele: {
							id: 2,
							name: 'updated-melemele',
							label: 'Melemele',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						akala: {
							id: 3,
							name: 'updated-akala',
							label: 'Akala',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						ulaula: {
							id: 4,
							name: 'updated-ulaula',
							label: 'Ulaula',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						poni: {
							id: 5,
							name: 'updated-poni',
							label: 'Poni',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				ultra_moon: {
					id: 4,
					name: 'ultra-moon',
					label: 'Ultra Moon',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						alola: {
							id: 1,
							name: 'updated-alola',
							label: 'Alola',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						melemele: {
							id: 2,
							name: 'updated-melemele',
							label: 'Melemele',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						akala: {
							id: 3,
							name: 'updated-akala',
							label: 'Akala',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						ulaula: {
							id: 4,
							name: 'updated-ulaula',
							label: 'Ulaula',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						poni: {
							id: 5,
							name: 'updated-poni',
							label: 'Poni',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				lets_go_pikachu: {
					id: 5,
					name: 'lets-go-pikachu',
					label: `Let's Go Pikachu`,
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'letsgo-kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				lets_go_eevee: {
					id: 6,
					name: 'lets-go-eevee',
					label: `Let's Go Eevee`,
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						kanto: {
							id: 1,
							name: 'letsgo-kanto',
							label: 'Kanto',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_viii: {
			id: 8,
			name: 'gen_viii',
			label: 'Gen VIII',
			games: {
				sword: {
					id: 1,
					name: 'sword',
					label: 'Sword',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						galar: {
							id: 1,
							name: 'galar',
							label: 'Galar',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						isle_of_armor: {
							id: 2,
							name: 'isle-of-armor',
							label: 'Isle of Armor',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						crown_tundra: {
							id: 3,
							name: 'crown-tundra',
							label: 'Crown Tundra',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				shield: {
					id: 2,
					name: 'shield',
					label: 'Shield',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						galar: {
							id: 1,
							name: 'galar',
							label: 'Galar',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						isle_of_armor: {
							id: 2,
							name: 'isle-of-armor',
							label: 'Isle of Armor',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
						crown_tundra: {
							id: 3,
							name: 'crown-tundra',
							label: 'Crown Tundra',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				brilliant_diamond: {
					id: 3,
					name: 'brilliant-diamond',
					label: 'Brilliant Diamond',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						sinnoh: {
							id: 1,
							name: 'updated-sinnoh',
							label: 'Sinnoh',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				shining_pearl: {
					id: 4,
					name: 'shining-pearl',
					label: 'Shining Pearl',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						sinnoh: {
							id: 1,
							name: 'updated-sinnoh',
							label: 'Sinnoh',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				legends_arceus: {
					id: 5,
					name: 'legends-arceus',
					label: 'Legends: Arceus',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						hisui: {
							id: 1,
							name: 'hisui',
							label: 'Hisui',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
		gen_ix: {
			id: 9,
			name: 'gen_ix',
			label: 'Gen IX',
			games: {
				scarlet: {
					id: 1,
					name: 'scarlet',
					label: 'Scarlet',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						paldea: {
							id: 1,
							name: 'paldea',
							label: 'Paldea',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
				violet: {
					id: 2,
					name: 'violet',
					label: 'Violet',
					get text() { return filterFlavorText(this.name) },
					get encounters() { return filterEncounters(this.name) },
					pokedexes: {
						paldea: {
							id: 1,
							name: 'paldea',
							label: 'Paldea',
							get num() { return getNumByDex(pokedexNumbers, this.name) },
						},
					},
				},
			},
		},
	}

	return data
}
