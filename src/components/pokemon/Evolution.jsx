import { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2'
import { Box, Chip, Link, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { filterByLang, formatDexId, getColorFromType, getIdFromURL, getNumByDex } from "../../utilities/utilities"
import { text } from "../../utilities/colors";

const P = new Pokedex()


const Evolution = props => {
	const { evolution, lang, pokemon, types } = props.state

	// console.log(evolution)

	if (evolution.chain.chain.evolves_to.length < 1) {
		return (
			<Box sx={{ mb: 5 }}>
				<Typography variant="body1" textAlign="center">{filterByLang('name', pokemon.names, lang)} does not evolve</Typography>
			</Box>
		)
	}

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container xs>
				<Grid container xs columns={8}>
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

					{evolution.chain.chain.evolves_to.length > 0 && (
						<Grid xs={6}>
							{evolution.chain.chain.evolves_to.map(l2 => (
								<Grid key={getIdFromURL(l2.species.url)} container xs columns={6} sx={{ ':not(:first-of-type)': { pt: 3 } }}>
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
									
									{l2.evolves_to.length > 0 && (
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
				<Typography key={i} variant="caption" sx={{ lineHeight: 1 }}>
					{c.trigger.name == 'level-up'
						? `LVL ${c.min_level}`
						: c.trigger.name == 'trade'
							? c.held_item
								? <>Trade holding <Link href={`/item/${c.held_item.name}`} color={color} underline="hover">{getItemName(c.held_item.name, lang)}</Link></>
								: `Trade`
							: c.trigger.name == 'use-item'
								? <Link href={`/item/${c.item.name}`} color={color} underline="hover">{getItemName(c.item.name, lang)}</Link>
								: `${c.trigger.name}`
					}
				</Typography>
			))}
		</Box>
	)
}

const getItemName = (i, lang) => {
	const [item, setItem] = useState()
	const [name, setName] = useState()

	useEffect(() => {
		P.getItemByName(i)
			.then(data => setItem(data))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		item && setName(filterByLang('name', item.names, lang))
	}, [item])

	return name
}

export default Evolution