import { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'

import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import PokemonTabs from '../../utilities/components/PokemonTabs'
import PokemonTab from '../../utilities/components/PokemonTab'

import { gameDataByPokemon } from "../../utilities/games"
import { filterByLang, getColorFromGame, getColorFromType } from '../../utilities/utilities'

const P = new Pokedex()


const Encounters = props => {
	const { lang, pokemon, types } = props.state
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
		1:	data.gen_i.version_group.red_blue.games.red.encounters.length > 0
				|| data.gen_i.version_group.red_blue.games.blue.encounters.length > 0
				|| data.gen_i.version_group.yellow.games.yellow.encounters.length > 0
					? true : false,
		2:	data.gen_ii.version_group.gold_silver.games.gold.encounters.length > 0
				|| data.gen_ii.version_group.gold_silver.games.silver.encounters.length > 0
				|| data.gen_ii.version_group.crystal.games.crystal.encounters.length > 0
					? true : false,
		3:	data.gen_iii.version_group.ruby_sapphire.games.ruby.encounters.length > 0
				|| data.gen_iii.version_group.ruby_sapphire.games.sapphire.encounters.length > 0
				|| data.gen_iii.version_group.emerald.games.emerald.encounters.length > 0
				|| data.gen_iii.version_group.firered_leafgreen.games.firered.encounters.length > 0
				|| data.gen_iii.version_group.firered_leafgreen.games.leafgreen.encounters.length > 0
					? true : false,
		4:	data.gen_iv.version_group.diamond_pearl.games.diamond.encounters.length > 0
				|| data.gen_iv.version_group.diamond_pearl.games.pearl.encounters.length > 0
				|| data.gen_iv.version_group.platinum.games.platinum.encounters.length > 0
				|| data.gen_iv.version_group.heartgold_soulsilver.games.heartgold.encounters.length > 0
				|| data.gen_iv.version_group.heartgold_soulsilver.games.soulsilver.encounters.length > 0
					? true : false,
		5:	data.gen_v.version_group.black_white.games.black.encounters.length > 0
				|| data.gen_v.version_group.black_white.games.white.encounters.length > 0
				|| data.gen_v.version_group.black_2_white_2.games.black_2.encounters.length > 0
				|| data.gen_v.version_group.black_2_white_2.games.white_2.encounters.length > 0
					? true : false,
		6:	data.gen_vi.version_group.x_y.games.x.encounters.length > 0
				|| data.gen_vi.version_group.x_y.games.y.encounters.length > 0
				|| data.gen_vi.version_group.omega_ruby_alpha_sapphire.games.omega_ruby.encounters.length > 0
				|| data.gen_vi.version_group.omega_ruby_alpha_sapphire.games.alpha_sapphire.encounters.length > 0
					? true : false,
		7:	data.gen_vii.version_group.sun_moon.games.sun.encounters.length > 0
				|| data.gen_vii.version_group.sun_moon.games.moon.encounters.length > 0
				|| data.gen_vii.version_group.ultra_sun_ultra_moon.games.ultra_sun.encounters.length > 0
				|| data.gen_vii.version_group.ultra_sun_ultra_moon.games.ultra_moon.encounters.length > 0
				|| data.gen_vii.version_group.lets_go_pikachu_lets_go_eevee.games.lets_go_pikachu.encounters.length > 0
				|| data.gen_vii.version_group.lets_go_pikachu_lets_go_eevee.games.lets_go_eevee.encounters.length > 0
					? true : false,
		8:	data.gen_viii.version_group.sword_shield.games.sword.encounters.length > 0
				|| data.gen_viii.version_group.sword_shield.games.shield.encounters.length > 0
				|| data.gen_viii.version_group.brilliant_diamond_shining_pearl.games.brilliant_diamond.encounters.length > 0
				|| data.gen_viii.version_group.brilliant_diamond_shining_pearl.games.shining_pearl.encounters.length > 0
				|| data.gen_viii.version_group.legends_arceus.games.legends_arceus.encounters.length > 0
					? true : false,
		9:	data.gen_ix.version_group.scarlet_violet.games.scarlet.encounters.length > 0
				|| data.gen_ix.version_group.scarlet_violet.games.violet.encounters.length > 0
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
				<Typography variant="h2">Where to find {filterByLang('name', pokemon.names, lang)}</Typography>
			</Box>
			<Box>
				<PokemonTabs
					value={genVal.gen}
					onChange={(e, val) => setGenVal(prev => ({ ...prev, gen: val }))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="encounters sorted by generation and game"
					TabIndicatorProps={{ style: { display: 'none' } }}
					color={getColorFromType(types[0])}
				>

					{Object.keys(data).map(gen => (
						genVal[data[gen].name] && (
							<PokemonTab
								key={data[gen].id}
								color={getColorFromType(types[0])}
								label={data[gen].label}
								value={data[gen].id}
								id={`encounters_tab_${data[gen].id}`}
								aria-controls={`encounters_panel_${data[gen].id}`}
							/>
						)
					))}

				</PokemonTabs>

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
									{Object.keys(data[gen].version_group).map(group => (
										Object.keys(data[gen].version_group[group].games).map(game => (
											data[gen].version_group[group].games[game].encounters.length > 0 && (
												<Grid key={data[gen].version_group[group].games[game].id} container columns={1} sx={{ mb: 3 }}>
													<Grid container xs={1}>
														<Grid xs>
															<Typography variant="h4" color={getColorFromGame(data[gen].version_group[group].games[game].name)}>
																{data[gen].version_group[group].games[game].label}
															</Typography>
														</Grid>
													</Grid>
													<Grid container xs={1}>
														{data[gen].version_group[group].games[game].encounters.map((m, i) => (
															<Typography key={m.location_area.name} variant="span">
																<LocationArea lang={lang} location={m.location_area.name} />
																{data[gen].version_group[group].games[game].encounters.length - 1 !== i && <Typography variant="span" sx={{ mr: 0.5 }}>,</Typography>}
															</Typography>
														))}
													</Grid>
												</Grid>
											)
										))
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

	return name
}

export default Encounters