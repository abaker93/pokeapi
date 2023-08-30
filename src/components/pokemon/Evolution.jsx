import React, { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Box, Chip, Link, Tooltip, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp'
import AutorenewSharpIcon from '@mui/icons-material/AutorenewSharp';
import FemaleSharpIcon from '@mui/icons-material/FemaleSharp'
import MaleSharpIcon from '@mui/icons-material/MaleSharp'
import NightlightSharpIcon from '@mui/icons-material/NightlightSharp'
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp'
import WbTwilightSharpIcon from '@mui/icons-material/WbTwilightSharp'

import { filterByLang, formatDexId, getColorFromType, getIconFromType, getIdFromURL, getNumByDex, getTMFromType } from '../../utilities/utilities'
import { electric, fairy, female, fire, ice, male, poison, psychic, text, water } from '../../utilities/colors'
import { AddSharp, FavoriteBorderSharp, FavoriteSharp } from '@mui/icons-material'
import { LevelUp, Rain, Trade } from '../../assets/Icons'

const P = new Pokedex()


const Evolution = props => {
	const { evolution, lang, pokemon, types } = props.state

	// console.log(evolution)

	if (evolution.level === 1) {
		return (
			<Box sx={{ mb: 5 }}>
				<Typography variant="body1" textAlign="center">{filterByLang('name', pokemon.names, lang)} does not evolve</Typography>
			</Box>
		)
	}

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container xs justifyContent="center">
				<Grid container xs columns={evolution.level === 2 ? 5 : 8}>
					<Grid xs={2} display="flex" alignItems="center">
						{evolution.pokemon.filter(f1 => f1.id == getIdFromURL(evolution.chain.chain.species.url)).map(m1 => (
							<Link key={m1.id} href={`${formatDexId(m1.id)}`} underline="none">
								<img
									src={m1.sprites.other["official-artwork"].front_default}
									alt={filterByLang('name', m1.names, lang)}
									style={{ width: '100%' }}
								/>
								<PokeName
									id={formatDexId(getNumByDex(m1.pokedex_numbers, 'national'), 1000)}
									name={filterByLang('name', m1.names, lang)}
									types={[ m1.types[0].type.name, m1.types[1] && m1.types[1].type.name ]}
								/>
							</Link>
						))}
					</Grid>

					{evolution.level > 1 && (
						<Grid xs={evolution.level === 2 ? 3 : 6}>
							{evolution.chain.chain.evolves_to.map(l2 => (
								<Grid key={getIdFromURL(l2.species.url)} container xs columns={evolution.level === 2 ? 3 : 6} sx={{ ':not(:first-of-type)': { pt: 3 } }}>
									<Grid xs={1} sx={{ alignSelf: 'center' }}>
										<EvoConditions color={getColorFromType(types[0])[700]} conditions={l2.evolution_details} lang={lang} />
									</Grid>
									<Grid xs={2} display="flex" alignItems="center">
										{evolution.pokemon.filter(f2 => f2.id == getIdFromURL(l2.species.url)).map(m2 => (
											<Link key={m2.id} href={`${formatDexId(m2.id)}`} underline="none">
												<img
													src={m2.sprites.other["official-artwork"].front_default}
													alt={filterByLang('name', m2.names, lang)}
													style={{ width: '100%' }}
												/>
												<PokeName
													id={formatDexId(getNumByDex(m2.pokedex_numbers, 'national'), 1000)}
													name={filterByLang('name', m2.names, lang)}
													types={[ m2.types[0].type.name, m2.types[1] && m2.types[1].type.name ]}
												/>
											</Link>
										))}
									</Grid>
									
									{evolution.level > 2 && (
										<Grid xs={3}>
											{l2.evolves_to.map(l3 => (
												<Grid key={getIdFromURL(l3.species.url)} container xs columns={3} sx={{ ':not(:first-of-type)': { pt: 3 } }}>
													<Grid xs={1} sx={{ alignSelf: 'center' }}>
														<EvoConditions color={getColorFromType(types[0])[700]} conditions={l3.evolution_details} lang={lang} />
													</Grid>
													<Grid xs={2} display="flex" alignItems="center">
														{evolution.pokemon.filter(f3 => f3.id == getIdFromURL(l3.species.url)).map(m3 => (
															<Link key={m3.id} href={`${formatDexId(m3.id)}`} underline="none">
																<img
																	src={m3.sprites.other["official-artwork"].front_default}
																	alt={filterByLang('name', m3.names, lang)}
																	style={{ width: '100%' }}
																/>
																<PokeName
																	id={formatDexId(getNumByDex(m3.pokedex_numbers, 'national'), 1000)}
																	name={filterByLang('name', m3.names, lang)}
																	types={[ m3.types[0].type.name, m3.types[1] && m3.types[1].type.name ]}
																/>
															</Link>
														))}
													</Grid>
												</Grid>
											))}
										</Grid>
									)}
								</Grid>
							))}
						</Grid>
					)}
				</Grid>
			</Grid>
		</Box>
	)
}

const PokeName = props => {
	const { id, name, types } = props

	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography variant="h6" fontWeight="medium" color="text.primary">
				<Typography variant="span" fontSize="0.85em" color={text[300]} sx={{ mr: 0.5 }}>
					<Typography variant="span" fontSize="0.7em" fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.1 }}>
						#
					</Typography>
					{id}
				</Typography>
				{name}
			</Typography>
			<Box>
				<Chip
					variant="type"
					type={types[0]}
					label={types[0]}
					size="xsmall"
				/>
				{types[1] && (
					<Chip
						variant="type"
						type={types[1]}
						label={types[1]}
						size="xsmall"
						sx={{ ml: 0.75 }}
					/>
				)}
			</Box>
		</Box>
	)
}

const EvoConditions = props => {
	const { color, conditions, lang } = props

	const [conditionsArr, setConditionsArr] = useState([])


	useEffect(() => {
		setConditionsArr([])
		
		let arr = []
		let cond = []

		conditions.map(c => {
			if (cond.length) { cond = [] }

			if (c.trigger.name === 'level-up' && !c.location && !c.min_level) {
				cond.push({
					condition:	'level',
					type:				'level',
					content:		<Tooltip followCursor title="Level Up"><LevelUp sx={{ fontSize: '1.2rem', color: fire[600] }} /></Tooltip>
				})
			}
			if (c.trigger.name === 'trade' && !c.trade_species) {
				cond.push({
					condition:	'trade',
					type:				'trade',
					content:		<Tooltip followCursor title="Trade"><Trade sx={{ fontSize: '1.2rem', color: water[400] }} /></Tooltip>
				})
			}

			if (c.min_level) {
				cond.push({
					condition:	'level',
					type:				c.min_level,
					content:		<Typography variant="caption" fontWeight="medium">LVL {c.min_level}</Typography>
				})
			}

			if (c.gender === 1) {
				cond.push({
					condition:	'gender',
					type:				'female',
					content:		<Tooltip followCursor title="Female"><FemaleSharpIcon sx={{ fontSize: '1.2rem', color: female }} /></Tooltip>
				})
			}
			if (c.gender === 2) {
				cond.push({
					condition:	'gender',
					type:				'male',
					content:		<Tooltip followCursor title="Male"><MaleSharpIcon sx={{ fontSize: '1.2em', color: male }} /></Tooltip>
				})
			}

			if (c.held_item) {
				cond.push({
					condition:	'held-item',
					type:				c.held_item.name,
					content:		<ItemImg item={c.held_item.name} lang={lang} held />
				})
			}

			if (c.item) {
				cond.push({
					condition:	'item',
					type:				c.item.name,
					content:		<ItemImg item={c.item.name} lang={lang} />
				})
			}

			if (c.known_move) {
				cond.push({
					condition:	'move',
					type:				c.known_move.name,
					content:		<Typography variant="caption">while knowing <Link href={`/move/${c.known_move.name}`} color={color} underline="hover">{c.known_move.name}</Link></Typography>
				})
			}

			if (c.known_move_type) {
				cond.push({
					condition:	'type',
					type:				c.known_move_type.name,
					content:		<Tooltip followCursor title={`after learning a ${c.known_move_type.name}-type move`}>
												{getTMFromType(c.known_move_type.name, [{ fontSize: '1.2rem' }])}
											</Tooltip>
				})
			}

			if (c.location) {
				if (c.location.name === 'eterna-forest' || c.location.name === 'pinwheel-forest' || c.location.name === 'kalos-route-20' || c.location.name === 'petalburg-woods' || c.location.name === 'lush-jungle' || c.location.name === 'the-heartwood') {
					cond.push({
						condition: 'location',
						type: 'mossy-rock',
						content: <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', columnGap: 1, fontWeight: 'medium' }}><Tooltip followCursor title="Level Up"><LevelUp sx={{ fontSize: '1.2rem', color: fire[600] }} /></Tooltip> near Mossy Rock</Typography>
					})
				}
				if (c.location.name === 'sinnoh-route-217' || c.location.name === 'twist-mountain' || c.location.name === 'frost-cavern' || c.location.name === 'shoal-cave' || c.location.name === 'mount-lanakila' || c.location.name === 'icepeak-cavern') {
					cond.push({
						condition: 'location',
						type: 'icy-rock',
						content: <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', columnGap: 1, fontWeight: 'medium' }}><Tooltip followCursor title="Level Up"><LevelUp sx={{ fontSize: '1.2rem', color: fire[600] }} /></Tooltip> near Icy Rock</Typography>
					})
				}
				if (c.location.name === 'mt-coronet' || c.location.name === 'chargestone-cave' || c.location.name === 'kalos-route-13' || c.location.name === 'new-mauville' || c.location.name === 'vast-poni-canyon' || c.location.name === 'blush-mountain' || c.location.name === 'coronet-highlands') {
					cond.push({
						condition: 'location',
						type: 'magnetic-fields',
						content: <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', columnGap: 1, fontWeight: 'medium' }}><Tooltip followCursor title="Level Up"><LevelUp sx={{ fontSize: '1.2rem', color: fire[600] }} /></Tooltip> at Magnetic Fields</Typography>
					})
				}
			}

			if (c.min_affection) {
				cond.push({
					condition:	'affection',
					type:				c.min_affection,
					content:		<Tooltip
												followCursor
												title={
													<>
														<Typography fontSize="1em">{c.min_affection} Affection</Typography>
														<Typography fontSize="0.75em">(Gen 6-7)</Typography>
													</>
												}
											>
												<Typography variant="span" whiteSpace="nowrap">{getAffectionHearts(c.min_affection)}</Typography>
											</Tooltip>
				})
			}

			if (c.min_beauty) {
				cond.push({
					condition:	'beauty',
					type:				c.min_beauty,
					content:		<Typography variant="caption">{c.min_beauty} Beauty</Typography>
				})
			}

			if (c.min_happiness) {
				cond.push({
					condition:	'happiness',
					type:				c.min_happiness,
					content:		<Tooltip followCursor title="High Friendship"><FavoriteSharp sx={{ fontSize: '1.2rem', color: psychic[300], stroke: psychic[600] }} /></Tooltip>
				})
			}

			if (c.party_species) {
				cond.push({
					condition:	'party',
					type:				c.party_species.name,
					content:		<CondPokemon color={color} pokemon={c.party_species.name} lang={lang} />
				})
			}

			if (c.party_type) {
				const typeColor = getColorFromType(c.party_type.name)
				cond.push({
					condition:	'party',
					type:				c.party_type.name,
					content:		<Tooltip followCursor title={`with ${c.party_type.name}-type in party`}>
												{getIconFromType(c.party_type.name, [{ color: typeColor[500], stroke: typeColor[700], fontSize: '1.2rem' }])}
											</Tooltip>
				})
			}

			if (c.relative_physical_stats === 1) {
				cond.push({
					condition:	'stats',
					type:				'greater',
					content:		<Typography variant="caption" whiteSpace="nowrap" fontWeight="medium">ATT &gt; DEF</Typography>
				})
			}
			if (c.relative_physical_stats === 0) {
				cond.push({
					condition:	'stats',
					type:				'equal',
					content:		<Typography variant="caption" whiteSpace="nowrap" fontWeight="medium">ATT = DEF</Typography>
				})
			}
			if (c.relative_physical_stats === -1) {
				cond.push({
					condition:	'stats',
					type:				'less',
					content:		<Typography variant="caption" whiteSpace="nowrap" fontWeight="medium">ATT &lt; DEF</Typography>
				})
			}

			if (c.time_of_day === 'night') {
				cond.push({
					condition:	'time',
					type:				'night',
					content:		<Tooltip followCursor title="at Night"><NightlightSharpIcon sx={{ fontSize: '1.2rem', color: electric[300], stroke: electric[700] }} /></Tooltip>
				})
			}
			if (c.time_of_day === 'day') {
				cond.push({
					condition:	'time',
					type:				'day',
					content:		<Tooltip followCursor title="during the Day"><WbSunnySharpIcon sx={{ fontSize: '1.2rem', color: electric[300], stroke: electric[700] }} /></Tooltip>
				})
			}
			if (c.time_of_day === 'dusk') {
				cond.push({
					condition:	'time',
					type:				'dusk',
					content:		<Tooltip followCursor title="at Dusk"><WbTwilightSharpIcon sx={{ fontSize: '1.2rem', color: electric[300], stroke: electric[700] }} /></Tooltip>
				})
			}

			if (c.trade_species) {
				cond.push({
					condition:	'trade',
					type:				c.trade_species.name,
					content:		<CondPokemon color={color} pokemon={c.trade_species.name} lang={lang} trade />
				})
			}

			if (c.turn_upside_down) {
				cond.push({
					condition:	'upsidedown',
					type:				'upsidedown',
					content:		<Tooltip followCursor title="hold device upside down"><AutorenewSharpIcon sx={{ fontSize: '1.2rem', color: poison[200], stroke: poison[500] }} /></Tooltip>
				})
			}

			if (c.needs_overworld_rain) {
				cond.push({
					condition:	'weather',
					type:				'rain',
					content:		<Tooltip followCursor title="while raining"><Rain sx={{ fontSize: '1.2rem', color: ice[300], stroke: ice[600] }} /></Tooltip>
				})
			}

			const pushUnique = () => {
				let match = false

				if (arr.length > 0) {
					arr.forEach(arr2 => {
						let count = 0
						arr2.forEach(arrObj => {
							cond.forEach(condObj => {
								if (arrObj.condition === condObj.condition && arrObj.type === condObj.type) {
									count++
								}
							})
						})
						if (count === arr2.length) { match = true }
					})
				}

				if (!match) { arr.push(cond) }
			}
			pushUnique()
		})

		setConditionsArr(arr)
	}, [])

	const styles = {
		position: 'relative',
		px: 0.5,
		py: 1,
		lineHeight: 0.8,
		textAlign: 'center',
	}

	return (
		<Box sx={styles}>
			<Box><ArrowRightAltSharpIcon /></Box>
			{conditionsArr.map((c1,i1) => (
				<React.Fragment key={i1}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						{c1.map((c2,i2) => (
							<React.Fragment key={i2}>
								{c2.content}
								{i2 < c1.length - 1 && (
									<AddSharp sx={{ color: text[200], fontSize: '1.2em' }} />
								)}
							</React.Fragment>
						))}
					</Box>
					{i1 < conditionsArr.length - 1 && (
						<Typography variant="caption" sx={{ py: 1, lineHeight: 1, display: 'block', fontStyle: 'italic', color: text[200] }}>&mdash; or &mdash;</Typography>
					)}
				</React.Fragment>
			))}
		</Box>
	)
}

const ItemImg = props => {
	const { held, item, lang } = props
	const [condItem, setCondItem] = useState()
	const [name, setName] = useState('')
  
	useEffect(() => {
		P.getItemByName(item)
			.then(data => setCondItem(data))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		condItem && setName(filterByLang('name', condItem.names, lang))
	}, [condItem])

	if (condItem && name) {
		return (
			<Tooltip followCursor title={held ? `while holding ${name}` : `use ${name}`}>
				<Link href={`/item/${item}`}>
					<img height="24px" src={condItem.sprites.default} alt={condItem.name} />
				</Link>
			</Tooltip>
		)
	}
}

const CondPokemon = props => {
	const { color, pokemon, lang, trade } = props
	const [condPokemon, setCondPokemon] = useState()
	const [name, setName] = useState()

	useEffect(() => {
		P.getPokemonByName(pokemon)
			.then(data => {
				P.getPokemonSpeciesByName(data.species.name)
					.then(data => setCondPokemon(data))
			})
	}, [])

	useEffect(() => {
		condPokemon && setName(filterByLang('name', condPokemon.names, lang))
	}, [condPokemon])

	if (condPokemon && name) {
		if (!trade) {
			return (
				<Typography variant="caption" fontWeight="medium" sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
					<Link href={`/pokemon/${formatDexId(condPokemon.id)}`} underline="hover" color={color}>{name}</Link> in party
				</Typography>
			)
		} else {
			return (
				<Typography variant="caption" fontWeight="medium" sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
					<Tooltip followCursor title="Trade"><Trade sx={{ fontSize: '2em' }} /></Tooltip> with <Link href={`/pokemon/${formatDexId(condPokemon.id)}`} underline="hover" color={color}>{name}</Link>
				</Typography>
			)
		}
	}
}

const getAffectionHearts = (a) => {
	let hearts = []
	for (let i = 0; i < a; i++) { hearts.push(<FavoriteBorderSharp key={i} sx={{ fontSize: '1.2rem', color: fairy[300], stroke: fairy[500] }} />) }
	return hearts
}

export default Evolution