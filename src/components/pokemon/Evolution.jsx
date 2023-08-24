import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2'
import { Box, Chip, Link, Tooltip, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { filterByLang, formatDexId, getColorFromType, getIdFromURL, getNumByDex } from "../../utilities/utilities"
import { text } from "../../utilities/colors";
import FemaleSharpIcon from '@mui/icons-material/FemaleSharp';
import MaleSharpIcon from '@mui/icons-material/MaleSharp';
import NightlightSharpIcon from '@mui/icons-material/NightlightSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import WbTwilightSharpIcon from '@mui/icons-material/WbTwilightSharp';

const P = new Pokedex()


const Evolution = props => {
	const { evolution, lang, pokemon, types } = props.state

	console.log(evolution)

	if (evolution.level === 1) {
		return (
			<Box sx={{ mb: 5 }}>
				<Typography variant="body1" textAlign="center">{filterByLang('name', pokemon.names, lang)} does not evolve</Typography>
			</Box>
		)
	}

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container xs>
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

	const styles = {
		position: 'relative',
		px: 0.5,
		py: 1,
		lineHeight: 0.8,
		textAlign: 'center',
		
		'::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 4,
			height: 2,
			width: 'calc(100% - 12px)',
			backgroundColor: text[200],
		},

		'::after': {
			content: '""',
			position: 'absolute',
			top: '-3px',
			right: 4,
			borderTop: '4px solid transparent',
			borderBottom: '4px solid transparent',
			borderLeft: `6px solid ${text[200]}`,
		}
	}

	return (
		<Box sx={styles}>
			{conditions.map((c,i) => (
				<React.Fragment key={i}>
					<Typography
						variant="caption"
						sx={{
							lineHeight: 1,
							'&>.trigger:not(:last-of-type)::after': { content: '" "' },
							'&>*:not(.trigger):not(:last-of-type)::after': { content: '", "' },
						}}
					>
						{(c.trigger.name === 'level-up' && !c.min_level) && ( <Typography variant="caption" className="trigger">Level up</Typography> )}
						{c.trigger.name === 'trade' && ( <Typography variant="caption" className="trigger">Trade</Typography> )}

						{c.time_of_day === 'day' && (
							<Typography variant="caption" className="trigger">
								<Tooltip followCursor title="Daytime">
									<WbSunnySharpIcon sx={{ fontSize: '1.1em', mb: '-3px', color: text[400] }} />
								</Tooltip>
							</Typography>
						)}
						{c.time_of_day === 'night' && (
							<Typography variant="caption" className="trigger">
								<Tooltip followCursor title="Nighttime">
									<NightlightSharpIcon sx={{ fontSize: '1em', mb: '-2px', color: text[400] }} />
								</Tooltip>
							</Typography>
						)}
						{c.time_of_day === 'dusk' && (
							<Typography variant="caption" className="trigger">
								<Tooltip followCursor title="Dusk">
									<WbTwilightSharpIcon sx={{ fontSize: '1.1em', mb: '-3px', color: text[400] }} />
								</Tooltip>
							</Typography>
						)}

						{c.gender === 1 && ( <Typography variant="caption"><FemaleSharpIcon sx={{ fontSize: '1.1em', mb: '-3px', color: text[400] }} /></Typography> )}
						{c.gender === 2 && ( <Typography variant="caption"><MaleSharpIcon sx={{ fontSize: '1.1em', mb: '-3px', color: text[400] }} /></Typography> )}

						{c.item && ( <Typography variant="caption"><Link href={`/item/${c.item.name}`}>{getItem(c.item.name, lang)}</Link></Typography> )}

						{c.min_level && ( <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>LVL {c.min_level}</Typography> )}

						{c.trade_species && ( <Typography variant="caption">for <Link href={`/pokemon/${c.trade_species.name}`} color={color} underline="hover">{c.trade_species.name}</Link></Typography> )}
						{c.held_item && ( <Typography variant="caption">holding <Link href={`/item/${c.held_item.name}`}>{getItem(c.held_item.name, lang)}</Link></Typography> )}

						{c.known_move && ( <Typography variant="caption">while knowing <Link href={`/move/${c.known_move.name}`} color={color} underline="hover">{c.known_move.name}</Link></Typography> )}
						{c.known_move_type && ( <Typography variant="caption">after {c.known_move_type.name}-type move learned</Typography> )}

						{c.min_affection && ( <Typography variant="caption">with {getAffectionHearts(c.min_affection)} affection</Typography> )}
						{c.min_beauty && ( <Typography variant="caption">with {getAffectionHearts(c.min_beauty)} beauty</Typography> )}
						{c.min_happiness && ( <Typography variant="caption">with high friendship</Typography> )}

						{c.location && ( <Typography variant="caption">at <Link href={`/location/${c.location.name}`} color={color} underline="hover">{getLocationName(c.location.name, lang)}</Link></Typography> )}

						{c.needs_overworld_rain && ( <Typography variant="caption">during rain</Typography> )}

						{c.party_species && ( <Typography variant="caption">with <Link href={`/pokemon/${c.party_species.name}`} color={color} underline="hover">{c.party_species.name}</Link> in party</Typography> )}
						{c.party_type && ( <Typography variant="caption">with {c.party_type.name}-type Pokémon in party</Typography> )}
						
						{c.relative_physical_stats === 1 && ( <Typography variant="caption">Att &gt; Def</Typography> )}
						{c.relative_physical_stats === -1 && ( <Typography variant="caption">Att &lt; Def</Typography> )}
						{c.relative_physical_stats === 0 && ( <Typography variant="caption">Att = Def</Typography> )}

					</Typography>
					{i < conditions.length - 1 && (
						<Typography variant="caption" sx={{ lineHeight: 1, display: 'block', fontStyle: 'italic', color: text[200] }}>&mdash; or &mdash;</Typography>
					)}
				</React.Fragment>
			))}
		</Box>
	)
}

const getItem = (i, lang) => {
	const [item, setItem] = useState()
	const [name, setName] = useState('')
  
	useEffect(() => {
		P.getItemByName(i)
			.then(data => setItem(data))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		item && setName(filterByLang('name', item.names, lang))
	}, [item])

	// console.log(item)

	if (item && name) {
		return (
			<Tooltip followCursor title={name}>
				<img src={item.sprites.default} alt={item.name} />
			</Tooltip>
		)
	}
}

const getLocationName = (l, lang) => {
	const [location, setLocation] = useState()
	const [name, setName] = useState('')

	useEffect(() => {
		P.getLocationByName(l)
			.then(data => setLocation(data))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		location && setName(filterByLang('name', location.names, lang))
	}, [location])

	return name
}

const getAffectionHearts = (a) => {
	let hearts = ''
	for (let i = 0; i < a; i++) { hearts += '♥' }
	return hearts
}

export default Evolution