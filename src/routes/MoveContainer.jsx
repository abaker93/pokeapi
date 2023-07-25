import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Chip, Container, Link, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getGenFromGame } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'

import TypeIcon from '../assets/TypeIcon';
import { Physical, Special, Status } from '../assets/MoveIcon';

const P = new Pokedex()


const MoveContainer = props => {
	const move = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [moveData, setMoveData] = useState()
	const [movePokemon, setMovePokemon] = useState([])

	const getMoveData = move => {
		P.getMoveByName(move)
			.then(data => {
				setMoveData(data)
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!moveData) {
			setLoading(true)
			setMovePokemon([])
			getMoveData(move)
		}

		else { setLoading(false) }
	}, [move, moveData])

	console.log(moveData)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<>
			<Header name={filterByLang('name', moveData.names, lang)} />

			<Container>
				<Data move={moveData} />

				<Effects lang={lang} move={moveData} />
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
							href="/move/"
						>
							Moves
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
				<Link underline="none" href="/moves/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Moves</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{name}</Typography>
			</Container>
		</Box>
	)
}

const Data = props => {
	const { move } = props

	const rowStyle = {
		'th': { textAlign: 'right', fontWeight: 'bold' },
		'td, th': { borderBottomColor: 'divider' },
		'tr:last-child td, tr:last-child th': { border: 0 }
	}

	return (
		<Box mb={5}>
			<Typography variant="h2" mb={2}>Move Data</Typography>
			<MuiTable aria-label={`${move.name} move data`}>
				<TableBody>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="bold">Type</Typography>
						</TableCell>
						<TableCell size="small">
							<Chip
								variant="type"
								type={move.type.name}
								label={move.type.name}
								icon={<TypeIcon type={move.type.name} />}
							/>
						</TableCell>
					</TableRow>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">Category</Typography>
						</TableCell>
						<TableCell size="small" sx={{ display: 'flex', alignItems: 'center' }}>
							{move.damage_class.name === 'physical' && (
								<>
									<Physical />
									<Typography sx={{ ml: 0.5 }}>Physical</Typography>
								</>
							)}
							{move.damage_class.name === 'special' && (
								<>
									<Special />
									<Typography sx={{ ml: 0.5 }}>Special</Typography>
								</>
							)}
							{move.damage_class.name === 'status' && (
								<>
									<Status />
									<Typography sx={{ ml: 0.5 }}>Status</Typography>
								</>
							)}
						</TableCell>
					</TableRow>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">Base Power</Typography>
						</TableCell>
						<TableCell size="small">
							<Typography>{move.power ? move.power : <>&mdash;</>}</Typography>
						</TableCell>
					</TableRow>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">Accuracy</Typography>
						</TableCell>
						<TableCell size="small">
							<Typography>{move.accuracy ? `${move.accuracy}%` : <>&mdash;</>}</Typography>
						</TableCell>
					</TableRow>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">PP</Typography>
						</TableCell>
						<TableCell size="small">
							<Typography>{move.pp ? move.pp : <>&mdash;</>}</Typography>
						</TableCell>
					</TableRow>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">Introduced</Typography>
						</TableCell>
						<TableCell size="small">
							<Typography>{move.generation.name}</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</MuiTable>
		</Box>
	)
}

const Effects = props => {
	const { lang, move } = props
	const moveName = filterByLang('name', move.names, lang)
	const effectEntry = filterByLang('effect', move.effect_entries, lang).length > filterByLang('short_effect', move.effect_entries, lang).length ? filterByLang('effect', move.effect_entries, lang) : filterByLang('short_effect', move.effect_entries, lang)

	const [pastValues, setPastValues] = useState([])

	const listStyle = {
		'& > *:not(:last-child)::after': { content: '", "' },
		'& > *:nth-last-child(2)::after': { content: '", and "' },
	}

	const getPastValues = arr => {
		let genNum = 1

		arr.forEach(value => {
			const gen = getGenFromGame(value.version_group.name)
			const genText = gen-1 > genNum ? `s ${genNum}-${gen-1}` : ` ${gen-1}`

			setPastValues(prev => [...prev, {
				accuracy: value.accuracy ? `${value.accuracy}% accuracy` : null,
				effect_chance: value.effect_chance ? `${value.effect_chance}% effect chance` : null,
				effect_entries: value.effect_entries ? filterByLang('short_effect', value.effect_entries, lang) : null,
				generation: gen,
				generationText: genText,
				power: value.power ? `${value.power} base power` : null,
				pp: value.pp ? `${value.pp} PP` : null,
				type: value.type ? `is a ${value.type.name}-type move` : null,
			}])

			genNum = gen
		})
	}

	useEffect(() => {
		setPastValues([])
		getPastValues(move.past_values)
	}, [move])

	// TODO: finish the sentence logic (e.g. "In Generation 1-4, Tackle is a fire-type move and has 35 base power.")
	return (
		<Box mb={5}>
			<Box mb={5}>
				<Typography variant="h2" mb={2}>Effects</Typography>
				<Typography>{effectEntry}</Typography>
			</Box>

			{move.past_values.length > 0 && (
				<Box mb={5}>
					<Typography variant="h3" mb={2}>Past Values</Typography>
					{pastValues.map(m => (
						<Typography key={m.generation}>
							<span>In Generation{m.generationText}, </span>
							<Typography variant="span" fontWeight="medium">{moveName} </Typography>
							{m.type}
							{m.accuracy || m.power || m.pp ? (
								<>
									<span>has </span>
									<Typography variant="span" sx={listStyle}>
										{m.power && <span>{m.power}</span>}
										{m.accuracy && <span>{m.accuracy}</span>}
										{m.pp && <span>{m.pp}</span>}
									</Typography>
								</>
							) : null}
							.
						</Typography>
					))}
				</Box>
			)}
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

export default MoveContainer