import { useEffect, useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { gameDataByPokemon } from '../../utilities/games';
import { formatDexId } from '../../utilities/utilities';

const FlavorText = props => {
	const { pokemon } = props.state
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
		1:	data.gen_i.games.red.text || data.gen_i.games.blue.text || data.gen_i.games.yellow.text ? true : false,
		2:	data.gen_ii.games.gold.text || data.gen_ii.games.silver.text || data.gen_ii.games.crystal.text ? true : false,
		3:	data.gen_iii.games.ruby.text || data.gen_iii.games.sapphire.text || data.gen_iii.games.emerald.text || data.gen_iii.games.firered.text || data.gen_iii.games.leafgreen.text ? true : false,
		4:	data.gen_iv.games.diamond.text || data.gen_iv.games.pearl.text || data.gen_iv.games.platinum.text || data.gen_iv.games.heartgold.text || data.gen_iv.games.soulsilver.text ? true : false,
		5:	data.gen_v.games.black.text || data.gen_v.games.white.text || data.gen_v.games.black_2.text || data.gen_v.games.white_2.text ? true : false,
		6:	data.gen_vi.games.x.text || data.gen_vi.games.y.text || data.gen_vi.games.omega_ruby.text || data.gen_vi.games.alpha_sapphire.text ? true : false,
		7:	data.gen_vii.games.sun.text || data.gen_vii.games.moon.text || data.gen_vii.games.ultra_sun.text || data.gen_vii.games.ultra_moon.text || data.gen_vii.games.lets_go_pikachu.text || data.gen_vii.games.lets_go_eevee.text ? true : false,
		8:	data.gen_viii.games.sword.text || data.gen_viii.games.shield.text || data.gen_ix.games.brilliant_diamond.text || data.gen_ix.games.shining_pearl.text || data.gen_ix.games.legends_arceus.text ? true : false,
		9:	data.gen_ix.games.scarlet.text || data.gen_ix.games.violet.text ? true : false,
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
	}, [pokemon])

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Pokédex entries</Typography>
			</Box>
			<Box>
				<Tabs
					value={genVal.gen}
					onChange={(e, val) => setGenVal(prev => ({ ...prev, gen: val }))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="flavor text sorted by generation and game"
				>

					{Object.keys(data).map(gen => (
						genVal[data[gen].name] && (
							<Tab
								key={data[gen].id}
								label={data[gen].label}
								value={data[gen].id}
								id={`flavortext_tab_${data[gen].id}`}
								aria-controls={`flavortext_panel_${data[gen].id}`}
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
							id={`flavortext_panel_${data[gen].id}`}
							aria-labelledby={`flavortext_tab_${data[gen].id}`}
							sx={{ mt: 3 }}
						>
							{genVal.gen === data[gen].id && (
								<Box>
									{Object.keys(data[gen].games).map(game => (
										data[gen].games[game].text && (
											<Grid key={data[gen].games[game].id} container columns={1} sx={{ mb: 3 }}>
												<Grid container xs>
													<Grid xs>
														<Typography variant="h4">
															{data[gen].games[game].label}
															{Object.keys(data[gen].games[game].pokedexes).map(dex => (
																data[gen].games[game].pokedexes[dex].num && (
																	Object.keys(data[gen].games[game].pokedexes).length > 1 && (
																		<Typography component="span" fontSize={16} fontWeight="medium" sx={{ ml: 1, opacity: 0.7 }}>
																			{data[gen].games[game].pokedexes[dex].label}
																		</Typography>
																	)
																)
															))}
														</Typography>
													</Grid>
													<Grid xs="auto">
														{Object.keys(data[gen].games[game].pokedexes).map(dex => (
															data[gen].games[game].pokedexes[dex].num && (
																<Typography key={data[gen].games[game].pokedexes[dex].id} component="span" fontWeight="medium" sx={{ opacity: 0.7 }}>
																	<Typography component="span" fontSize={12} fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.25 }}>
																		No.
																	</Typography>
																	{formatDexId(data[gen].games[game].pokedexes[dex].num)}
																</Typography>
															)
														))}
													</Grid>
												</Grid>
												<Grid>
													<Typography>{data[gen].games[game].text.replace(/\s/g, " ")}</Typography>
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

export default FlavorText