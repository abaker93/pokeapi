import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Chip, Container, Link, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame, getGenFromGame, getGenNumFromName, getVersionGroupByName } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'

import TypeIcon from '../assets/TypeIcon';
import { Physical, Special, Status } from '../assets/MoveIcon';

const P = new Pokedex()


const MoveContainer = () => {
	const move = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [moveData, setMoveData] = useState()
	const [moveName, setMoveName] = useState()
	const [movePokemon, setMovePokemon] = useState([])

	const getMoveData = move => {
		P.getMoveByName(move)
			.then(data => {
				setMoveData(data)
				return data
			})
			.then(data => {
				data.learned_by_pokemon.map(p => {

					P.getPokemonByName(p.name)
						.then(poke => {

							P.getPokemonSpeciesByName(poke.species.name)
								.then(species => {

									P.getPokemonFormByName(poke.forms[0].name)
										.then(form => {

											setMovePokemon(prev => [...prev, {
												id: 				poke.id,
												form_name:	form.form_name,
												form_names:	form.names.length > 0 ? form.names : form.form_names,
												names:			species.names,
												num:				formatDexId(species.pokedex_numbers.filter(f => f.pokedex.name === 'national')[0].entry_number, 1000),
												sprite:			form.sprites.front_default ? form.sprites.front_default : poke.sprites.front_default,
												types: 			poke.types,
												moves:			poke.moves.filter(f => f.move.name === move).filter(f => f.version_group_details.some(s => s.move_learn_method.name === 'level-up')),
											}])
										})
								})
						})
				})
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!moveData) {
			setLoading(true)
			setMovePokemon([])
			getMoveData(move)
		}
		
		if (moveData && !moveName) {
			setMoveName(filterByLang('name', moveData.names, lang))
		} 
	}, [move, moveData])

	useEffect(() => {
		if (moveData && moveName) { setLoading(false) }
	}, [moveName])

	// console.log(moveData)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<>
			<Header moveName={moveName} />

			<Container>
				<Data lang={lang} move={moveData} moveName={moveName} />
				<Effects lang={lang} move={moveData} moveName={moveName} />
				<Descriptions lang={lang} move={moveData} />
				<Translations lang={lang} move={moveData} />

				<Table moveName={moveName}>
					{movePokemon
						.filter(f => f.moves.length > 0)
						.sort((a,b) => a.num - b.num || a.id - b.id)
						.map(m => (
							<Row key={m.id} lang={lang} pokemon={m} />
						))
					}
				</Table>
			</Container>
		</>
	)	
}

const Header = props => {
	const { moveName } = props

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
							{moveName}
						</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link underline="none" href="/moves/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Moves</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{moveName}</Typography>
			</Container>
		</Box>
	)
}

const Data = props => {
	const { lang, move, moveName } = props

	const [loading, setLoading] = useState(true)
	const [generation, setGeneration]	= useState()

	const rowStyle = {
		'th': { textAlign: 'right', fontWeight: 'bold' },
		'td, th': { borderBottomColor: 'divider' },
		'tr:last-child td, tr:last-child th': { border: 0 }
	}

	const getGeneration = gen => {
		P.getGenerationByName(gen)
			.then(data => setGeneration(data))
	}

	useEffect(() => {
		if (!generation) {
			setLoading(true)
			getGeneration(move.generation.name)
		}
		else { setLoading(false) }
	}, [move, generation])

	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<Box mb={5}>
			<Typography variant="h2" mb={2}>Data on {moveName}</Typography>
			<MuiTable aria-label={`${move.name} move data`}>
				<TableBody>
					<TableRow sx={rowStyle}>
						<TableCell size="small" component="th">
							<Typography variant="body2" fontWeight="medium">Type</Typography>
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
							<Typography>{filterByLang('name', generation.names, lang)}</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</MuiTable>
		</Box>
	)
}

const Effects = props => {
	const { lang, move, moveName } = props

	const [pastValues, setPastValues] = useState([])

	const getEffectEntry = (entries, lang) => {
		return filterByLang('effect', entries, lang).length > filterByLang('short_effect', entries, lang).length ? filterByLang('effect', entries, lang) : filterByLang('short_effect', entries, lang)
	}

	const getPastValues = arr => {
		let genNum = getGenNumFromName(move.generation.name)

		arr.forEach(value => {
			const generation = getGenFromGame(value.version_group.name)
			const generationText = generation-1 > genNum
				? `In Generations ${genNum}-${generation-1}`
				: `In Generation ${generation-1}`

			let pastValue = []
			value.type && pastValue.push(`is a ${value.type.name}-type move.`)
			value.accuracy && pastValue.push(`has ${value.accuracy}% accuracy.`)
			value.power && pastValue.push(`has ${value.power} base power.`)

			setPastValues(prev => [...prev, {
				generationText: generationText,
				values: pastValue
			}])

			genNum = generation
		})
	}

	useEffect(() => {
		setPastValues([])
		getPastValues(move.past_values)
	}, [move])

	return (
		<Box mb={5}>
			<Box mb={3}>
				<Typography variant="h2" mb={2}>Effects of {moveName}</Typography>
				<Typography>{getEffectEntry(move.effect_entries, lang)}</Typography>
			</Box>

			{pastValues.length > 0 && (
				<Box mb={3}>
					<Typography variant="h3" mb={1}>Past Values</Typography>
					{pastValues.map((m,i) => (
						<Box key={i}>
							<Typography variant="h4">{m.generationText}</Typography>
							<Typography component="ul" mb={2}>
								{m.values.map((v, j) => (
									<Typography key={j} component="li">
										<Typography component="span" fontWeight="medium">{moveName}</Typography> {v}
									</Typography>
								))}
							</Typography>
						</Box>
					))}
				</Box>
			)}
		</Box>
	)
}

const Descriptions = props => {
	const { lang, move } = props
	const flavor_text = move.flavor_text_entries.filter(f => f.language.name === lang)

	const version_groups = [
		{
			name: 'gen-i',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('red')}>Red</Typography> / <Typography variant="span" color={getColorFromGame('blue')}>Blue</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('yellow')}>Yellow</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'red-blue')[0] ? flavor_text.filter(f => f.version_group.name === 'red-blue')[0].flavor_text : null }
		},
		{
			name: 'gen-ii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('gold')}>Gold</Typography> / <Typography variant="span" color={getColorFromGame('silver')}>Silver</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('crystal')}>Crystal</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'gold-silver')[0] ? flavor_text.filter(f => f.version_group.name === 'gold-silver')[0].flavor_text : null }
		},
		{
			name: 'gen-iii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('ruby')}>Ruby</Typography> / <Typography variant="span" color={getColorFromGame('sapphire')}>Sapphire</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('emerald')}>Emerald</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('firered')}>FireRed</Typography> / <Typography variant="span" color={getColorFromGame('leafgreen')}>LeafGreen</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'ruby-sapphire')[0] ? flavor_text.filter(f => f.version_group.name === 'ruby-sapphire')[0].flavor_text : null }
		},
		{
			name: 'gen-iv',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('diamond')}>Diamond</Typography> / <Typography variant="span" color={getColorFromGame('pearl')}>Pearl</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('platinum')}>Platinum</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('heartgold')}>HeartGold</Typography> / <Typography variant="span" color={getColorFromGame('soulsilver')}>SoulSilver</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'diamond-pearl')[0] ? flavor_text.filter(f => f.version_group.name === 'diamond-pearl')[0].flavor_text : null }
		},
		{
			name: 'gen-v',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('black')}>Black</Typography> / <Typography variant="span" color={getColorFromGame('white')}>White</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('black-2')}>Black 2</Typography> / <Typography variant="span" color={getColorFromGame('white-2')}>White 2</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'black-white')[0] ? flavor_text.filter(f => f.version_group.name === 'black-white')[0].flavor_text : null }
		},
		{
			name: 'gen-vi',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('x')}>X</Typography> / <Typography variant="span" color={getColorFromGame('y')}>Y</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('omega-ruby')}>Omega Ruby</Typography> / <Typography variant="span" color={getColorFromGame('alpha-sapphire')}>Alpha Sapphire</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'x-y')[0] ? flavor_text.filter(f => f.version_group.name === 'x-y')[0].flavor_text : null }
		},
		{
			name: 'gen-vii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('sun')}>Sun</Typography> / <Typography variant="span" color={getColorFromGame('moon')}>Moon</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('ultra-sun')}>Ultra Sun</Typography> / <Typography variant="span" color={getColorFromGame('ultra-moon')}>Ultra Moon</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'sun-moon')[0] ? flavor_text.filter(f => f.version_group.name === 'sun-moon')[0].flavor_text : null }
		},
		{
			name: 'gen-viii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('sword')}>Sword</Typography> / <Typography variant="span" color={getColorFromGame('shield')}>Shield</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('brilliant-diamond')}>Brilliant Diamond</Typography> / <Typography variant="span" color={getColorFromGame('shining-pearl')}>Shining Pearl</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'sword-shield')[0] ? flavor_text.filter(f => f.version_group.name === 'sword-shield')[0].flavor_text : null }
		},
		{
			name: 'gen-ix',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('scarlet')}>Scarlet</Typography> / <Typography variant="span" color={getColorFromGame('violet')}>Violet</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0] ? flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0].flavor_text : null }
		},
	]

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Game descriptions</Typography>
			<MuiTable aria-label="flavor text by game">
				<TableBody>
					{version_groups.map(m => (
						m.flavor_text && (
							<TableRow key={m.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" size="small" sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right', }}>
									{m.label}
								</TableCell>
								<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
									<Typography>{m.flavor_text}</Typography>
								</TableCell>
							</TableRow>
						)
					))}
				</TableBody>
			</MuiTable>
		</Box>
	)
}

const Translations = props => {
	const { lang, move, moveName } = props
	let rows = []

	const createData = (language, name) => { return { language, name } }

	const getLanguageName = language => {
		const [name, setName] = useState()

		P.getLanguageByName(language)
			.then(data => { setName(filterByLang('name', data.names, lang)) })

		return name
	}

	move.names.map(m => {
		rows.push(createData(getLanguageName(m.language.name), m.name))
	})

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Translations</Typography>
			
			<MuiTable aria-label={`translations of ${move.name}`}>
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

const Table = props => {
	const { children, moveName } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Pokémon that learn {moveName} by level up</Typography>
			<MuiTable aria-label={`pokémon that learn ${moveName} by level-up`}>
				<TableHead>
					<TableRow sx={{
						'& td, & th': {
							padding: 1,
							backgroundColor: alpha(gray[100], 0.4),
							borderBottom: `1px solid ${gray[300]}`
						}
					}}>
						<TableCell>Pokémon</TableCell>
						<TableCell>Level</TableCell>
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
	const { lang, pokemon } = props
	const pokemonName = filterByLang('name', pokemon.names, lang)

	console.log(pokemon)

	return (
		<TableRow
			component={Link}
			href={`/pokemon/${pokemon.num}`}
			underline="none"
			hover
			sx={{
				'& > td, & > th': { borderBottomColor: 'divider' },
				'&:last-child > td, &:last-child > th': { border: 0 }
			}}
		>
			<TableCell size="small">
				{pokemon.sprite && (
					<img src={pokemon.sprite} alt={pokemonName} style={{ width: '50px', height: '50px' }} />
				)}
				<Typography component="h3" fontWeight="medium" sx={{ mb: 1 }}>
					<Typography variant="span" color={text[300]} fontSize="0.85em" sx={{ mr: 0.75 }}>{pokemon.num}</Typography>
					{pokemonName}
					{pokemon.form_names.length > 0 && (
						<Typography variant="caption" component="p" lineHeight={1}>{filterByLang('name', pokemon.form_names, lang)}</Typography>
					)}
				</Typography>
				<Chip
					variant="type"
					size="small"
					type={pokemon.types[0].type.name}
					label={pokemon.types[0].type.name}
				/>
				{pokemon.types[1] ? (
					<Chip
						variant="type"
						size="small"
						type={pokemon.types[1].type.name}
						label={pokemon.types[1].type.name}
						sx={{ ml: 1 }}
					/>
				) : null}
			</TableCell>
			<TableCell size="small">
				<MuiTable>
					<TableBody>
						{pokemon.moves.map(m => (
							m.version_group_details.map((v,i) => (
								v.move_learn_method.name === 'level-up' && (
									<TableRow key={i} sx={{ '& > td, & > th': { borderBottomColor: 'divider' }, '&:last-child > td, &:last-child > th': { border: 0 } }}>
										<TableCell sx={{ py: 0, pl: 0, pr: 0.5, lineHeight: 1.2 }}>
											<Typography variant="caption" lineHeight={1.2}>{getVersionGroupByName(v.version_group.name)}</Typography>
										</TableCell>
										<TableCell sx={{ width: 30, p: 0, lineHeight: 1.2 }}>
											<Typography variant="caption" lineHeight={1.2}>{v.level_learned_at}</Typography>
										</TableCell>
									</TableRow>
								)
							))
						))}
					</TableBody>
				</MuiTable>
				
			</TableCell>
		</TableRow>
	)
}



export default MoveContainer