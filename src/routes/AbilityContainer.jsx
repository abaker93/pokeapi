import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'

import { filterByLang, getColorFromGame } from '../utilities/utilities'
import { game_blue, game_red, game_yellow, gray, text } from '../utilities/colors'
import { Description } from '@mui/icons-material'

const P = new Pokedex()


const AbilityContainer = props => {
	const ability = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [abilityData, setAbilityData] = useState()

	const getAbilityData = ability => {
		P.getAbilityByName(ability)
			.then(data => {
				setAbilityData(data)
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!abilityData) { getAbilityData(ability) }
		else { setLoading(false) }
	}, [ability, abilityData])
	
	// console.log(abilityData)


	if (loading) {
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

				<Pokemon data={abilityData} lang={lang} />
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
			
			<Container>
				<Typography variant="h1" textAlign="center">{name}</Typography>
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

const Pokemon = props => {
	const { data, lang } = props

	const abilities = data.pokemon.filter(f => f.is_hidden === false)
	const hiddenAbilities = data.pokemon.filter(f => f.is_hidden === true)

	const [abilityPokemon, setAbilityPokemon] = useState([])
	const [hiddenAbilityPokemon, setHiddenAbilityPokemon] = useState([])

	const getPokemon = (pokemon, type) => {
		pokemon.map(m => {
			P.getPokemonByName(m.pokemon.name)
				.then(poke => {

					P.getPokemonSpeciesByName(poke.species.name)
						.then(species => {

							P.getPokemonFormByName(poke.forms[0].name)
								.then(form => {
									// console.log(poke, species, form)

									type === 'abilities' && setAbilityPokemon(prev => [...prev, {
										abilities: poke.abilities,
										id: poke.id,
										is_default: poke.is_default,
										name: poke.name,
										sprites: poke.sprites,
										species_id: species.id,
										species_name: species.names,
										names: species.names,
										pokedex_numbers: species.pokedex_numbers,
										form_name: form.name,
										form_names: form.names,
										form_order: form.form_order,
										form_id: form.id,
										form_sprites: form.sprites,
									}])

									type === 'hidden' && setHiddenAbilityPokemon(prev => [...prev, {
										abilities: poke.abilities,
										id: poke.id,
										is_default: poke.is_default,
										name: poke.name,
										sprites: poke.sprites,
										species_id: species.id,
										species_name: species.names,
										names: species.names,
										pokedex_numbers: species.pokedex_numbers,
										form_name: form.name,
										form_names: form.names,
										form_order: form.form_order,
										form_id: form.id,
										form_sprites: form.sprites,
									}])
								})

						})

					// type === 'abilities' && setAbilityPokemon(prev => [...prev, poke])
					// type === 'hidden' && setHiddenAbilityPokemon(prev => [...prev, poke])

				})
				.catch(console.error)
		})
	}

	useEffect(() => {
		setAbilityPokemon([])
		setHiddenAbilityPokemon([])
		getPokemon(abilities, 'abilities')
		getPokemon(hiddenAbilities, 'hidden')
	}, [data])

	console.log(abilityPokemon, hiddenAbilityPokemon)

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Pokémon with {filterByLang('name', data.names, lang)}</Typography>
			<Table aria-label={`pokémon with ${filterByLang('name', data.names, lang)}`}>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>2nd Ability</TableCell>
						<TableCell>Hidden Ability</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{abilities.map(m => (
						<TableRow key={m.pokemon.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell>
								#
							</TableCell>
							<TableCell>
								{m.pokemon.name}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	)
}

export default AbilityContainer