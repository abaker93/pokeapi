import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame, siteTitle } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'
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
	}, [locationData, areasData])


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
				let groupsArr = []
				gen.location_groups.map(group => {
					// red/blue/yellow
					group.games.map(game => {
						// red
						poke.version_details.map(version => {
							// red
							if (version.version.name === game.name) {
								versions.push(version)
								groupsArr.push(group.name)
							}
						})
					})
				})
				
				groupsArr = groupsArr.filter((v,i,a) => a.findIndex(t => (t === v)) === i)

				if (versions.length && groupsArr.length) {
					pokemon.push({ ...poke, version_details: versions, groups: groupsArr })
				}
				// setGroups(groupsArr)
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
					.sort((a, b) => a.id - b.id)
					.map(method => (
						<Table key={method.id} lang={lang} method={method}>
							{method.pokemon_encounters.map(pokemon => (
								<Row key={pokemon.pokemon.name} gen={gen} lang={lang} method={method} pokemon={pokemon} />
							))}
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
						<TableCell>#</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Games</TableCell>
						<TableCell>Rarity</TableCell>
						<TableCell>Levels</TableCell>
						<TableCell>Details</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{children}
				</TableBody>
			</MuiTable>
		</Box>
	)
}

const Row = props => {
	const { gen, lang, pokemon } = props

	const [loading, setLoading]	= useState(true)
	const [pokemonData, setPokemonData] = useState()
	const [games, setGames] = useState()

	const group = gen.location_groups.filter(group => pokemon.groups.includes(group.name))[0]

	const getPokemon = () => {
		P.getPokemonByName(pokemon.pokemon.name)
			.then(poke => {
				P.getPokemonSpeciesByName(poke.species.name)
					.then(species => {
						P.getPokemonFormByName(poke.forms[0].name)
							.then(form => {
								setPokemonData({
									id:				poke.id,
									formName:	form.names.length > 0 ? filterByLang('name', form.names, lang) : filterByLang('name', form.form_names, lang),
									name:			filterByLang('name', species.names, lang),
									num:			formatDexId(species.pokedex_numbers.filter(f => f.pokedex.name === 'national')[0].entry_number),
									sprite:		form.sprites.front_default ? form.sprites.front_default : poke.sprites.front_default,
								})
							}).catch(console.error)
					}).catch(console.error)
			}).catch(console.error)
	}

	const getGames = () => {
		// TODO: separate based on encounter details
		let games = {}
		group.games.map(game => {
			games = {...games, [game.name]: false}

			pokemon.version_details.map(version => {
				if (version.version.name === game.name) {
					games[game.name] = true
				}
			})
		})

		setGames(games)
	}

	useEffect(() => {
		if (!games) {
			setLoading(true)
			getGames()
		}
	}, [])

	useEffect(() => {
		if (!pokemonData) {
			setLoading(true)
			getPokemon()
		}
	}, [pokemonData])

	useEffect(() => {
		if (pokemonData && games) {
			setLoading(false)
		}
	}, [pokemonData, games])

	// console.log(pokemon, pokemonData)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<TableRow><TableCell>Loading...</TableCell></TableRow>
		)
	}

	return (
		<TableRow sx={{
			borderBottom: 'none',
			'& > td, & > th': { borderBottomColor: 'divider' },
			'&:last-child > td, &:last-child > th': { border: 0 }
		}}>
			<TableCell size="small" sx={{ alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					{pokemonData.sprite && (
						<img src={pokemonData.sprite} alt={pokemonData.name} style={{ width: '50px', height: '50px' }} />
					)}
					<Typography variant="span" sx={{ ml: 1 }}>{pokemonData.num}</Typography>
				</Box>
			</TableCell>
			<TableCell size="small" sx={{ lineHeight: '1' }}>
				<Typography component="h3" fontWeight="medium">
					{pokemonData.name}
					{pokemonData.formName && (
						<Typography variant="caption" component="p" lineHeight={1}>{pokemonData.formName}</Typography>
					)}
				</Typography>
			</TableCell>
			<TableCell size="small" sx={{ p: 0 }}>
				<MuiTable sx={{ height: 62 }}>
					<TableBody>
						<TableRow>
							{group.games.map(m => (
								<TableCell key={m.id} sx={{
									borderBottom: 'none',
									px: 2,
									background: games[m.name] && getColorFromGame(m.name),
									color: games[m.name] || text[200],
								}}>
									{m.short_label}
								</TableCell>
							))}
						</TableRow>
					</TableBody>
				</MuiTable>
				
			</TableCell>
		</TableRow>
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
				<TableBody>
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
				</TableBody>
			</MuiTable>
		</Box>
	)
}

export default LocationContainer