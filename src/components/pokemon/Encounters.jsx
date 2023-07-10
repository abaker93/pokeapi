import { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { gameDataByPokemon } from "../../utilities/games"
import { filterByLang, getColorFromGame } from '../../utilities/utilities'

const P = new Pokedex()


const Encounters = props => {
	const { lang, pokemon } = props.state
	const data = gameDataByPokemon(props)

	const [genVal, setGenVal] = useState({
		gen:			1,
		gen_i:		false,
		gen_ii:		false,
		gen_iii:	false,
		gen_iv:		false,
		gen_v:		false,
		gen_vi:		false,
		gen_vii:	false,
		gen_viii:	false,
		gen_ix:		false,
	})

	const g = {
		1:	data.gen_i.games.red.encounters.length > 0
				|| data.gen_i.games.blue.encounters.length > 0
				|| data.gen_i.games.yellow.encounters.length > 0
					? true : false,
		2:	data.gen_ii.games.gold.encounters.length > 0
				|| data.gen_ii.games.silver.encounters.length > 0
				|| data.gen_ii.games.crystal.encounters.length > 0
					? true : false,
		3:	data.gen_iii.games.ruby.encounters.length > 0
				|| data.gen_iii.games.sapphire.encounters.length > 0
				|| data.gen_iii.games.emerald.encounters.length > 0
				|| data.gen_iii.games.firered.encounters.length > 0
				|| data.gen_iii.games.leafgreen.encounters.length > 0
					? true : false,
		4:	data.gen_iv.games.diamond.encounters.length > 0
				|| data.gen_iv.games.pearl.encounters.length > 0
				|| data.gen_iv.games.platinum.encounters.length > 0
				|| data.gen_iv.games.heartgold.encounters.length > 0
				|| data.gen_iv.games.soulsilver.encounters.length > 0
					? true : false,
		5:	data.gen_v.games.black.encounters.length > 0
				|| data.gen_v.games.white.encounters.length > 0
				|| data.gen_v.games.black_2.encounters.length > 0
				|| data.gen_v.games.white_2.encounters.length > 0
					? true : false,
		6:	data.gen_vi.games.x.encounters.length > 0
				|| data.gen_vi.games.y.encounters.length > 0
				|| data.gen_vi.games.omega_ruby.encounters.length > 0
				|| data.gen_vi.games.alpha_sapphire.encounters.length > 0
					? true : false,
		7:	data.gen_vii.games.sun.encounters.length > 0
				|| data.gen_vii.games.moon.encounters.length > 0
				|| data.gen_vii.games.ultra_sun.encounters.length > 0
				|| data.gen_vii.games.ultra_moon.encounters.length > 0
				|| data.gen_vii.games.lets_go_pikachu.encounters.length > 0
				|| data.gen_vii.games.lets_go_eevee.encounters.length > 0
					? true : false,
		8:	data.gen_viii.games.sword.encounters.length > 0
				|| data.gen_viii.games.shield.encounters.length > 0
				|| data.gen_viii.games.brilliant_diamond.encounters.length > 0
				|| data.gen_viii.games.shining_pearl.encounters.length > 0
				|| data.gen_viii.games.legends_arceus.encounters.length > 0
					? true : false,
		9:	data.gen_ix.games.scarlet.encounters.length > 0
				|| data.gen_ix.games.violet.encounters.length > 0
					? true : false,
	}

	const getGenVal = () => {
		if (g[1]) { setGenVal(prev => ({ ...prev, gen: 1, })) }
		else if (g[2]) { setGenVal(prev => ({ ...prev, gen: 2, })) }
		else if (g[3]) { setGenVal(prev => ({ ...prev, gen: 3, })) }
		else if (g[4]) { setGenVal(prev => ({ ...prev, gen: 4, })) }
		else if (g[5]) { setGenVal(prev => ({ ...prev, gen: 5, })) }
		else if (g[6]) { setGenVal(prev => ({ ...prev, gen: 6, })) } 
		else if (g[7]) { setGenVal(prev => ({ ...prev, gen: 7, })) }
		else if (g[8]) { setGenVal(prev => ({ ...prev, gen: 8, })) }
		else if (g[9]) { setGenVal(prev => ({ ...prev, gen: 9, })) }

		if (g[1]) { setGenVal(prev => ({ ...prev, gen_i: true })) }
		if (g[2]) { setGenVal(prev => ({ ...prev, gen_ii: true })) }
		if (g[3]) { setGenVal(prev => ({ ...prev, gen_iii: true })) }
		if (g[4]) { setGenVal(prev => ({ ...prev, gen_iv: true })) }
		if (g[5]) { setGenVal(prev => ({ ...prev, gen_v: true })) }
		if (g[6]) { setGenVal(prev => ({ ...prev, gen_vi: true })) }
		if (g[7]) { setGenVal(prev => ({ ...prev, gen_vii: true })) }
		if (g[8]) { setGenVal(prev => ({ ...prev, gen_viii: true })) }
		if (g[9]) { setGenVal(prev => ({ ...prev, gen_ix: true })) }
	}

	useEffect(() => {
		getGenVal()
	}, [props])

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Where to Find {filterByLang('name', pokemon.names, lang)}</Typography>
			</Box>
			<Box>
				<Tabs
					value={genVal.gen}
					onChange={(e, val) => setGenVal(prev => ({ ...prev, gen: val }))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="encounters sorted by generation and game"
				>

					{Object.keys(data).map(gen => (
						genVal[data[gen].name] && (
							<Tab
								key={data[gen].id}
								label={data[gen].label}
								value={data[gen].id}
								id={`encounters_tab_${data[gen].id}`}
								aria-controls={`encounters_panel_${data[gen].id}`}
							/>
						)
					))}

				</Tabs>

				{Object.keys(data).map(gen => (
					genVal[data[gen].name] && (
						<Container
							key={data[gen].id}
							role="tabpanel"
							hidden={genVal.gen !== data[gen].id}
							id={`encounters_panel_${data[gen].id}`}
							aria-labelledby={`encounters_tab_${data[gen].id}`}
							sx={{ mt: 3 }}
						>
							{genVal.gen === data[gen].id && (
								<Box>
									{Object.keys(data[gen].games).map(game => (
										data[gen].games[game].encounters.length > 0 && (
											<Grid key={data[gen].games[game].id} container columns={1} sx={{ mb: 3 }}>
												<Grid container xs={1}>
													<Grid xs>
														<Typography variant="h4" color={getColorFromGame(data[gen].games[game].name)}>
															{data[gen].games[game].label}
														</Typography>
													</Grid>
												</Grid>
												<Grid container xs={1}>
													{data[gen].games[game].encounters.map((m, i) => (
														<Typography key={m.location_area.name} variant="span">
															<LocationArea lang={lang} location={m.location_area.name} />
															{data[gen].games[game].encounters.length - 1 !== i && <Typography variant="span" sx={{ mr: 0.5 }}>,</Typography>}
														</Typography>
													))}
												</Grid>
											</Grid>
										)
									))}
								</Box>
							)}
						</Container>
					)
				))}
			</Box>
		</Box>
	)
}

const LocationArea = props => {
	const { lang, location } = props
	const [name, setName] = useState('')

	useEffect(() => {
		P.getLocationAreaByName(location)
			.then(data => {
				setName(filterByLang('name', data.names, lang))
			})

	}, [location])

	return (
		<>
			{name}
		</>
	)
}

export default Encounters