import { useEffect, useState } from 'react'
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import PokemonTab from '../../utilities/components/PokemonTab'
import { gameDataByPokemon } from '../../utilities/games'
import { formatDexId, getColorFromGame, getColorFromType } from '../../utilities/utilities'
import PokemonTabs from '../../utilities/components/PokemonTabs'


const FlavorText = props => {
	const { types } = props.state
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
		1:	data.gen_i.version_group.red_blue.games.red.text
				|| data.gen_i.version_group.red_blue.games.blue.text
				|| data.gen_i.version_group.yellow.games.yellow.text
					? true : false,
		2:	data.gen_ii.version_group.gold_silver.games.gold.text
				|| data.gen_ii.version_group.gold_silver.games.silver.text
				|| data.gen_ii.version_group.crystal.games.crystal.text
					? true : false,
		3:	data.gen_iii.version_group.ruby_sapphire.games.ruby.text
				|| data.gen_iii.version_group.ruby_sapphire.games.sapphire.text
				|| data.gen_iii.version_group.emerald.games.emerald.text
				|| data.gen_iii.version_group.firered_leafgreen.games.firered.text
				|| data.gen_iii.version_group.firered_leafgreen.games.leafgreen.text
					? true : false,
		4:	data.gen_iv.version_group.diamond_pearl.games.diamond.text
				|| data.gen_iv.version_group.diamond_pearl.games.pearl.text
				|| data.gen_iv.version_group.platinum.games.platinum.text
				|| data.gen_iv.version_group.heartgold_soulsilver.games.heartgold.text
				|| data.gen_iv.version_group.heartgold_soulsilver.games.soulsilver.text
					? true : false,
		5:	data.gen_v.version_group.black_white.games.black.text
				|| data.gen_v.version_group.black_white.games.white.text
				|| data.gen_v.version_group.black_2_white_2.games.black_2.text
				|| data.gen_v.version_group.black_2_white_2.games.white_2.text
					? true : false,
		6:	data.gen_vi.version_group.x_y.games.x.text
				|| data.gen_vi.version_group.x_y.games.y.text
				|| data.gen_vi.version_group.omega_ruby_alpha_sapphire.games.omega_ruby.text
				|| data.gen_vi.version_group.omega_ruby_alpha_sapphire.games.alpha_sapphire.text
					? true : false,
		7:	data.gen_vii.version_group.sun_moon.games.sun.text
				|| data.gen_vii.version_group.sun_moon.games.moon.text
				|| data.gen_vii.version_group.ultra_sun_ultra_moon.games.ultra_sun.text
				|| data.gen_vii.version_group.ultra_sun_ultra_moon.games.ultra_moon.text
				|| data.gen_vii.version_group.lets_go_pikachu_lets_go_eevee.games.lets_go_pikachu.text
				|| data.gen_vii.version_group.lets_go_pikachu_lets_go_eevee.games.lets_go_eevee.text
					? true : false,
		8:	data.gen_viii.version_group.sword_shield.games.sword.text
				|| data.gen_viii.version_group.sword_shield.games.shield.text
				|| data.gen_viii.version_group.brilliant_diamond_shining_pearl.games.brilliant_diamond.text
				|| data.gen_viii.version_group.brilliant_diamond_shining_pearl.games.shining_pearl.text
				|| data.gen_viii.version_group.legends_arceus.games.legends_arceus.text
					? true : false,
		9:	data.gen_ix.version_group.scarlet_violet.games.scarlet.text
				|| data.gen_ix.version_group.scarlet_violet.games.violet.text
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
				<Typography variant="h2">Pokédex entries</Typography>
			</Box>
			<Box>
				<PokemonTabs
					value={genVal.gen}
					onChange={(e, val) => setGenVal(prev => ({ ...prev, gen: val }))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="flavor text sorted by generation and game"
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
								id={`flavortext_tab_${data[gen].id}`}
								aria-controls={`flavortext_panel_${data[gen].id}`}
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
							id={`flavortext_panel_${data[gen].id}`}
							aria-labelledby={`flavortext_tab_${data[gen].id}`}
							sx={{ mt: 3 }}
						>
							{genVal.gen === data[gen].id && (
								<Box>
									{Object.keys(data[gen].version_group).map(group => (
										Object.keys(data[gen].version_group[group].games).map(game => (
											data[gen].version_group[group].games[game].text && (
												<Grid key={data[gen].version_group[group].games[game].id} container columns={1} sx={{ mb: 3 }}>
													<Grid container xs={1}>
														<Typography variant="h4" color={getColorFromGame(data[gen].version_group[group].games[game].name)}>
															{data[gen].version_group[group].games[game].label}
														</Typography>
													</Grid>
													
													{Object.keys(data[gen].version_group[group].games[game].pokedexes).map(dex => (
														data[gen].version_group[group].games[game].pokedexes[dex].num && (
															<Grid key={data[gen].version_group[group].games[game].pokedexes[dex].id} container xs={1}>
																<Grid xs sx={{ pl: 2 }}>
																	<Typography variant="span" fontWeight="medium" color={getColorFromGame(data[gen].version_group[group].games[game].name)} sx={{ opacity: 0.7 }}>
																		{data[gen].version_group[group].games[game].pokedexes[dex].label}
																	</Typography>
																</Grid>
																<Grid xs="auto">
																	<Typography key={data[gen].version_group[group].games[game].pokedexes[dex].id} component="span" fontWeight="medium" sx={{ opacity: 0.7 }}>
																		<Typography component="span" fontSize={12} fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.25 }}>
																			No.
																		</Typography>
																		{formatDexId(data[gen].version_group[group].games[game].pokedexes[dex].num, 999)}
																	</Typography>
																</Grid>
															</Grid>
														)
													))}
	
													<Grid container xs={1}>
														<Typography>{data[gen].version_group[group].games[game].text.replace(/\s/g, " ")}</Typography>
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

export default FlavorText