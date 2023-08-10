import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Chip, Container, Link, Table as MuiTable, TableBody as MuiTableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame, getColorFromPercentage, siteTitle } from '../utilities/utilities'
import { gray, text, white } from '../utilities/colors'
import { encounterMethods, generationsArray } from '../utilities/arrays';

const P = new Pokedex()

// TODO: Combine Kanto Victory Road 1 & 2... why are these separate?


const LocationContainer = () => {
	const location = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [locationData, setLocationData] = useState()
	const [areasData, setAreasData] = useState([])

	const getLocationData = location => {
		P.getLocationByName(location)
			.then(loc => {
				P.getRegionByName(loc.region.name)
					.then(region => {
						setLocationData({
							areas:				loc.areas,
							game_indices:	loc.game_indices,
							id:						loc.id,
							name:					loc.name,
							names:				loc.names,
							region:				region,
						})
					})
					.catch(err => console.log(err))

				loc.areas.map(m => {
					P.getLocationAreaByName(m.name)
						.then(area => setAreasData(prev => [...prev, area]))
						.catch(err => console.log(err))
				})
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		if (!locationData) {
			setLoading(true)
			getLocationData(location)
		}
	}, [location, locationData, areasData])

	useEffect(() => {
		if (locationData && areasData.length === locationData.areas.length) {
			setLoading(false)
		}
	}, [loading, locationData, areasData])


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}


	return (
		<>
			<Header name={filterByLang('name', locationData.names, lang)} region={filterByLang('name', locationData.region.names, lang)} />

			<Container>
				{generationsArray.map(gen => (
					<Generation key={gen.id} areasData={areasData} gen={gen} lang={lang} />
				))}
				{/* <Generation areasData={areasData} gen={generationsArray[0]} lang={lang} /> */}

				<Translations data={locationData} lang={lang} />
			</Container>
			
		</>
	)
}

const Header = props => {
	const { name, region } = props

	return (
		<Box component="header" mb={5}>
			<Box p={1} mb={5} sx={{
				background: alpha(gray[100], 0.4),
				borderBottom: "2px solid",
				borderColor: "primary.main",
			}}>
				<Container>
					<Breadcrumbs color={text[300]} aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">{siteTitle}</Link>
						<Link underline="hover" color="inherit" href="/location/">Locations</Link>
						<Typography fontWeight="medium" color="primary.main">{name}</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link variant="h3" href="/location/" underline="hover" color={text[200]}>Locations</Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">
					{name}
					<Typography color={text[200]} variant="h3" component="span" sx={{ ml: 1 }}>({region})</Typography>
				</Typography>
			</Container>
		</Box>
	)
}

const Generation = props => {
	const { areasData, gen, lang } = props
	const [areas, setAreas] = useState([])

	const filterAreas = () => {
		let arr = []

		areasData.map(area => {
			// safari zone middle
			let pokemon = []
			area.pokemon_encounters.map(poke => {
				// nidoran male
				let versions = []
				gen.location_groups.map(group => {
					// red/blue/yellow
					group.games.map(game => {
						// red
						poke.version_details.map(version => {
							// red
							version.version.name === game.name && versions.push(version)
						})
					})
				})
				versions.length && pokemon.push({ ...poke, version_details: versions })
			})
			pokemon.length && arr.push({ ...area, pokemon_encounters: pokemon })
		})

		arr = arr.filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)
		setAreas(arr)
	}

	useEffect(() => {
		filterAreas()
	}, [])

	// console.log(areas)

	if (areas.length) {
		return (
			<>
				<Typography variant="h2" sx={{ mb: 3 }}>{gen.label}</Typography>
				{areas
					.sort((a, b) => a.name.localeCompare(b.name))
					.map(area => (
						<Area key={area.id} area={area} gen={gen} lang={lang} />
					))
				}
			</>
		)
	}
}

const Area = props => {
	const { area, gen, lang } = props
	const [methods, setMethods] = useState(false)

	const filterMethods = () => {
		let arr = []

		encounterMethods.map(method => {
			// walk
			let pokemon = []
			area.pokemon_encounters.map(poke => {
				// nidoran male
				let versions = []
				poke.version_details.map(version => {
					// red
					let encounters = []
					version.encounter_details.map(encounter => {
						// max level 5
						encounter.method.name === method.name && encounters.push(encounter)
					})
					encounters.length && versions.push({ ...version, encounter_details: encounters })
				})
				versions.length && pokemon.push({ ...poke, version_details: versions })
			})
			pokemon.length && arr.push({ ...method, pokemon_encounters: pokemon })
		})

		arr = arr.filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)
		setMethods(arr)
	}

	useEffect(() => {
		filterMethods()
	}, [])

	// console.log(methods)

	if (methods.length) {
		return (
			<>
				<Typography variant="h3" sx={{ mb: 2 }}>{filterByLang('name', area.names, lang)}</Typography>
				{methods
					.sort((a,b) => a.id - b.id)
					.map(method => (
						<Table key={method.id} lang={lang} method={method}>
							<TableBody gen={gen} lang={lang} pokemon={method.pokemon_encounters}>
								<Row gen={gen} lang={lang} method={method} />
							</TableBody>
						</Table>
					))
				}
			</>
		)
	}
}

const Table = props => {
	const { children, lang, method } = props

	// console.log(method)

	return (
		<Box mb={3}>
			<Typography component="h4" variant="h6" sx={{ mb: 1 }}>{filterByLang('name', method.names, lang)}</Typography>
			<MuiTable aria-label={`pokemon at..................`}>
				<TableHead>
					<TableRow sx={{
						'& td, & th': {
							padding: 1,
							backgroundColor: alpha(gray[100], 0.4),
							borderBottom: `1px solid ${gray[300]}`
						}
					}}>
						<TableCell>Pokémon</TableCell>
						<TableCell>Games</TableCell>
						<TableCell>Rarity</TableCell>
						<TableCell>Levels</TableCell>
						{/* <TableCell>Details</TableCell> */}
					</TableRow>
				</TableHead>
				{children}
			</MuiTable>
		</Box>
	)
}

const TableBody = props => {
	const { children, gen, lang, pokemon } = props
	const [pokemonData, setPokemonData] = useState([])

	const renderChildren = poke => {
		let group = []

		gen.location_groups.map(g => {
			poke.version_details.map(v => {
				g.games.map(game => {
					v.version.name === game.name && group.push(g)
				})
			})
		})

		group = group[0]
		return React.Children.map(children, child => {
			return React.cloneElement(child, {
				group:		group,
				pokemon:	poke,
			})
		})
	}

	const getPokemon = () => {
		pokemon.map(p => {
			P.getPokemonByName(p.pokemon.name)
				.then(poke => {
					P.getPokemonSpeciesByName(poke.species.name)
						.then(species => {
							P.getPokemonFormByName(poke.forms[0].name)
								.then(form => {
									setPokemonData(prev => [...prev, {
										id:								poke.id,
										formName:					form.names.length > 0 ? filterByLang('name', form.names, lang) : filterByLang('name', form.form_names, lang),
										name:							filterByLang('name', species.names, lang),
										num:							formatDexId(species.pokedex_numbers.filter(f => f.pokedex.name === 'national')[0].entry_number),
										sprite:						form.sprites.front_default ? form.sprites.front_default : poke.sprites.front_default,
										version_details:	p.version_details,
									}])
								}).catch(console.error)
						}).catch(console.error)
				}).catch(console.error)
		})
	}

	useEffect(() => {
		if (!pokemonData.length) {
			setPokemonData([])
			getPokemon()
		}
	}, [])

	// console.log(pokemonData)

	// TODO:	work on sort by rarity, then by game, then by level, then by name
	if (pokemonData.length) {
		return (
			<MuiTableBody>
				{pokemonData
					// .sort((a,b) => a.num.localeCompare(b.num) || a.id - b.id || a.name.localeCompare(b.name))
					.map(poke => renderChildren(poke))
				}
			</MuiTableBody>
		)
	}
}

const Row = props => {
	const { gen, group, lang, method, pokemon } = props

	// console.log(pokemon)

	const [loading, setLoading]	= useState(true)
	const [variations, setVariations] = useState([])

	// const calcChance = chance => {
	// 	switch (chance) {
	// 		case chance >= 60:
	// 			return 'Very Common'
	// 			break
	// 		case chance >= 50: 
	// 			return 'Common'
	// 			break
	// 		case chance >= 35:
	// 			return 'Uncommon'
	// 			break
	// 		case chance >= 5:
	// 			return 'Rare'
	// 			break
	// 		default:
	// 			return 'Very Rare'
	// 	}
	// }

	const compareEncounters = enc => {
		// TODO: probably need to do something to compare condition_values

		let encArr = [{
			id: 0,
			chance: 0,
			condition_values: enc[0].condition_values,
			max_level: 0,
			method: enc[0].method,
			min_level: 999,
		}]

		enc.map((e,i) => {
			let addArr = true

			encArr.map((a,j) => {
				if (a.method.name === e.method.name) {
					addArr = false
					encArr[j].chance += e.chance
					e.min_level < a.min_level && (encArr[j].min_level = e.min_level)
					e.max_level > a.max_level && (encArr[j].max_level = e.max_level)
				}
			})

			if (addArr) {
				encArr.push({
					id: i,
					chance: e.chance,
					condition_values: e.condition_values,
					max_level: e.max_level,
					method: e.method,
					min_level: e.min_level,
				})
			}
		})

		return (encArr)
	}

	const getVariations = () => {
		let varArr = []
		
		if (varArr.length === 0) {
			const encounterArr = compareEncounters(pokemon.version_details[0].encounter_details)
			encounterArr.map((e,i) => {
				varArr.push({
					id: i,
					condition_values: e.condition_values,
					max_chance: e.chance,
					max_level: e.max_level,
					method: e.method,
					min_level: e.min_level,
					version: [pokemon.version_details[0].version.name],
				})
			})
		}

		pokemon.version_details.map(v => {
			const encounterArr = compareEncounters(v.encounter_details)
			let addArr = true
			encounterArr.map(e => {
				varArr.map((a,i) => {
					if (
						a.max_chance === e.chance
						&& a.max_level === e.max_level
						&& a.method.name === e.method.name
						&& a.min_level === e.min_level
					) {
						addArr = false
						varArr[i].version.includes(v.version.name) || varArr[i].version.push(v.version.name)
					}
				})
			})

			addArr && encounterArr.map(e => {
				varArr.push({
					id: varArr.length,
					condition_values: e.condition_values,
					max_chance: e.chance,
					max_level: e.max_level,
					method: e.method,
					min_level: e.min_level,
					version: [v.version.name],
				})
			})
		})

		setVariations(varArr)
	}

	useEffect(() => {
		if (!variations.length) {
			setLoading(true)
			getVariations()
		} else {
			setLoading(false)
		}
	}, [variations])

	console.log(variations)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<TableRow><TableCell>Loading...</TableCell></TableRow>
		)
	}

	return (
		variations.sort((a,b) => a.max_chance - b.max_chance).map(variation => (
			<TableRow key={variation.id} sx={{
				borderBottom: 'none',
				'& > td, & > th': { borderBottomColor: 'divider' },
				'&:last-child > td, &:last-child > th': { border: 0 }
			}}>
				<TableCell size="small" sx={{ alignItems: 'center' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{pokemon.sprite && (
							<img src={pokemon.sprite} alt={pokemon.name} style={{ width: '50px', height: '50px' }} />
						)}
						<Typography variant="span">{pokemon.num}</Typography>
						<Typography component="h3" fontWeight="medium" sx={{ ml: 1}}>
							{pokemon.name}
							{pokemon.formName && (
								<Typography variant="caption" component="p" lineHeight={1}>{pokemon.formName}</Typography>
							)}
						</Typography>
					</Box>
					
				</TableCell>
				<TableCell size="small" sx={{ p: 0 }}>
					<MuiTable sx={{ height: 62 }}>
						<MuiTableBody>
							<TableRow>
								{group.games.map(m => (
									<TableCell key={m.id} sx={{
										borderBottom:			'none',
										borderLeft:				'1px solid',
										borderLeftColor:	'divider',
										borderRight:			'1px solid',
										borderRightColor: 'divider',
										px:								2,
										background:				variation.version.includes(m.name) && getColorFromGame(m.name),
										color:						variation.version.includes(m.name) || text[200],
										fontWeight:				variation.version.includes(m.name) && 'bold',
									}}>
										{m.short_label}
									</TableCell>
								))}
							</TableRow>
						</MuiTableBody>
					</MuiTable>
				</TableCell>
				<TableCell>
					<Chip
						label={`${variation.max_chance}%`}
						sx={{
							height: 26,
							width: '100%',
							borderRadius: 0.5,
							background: getColorFromPercentage(variation.max_chance),
							color: white,
							'& .MuiChip-label': { px: 1 },
						}}
					/>
				</TableCell>
				<TableCell>
					{variation.min_level}
					{variation.max_level !== variation.min_level && `-${variation.max_level}`}
				</TableCell>
			</TableRow>
		))
	)
}

const Translations = props => {
	const { data, lang } = props
	let rows = []

	const createData = (language, name) => { return { language, name } }

	const getLanguageName = language => {
		let [name, setName] = useState()

		P.getLanguageByName(language)
			.then(data => { setName(filterByLang('name', data.names, lang)) })

		return name
	}

	data.names.map(m => {
		rows.push(createData(getLanguageName(m.language.name), m.name))
	})

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Translations</Typography>
			
			<MuiTable aria-label={`translations of ${data.name}`}>
				<MuiTableBody>
					{rows.filter(f => f.language && f.name).sort((a,b) => a.language.localeCompare(b.language)).map(row => (
						<TableRow key={row.language} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell size="small" width={80} sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right', }}>
								<Typography variant="body2" fontWeight="medium">{row.language}</Typography>
							</TableCell>
							<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
								<Typography>{row.name}</Typography>
							</TableCell>
						</TableRow>
					))}
				</MuiTableBody>
			</MuiTable>
		</Box>
	)
}

export default LocationContainer