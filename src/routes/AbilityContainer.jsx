import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'

const P = new Pokedex()


const AbilityContainer = props => {
	const ability = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [abilityData, setAbilityData] = useState()
	const [abilityPokemon, setAbilityPokemon] = useState([])

	const getAbilityData = ability => {
		P.getAbilityByName(ability)
			.then(data => {
				setAbilityData(data)
				return data
			})
			.then(data => {
				data.pokemon.map(p => {

					P.getPokemonByName(p.pokemon.name)
					.then(poke => {

						P.getPokemonSpeciesByName(poke.species.name)
							.then(species => {

								P.getPokemonFormByName(poke.forms[0].name)
									.then(form => {



										setAbilityPokemon(prev => [...prev, {
											id: 				poke.id,
											abilities: 	poke.abilities,
											form_names:	form.names.length > 0 ? form.names : form.form_names,
											is_hidden:	p.is_hidden,
											names:			species.names,
											num:				formatDexId(species.pokedex_numbers.filter(f => f.pokedex.name === 'national')[0].entry_number, 1000),
											sprite:			form.sprites.front_default ? form.sprites.front_default : poke.sprites.front_default,
										}])
									}).catch(console.error)
							}).catch(console.error)
					}).catch(console.error)
				})
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!abilityData) {
			setLoading(true)
			setAbilityPokemon([])
			getAbilityData(ability)
		}
	}, [ability, abilityData])

	useEffect(() => {
		if (abilityData && abilityPokemon.length === abilityData.pokemon.length) {
			setLoading(false)
		}
	}, [abilityPokemon])
	
	// console.log(loading, abilityData, abilityPokemon)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<>
			<Header name={filterByLang('name', abilityData.names, lang)} />

			<Container>
				<Box mb={5}>
					<Typography variant="h2" sx={{ mb: 2 }}>Effect</Typography>
					{filterByLang('effect', abilityData.effect_entries, lang)}
				</Box>

				<Descriptions data={abilityData} lang={lang} />

				<AbilityTable name={filterByLang('name', abilityData.names, lang)}>
					{abilityPokemon
						.filter(f => f.is_hidden === false)
						.sort((a,b) => a.num - b.num || a.id - b.id)
						.map(m => (
							<AbilityRow key={m.id} ability={abilityData.name} lang={lang} pokemon={m} />
						))
					}
				</AbilityTable>

				<HiddenTable name={filterByLang('name', abilityData.names, lang)}>
					{abilityPokemon
						.filter(f => f.is_hidden === true)
						.sort((a,b) => a.num - b.num || a.id - b.id)
						.map(m => (
							<HiddenRow key={m.id} lang={lang} pokemon={m} />
						))
					}
				</HiddenTable>

				<Translations ability={abilityData} lang={lang} />
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
							href="/ability/"
						>
							Abilities
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
				<Link underline="none" href="/ability/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Abilities</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{name}</Typography>
			</Container>
		</Box>
	)
}

const Descriptions = props => {
	const { data, lang } = props
	const flavor_text = data.flavor_text_entries.filter(f => f.language.name === lang)

	const version_groups = [
		{
			name: 'gen-i',
			label: (
				<>
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('red')}>Red</Typography> / <Typography variant="span" color={getColorFromGame('blue')}>Blue</Typography>
					</Typography>
					<Typography variant="body2" color={getColorFromGame('yellow')}>Yellow</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'red-blue')[0] ? flavor_text.filter(f => f.version_group.name === 'red-blue')[0].flavor_text : null }
		},
		{
			name: 'gen-ii',
			label: (
				<>
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('gold')}>Gold</Typography> / <Typography variant="span" color={getColorFromGame('silver')}>Silver</Typography>
					</Typography>
					<Typography variant="body2" color={getColorFromGame('crystal')}>Crystal</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'gold-silver')[0] ? flavor_text.filter(f => f.version_group.name === 'gold-silver')[0].flavor_text : null }
		},
		{
			name: 'gen-iii',
			label: (
				<>
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('ruby')}>Ruby</Typography> / <Typography variant="span" color={getColorFromGame('sapphire')}>Sapphire</Typography>
					</Typography>
					<Typography variant="body2" color={getColorFromGame('emerald')}>Emerald</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('diamond')}>Diamond</Typography> / <Typography variant="span" color={getColorFromGame('pearl')}>Pearl</Typography>
					</Typography>
					<Typography variant="body2" color={getColorFromGame('platinum')}>Platinum</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('black')}>Black</Typography> / <Typography variant="span" color={getColorFromGame('white')}>White</Typography>
					</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('x')}>X</Typography> / <Typography variant="span" color={getColorFromGame('y')}>Y</Typography>
					</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('sun')}>Sun</Typography> / <Typography variant="span" color={getColorFromGame('moon')}>Moon</Typography>
					</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('sword')}>Sword</Typography> / <Typography variant="span" color={getColorFromGame('shield')}>Shield</Typography>
					</Typography>
					<Typography variant="body2">
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
					<Typography variant="body2">
						<Typography variant="span" color={getColorFromGame('scarlet')}>Scarlet</Typography> / <Typography variant="span" color={getColorFromGame('violet')}>Violet</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0] ? flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0].flavor_text : null }
		},
	]
	
	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Game Descriptions</Typography>
			<Table aria-label="flavor text by game">
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
			</Table>
		</Box>
	)
}

const AbilityTable = props => {
	const { children, name } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Pokémon with the {name} ability</Typography>
			<Table aria-label={`pokémon with ${name}`}>
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
						<TableCell>Second Ability</TableCell>
						<TableCell>Hidden Ability</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{children}
				</TableBody>
			</Table>
		</Box>
	)
}

const AbilityRow = props => {
	const { ability, lang, pokemon } = props
	const pokemonName = filterByLang('name', pokemon.names, 'en')

	const [loading, setLoading]	= useState(true)
	const [abilities, setAbilities] = useState([])

	const getAbilities = abilities => {
		abilities.map(m => {
			P.getAbilityByName(m.ability.name)
				.then(data => {
					setAbilities(prev => [...prev, {
						is_hidden:	m.is_hidden,
						name:				data.name,
						names:			data.names,
						slot:				m.slot,
					}])
				})
				.catch(console.error)
		})
	}

	useEffect(() => {
		if (abilities.length < 1) {
			getAbilities(pokemon.abilities)
		} else if (abilities.length === pokemon.abilities.length) {
			setLoading(false)
		}
	}, [pokemon, abilities])

	// console.log(pokemonName, abilities )

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
				{abilities.filter(f => f.is_hidden === false && f.name !== ability).length > 0 ? (
					abilities
						.filter(f => f.is_hidden === false && f.name !== ability)
						.sort((a,b) => a.slot - b.slot)
						.map(m => (
							<Link key={m.name} href={`/ability/${m.name}`} underline="hover">
								<Typography>{filterByLang('name', m.names, lang)}</Typography>
							</Link>
						))
				) : (
					<Typography>&mdash;</Typography>
				)}
			</TableCell>
			<TableCell size="small">
				{abilities.filter(f => f.is_hidden === true).length > 0 ? (
					abilities.filter(f => f.is_hidden === true).map(m => (
						<Link key={m.name} href={`/ability/${m.name}`} underline="hover">
							<Typography>{filterByLang('name', m.names, lang)}</Typography>
						</Link>
					))
				) : (
					<Typography>&mdash;</Typography>
				)}
			</TableCell>
		</TableRow>
	)
}

const HiddenTable = props => {
	const { children, name } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Pokémon with the {name} hidden ability</Typography>
			<Table aria-label={`pokémon with ${name}`}>
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
						<TableCell>Abilities</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{children}
				</TableBody>
			</Table>
		</Box>
	)
}

const HiddenRow = props => {
	const { ability, lang, pokemon } = props
	const pokemonName = filterByLang('name', pokemon.names, 'en')

	const [loading, setLoading]	= useState(true)
	const [abilities, setAbilities] = useState([])

	const getAbilities = abilities => {
		abilities.map(m => {
			P.getAbilityByName(m.ability.name)
				.then(data => {
					setAbilities(prev => [...prev, {
						is_hidden:	m.is_hidden,
						name:				data.name,
						names:			data.names,
						slot:				m.slot,
					}])
				})
				.catch(console.error)
		})
	}

	useEffect(() => {
		if (abilities.length < 1) {
			getAbilities(pokemon.abilities)
		} else if (abilities.length === pokemon.abilities.length) {
			setLoading(false)
		}
	}, [pokemon, abilities])

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
				{abilities.filter(f => f.is_hidden === false && f.name !== ability).length > 0 ? (
					abilities
						.filter(f => f.is_hidden === false && f.name !== ability)
						.sort((a,b) => a.slot - b.slot)
						.map(m => (
							<Link key={m.name} href={`/ability/${m.name}`} underline="hover">
								<Typography>{filterByLang('name', m.names, lang)}</Typography>
							</Link>
						))
				) : (
					<Typography>&mdash;</Typography>
				)}
			</TableCell>
		</TableRow>
	)
}

const Translations = props => {
	const { ability, lang } = props
	let rows = []

	const createData = (language, name) => { return { language, name } }

	const getLanguageName = language => {
		let [name, setName] = useState()

		P.getLanguageByName(language)
			.then(data => { setName(filterByLang('name', data.names, lang)) })

		return name
	}

	ability.names.map(m => {
		rows.push(createData(getLanguageName(m.language.name), m.name))
	})

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Translations</Typography>
			
			<Table aria-label={`translations of ${ability.name}`}>
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
			</Table>
		</Box>
	)
}

export default AbilityContainer