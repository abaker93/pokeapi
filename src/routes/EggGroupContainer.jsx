import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Chip, Container, Link, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'
import TypeIcon from '../assets/TypeIcon';

const P = new Pokedex()


const EggGroupContainer = props => {
	const eggGroup = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [eggData, setEggData] = useState()
	const [eggPokemon, setEggPokemon] = useState([])

	const getEggData = egg => {
		P.getEggGroupByName(egg)
			.then(data => {
				setEggData(data)
				return data
			})
			.then(data => {
				data.pokemon_species.map(p => {
					P.getPokemonSpeciesByName(p.name)
						.then(species => {

							species.varieties.map(v => {
								P.getPokemonByName(v.pokemon.name)
									.then(poke => {

										P.getPokemonFormByName(poke.forms[0].name)
											.then(form => {

												setEggPokemon(prev => [...prev, {
													id: 				poke.id,
													egg_groups:	species.egg_groups,
													form_name:	form.form_name,
													form_names:	form.names.length > 0 ? form.names : form.form_names,
													names:			species.names,
													num:				formatDexId(species.pokedex_numbers.filter(f => f.pokedex.name === 'national')[0].entry_number, 1000),
													sprite:			form.sprites.front_default ? form.sprites.front_default : poke.sprites.front_default,
													types: 			poke.types,
												}])
										}).catch(console.error)
								}).catch(console.error)
							})
					}).catch(console.error)
				})
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!eggData) {
			setLoading(true)
			setEggPokemon([])
			getEggData(eggGroup)
		}
	}, [eggGroup, eggData])

	useEffect(() => {
		if (eggData && eggPokemon.length > eggData.pokemon_species.length - 1) {
			setLoading(false)
		}
	}, [eggPokemon])
	
	console.log(loading, eggData, eggPokemon)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<>
			<Header name={filterByLang('name', eggData.names, lang)} />

			<Container>
				<Table name={filterByLang('name', eggData.names, lang)}>
					{eggPokemon
						.filter(f => f.form_name !== 'totem-alola' && f.form_name !== 'gmax' && f.form_name !== 'mega' && f.form_name !== 'starter' && f.form_name !== 'world-cap')
						.sort((a,b) => a.num - b.num || a.id - b.id)
						.map(m => (
							<Row key={m.id} eggGroup={eggData.name} lang={lang} pokemon={m} />
						))
					}
				</Table>

				<Translations eggGroup={eggData} lang={lang} />
			</Container>
		</>
	)	
}

const Header = props => {
	const { name } = props

	return (
		<Box component="header" mb={5}>
			<Box p={1} mb={5} sx={{
				background: alpha(gray[100], 0.3),
				borderBottom: "2px solid",
				borderColor: "primary.main",
			}}>
				<Container>
					<Breadcrumbs color={text[300]} aria-label="breadcrumb">
						<Link
							underline="hover"
							color="inherit"
							href="/"
						>
							Drifloon Database
						</Link>
						<Link
							underline="hover"
							color="inherit"
							href="/egg-group/"
						>
							Egg Groups
						</Link>
						<Typography
							fontWeight="medium"
							color="primary.main"
						>
							{name}
						</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link underline="none" href="/egg-group/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Egg Groups</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{name}</Typography>
			</Container>
		</Box>
	)
}

const Table = props => {
	const { children, name } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Pokémon in the {name} egg group</Typography>
			<MuiTable aria-label={`pokémon with ${name}`}>
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
						<TableCell>Type</TableCell>
						<TableCell>Other Group</TableCell>
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
	const { eggGroup, lang, pokemon } = props
	const pokemonName = filterByLang('name', pokemon.names, 'en')

	const [loading, setLoading]	= useState(true)
	const [groups, setGroups] = useState([])

	const getGroups = groups => {
		groups.map(m => {
			P.getEggGroupByName(m.name)
				.then(data => {
					setGroups(prev => [...prev, {
						name:		data.name,
						names:	data.names,
					}])
				})
				.catch(console.error)
		})
	}

	useEffect(() => {
		if (groups.length < 1) {
			getGroups(pokemon.egg_groups)
		} else if (groups.length === pokemon.egg_groups.length) {
			setLoading(false)
		}
	}, [pokemon, groups])

	console.log(pokemonName, groups)

	if (loading) {
		// TODO: add loading skeleton
		return (
			<TableRow><TableCell>Loading...</TableCell></TableRow>
		)
	}

	return (
		<TableRow hover sx={{ 'td, th': { borderBottomColor: 'divider' }, '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell size="small" sx={{ alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					{pokemon.sprite && (
						<img src={pokemon.sprite} alt={pokemonName} style={{ width: '50px', height: '50px' }} />
					)}
					<Typography variant="span" sx={{ ml: 1 }}>{pokemon.num}</Typography>
				</Box>
			</TableCell>
			<TableCell size="small" sx={{ lineHeight: '1' }}>
				<Link href={`/pokemon/${pokemon.num}`} underline="hover"><Typography>{pokemonName}</Typography></Link>
				{pokemon.form_names.length > 0 && (
					<Typography variant="caption" lineHeight={1}>{filterByLang('name', pokemon.form_names, 'en')}</Typography>
				)}
			</TableCell>
			<TableCell size="small">
				<Chip
					variant="type"
					size="small"
					type={pokemon.types[0].type.name}
					label={pokemon.types[0].type.name}
					sx={{ width: '100%' }}
				/>
				{pokemon.types[1] ? (
					<Chip
						variant="type"
						size="small"
						type={pokemon.types[1].type.name}
						label={pokemon.types[1].type.name}
						sx={{ mt: 0.25, width: '100%' }}
					/>
				) : null}
			</TableCell>
			<TableCell size="small">
				{groups.filter(f => f.name !== eggGroup).map(m => (
					<Link key={m.name} href={`/ability/${m.name}`} underline="hover">
						<Typography>{filterByLang('name', m.names, lang)}</Typography>
					</Link>
				))}
			</TableCell>
		</TableRow>
	)
}

const Translations = props => {
	const { eggGroup, lang } = props
	let rows = []

	const createData = (language, name) => { return { language, name } }

	const getLanguageName = language => {
		let [name, setName] = useState()

		P.getLanguageByName(language)
			.then(data => { setName(filterByLang('name', data.names, lang)) })

		return name
	}

	eggGroup.names.map(m => {
		rows.push(createData(getLanguageName(m.language.name), m.name))
	})

	return (
		<Box mb={5}>
			<Typography variant="h2">Translations</Typography>
			
			<MuiTable aria-label={`translations of ${eggGroup.name}`}>
				<TableBody>
					{rows.filter(f => f.language && f.name).sort((a,b) => a.language.localeCompare(b.language)).map(row => (
						<TableRow key={row.language} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell size="small" sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right', }}>
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

export default EggGroupContainer