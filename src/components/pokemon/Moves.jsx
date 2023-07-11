import { useEffect, useState } from "react"
import Pokedex from 'pokedex-promise-v2'

import { Box, Chip, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography, alpha } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { gameDataByPokemon } from "../../utilities/games"
import { filterByLang, getColorFromType } from '../../utilities/utilities'
import { gray } from "../../utilities/colors"
import { Physical, Special, Status } from "../../assets/MoveIcon"

const P = new Pokedex()


const Moves = props => {
	const { lang, pokemon, types } = props.state
	const pokemonName = filterByLang('name', pokemon.names, lang)
	const data = gameDataByPokemon(props)

	const [genVal, setGenVal] = useState({
		gen:			1,
		gen_i:		true,
		gen_ii:		false,
		gen_iii:	false,
		gen_iv:		false,
		gen_v:		false,
		gen_vi:		false,
		gen_vii:	false,
		gen_viii:	false,
		gen_ix:		false,
	})

	const [versionVal, setVersionVal] = useState({
		version:													1,
		'red-blue':												true,
		yellow:														true,
		gold_silver:											false,
		crystal:													false,
		ruby_sapphire:										false,
		emerald:													false,
		firered_leafgreen:								false,
		diamond_pearl:										false,
		platinum:													false,
		heartgold_soulsilver:							false,
		black_white:											false,
		black_2_white_2:									false,
		x_y:															false,
		omega_ruby_alpha_sapphire:				false,
		sun_moon:													false,
		ultra_sun_ultra_moon:							false,
		sword_shield:											false,
		brilliant_diamond_shining_pearl:	false,
		legends_arceus:										false,
		scarlet_violet:										false,
	})


	const v = {
		red_blue:			data.gen_i.version_group.red_blue.moves_level
									|| data.gen_i.version_group.red_blue.moves_hm
									|| data.gen_i.version_group.red_blue.moves_tm
										? true : false,
		yellow:				data.gen_i.version_group.yellow.moves_level
									|| data.gen_i.version_group.yellow.moves_hm
									|| data.gen_i.version_group.yellow.moves_tm
										? true : false,
		gold_silver:	data.gen_ii.version_group.gold_silver.moves_level
									|| data.gen_ii.version_group.gold_silver.moves_egg
									|| data.gen_ii.version_group.gold_silver.moves_tutor
									|| data.gen_ii.version_group.gold_silver.moves_hm
									|| data.gen_ii.version_group.gold_silver.moves_tm
										? true : false,
		crystal:			data.gen_ii.version_group.crystal.moves_level
									|| data.gen_ii.version_group.crystal.moves_egg
									|| data.gen_ii.version_group.crystal.moves_tutor
									|| data.gen_ii.version_group.crystal.moves_hm
									|| data.gen_ii.version_group.crystal.moves_tm
										? true : false,
	}


	const g = {
		1:	v.red_blue
				|| v.yellow
					? true : false,
		// 2:	v.gold_silver
		// 		|| v.crystal
		// 			? true : false,
		// 3:	data.gen_iii.games.ruby.text
		// 		|| data.gen_iii.games.sapphire.text
		// 		|| data.gen_iii.games.emerald.text
		// 		|| data.gen_iii.games.firered.text
		// 		|| data.gen_iii.games.leafgreen.text
		// 			? true : false,
		// 4:	data.gen_iv.games.diamond.text
		// 		|| data.gen_iv.games.pearl.text
		// 		|| data.gen_iv.games.platinum.text
		// 		|| data.gen_iv.games.heartgold.text
		// 		|| data.gen_iv.games.soulsilver.text
		// 			? true : false,
		// 5:	data.gen_v.games.black.text
		// 		|| data.gen_v.games.white.text
		// 		|| data.gen_v.games.black_2.text
		// 		|| data.gen_v.games.white_2.text
		// 			? true : false,
		// 6:	data.gen_vi.games.x.text
		// 		|| data.gen_vi.games.y.text
		// 		|| data.gen_vi.games.omega_ruby.text
		// 		|| data.gen_vi.games.alpha_sapphire.text
		// 			? true : false,
		// 7:	data.gen_vii.games.sun.text
		// 		|| data.gen_vii.games.moon.text
		// 		|| data.gen_vii.games.ultra_sun.text
		// 		|| data.gen_vii.games.ultra_moon.text
		// 		|| data.gen_vii.games.lets_go_pikachu.text
		// 		|| data.gen_vii.games.lets_go_eevee.text
		// 			? true : false,
		// 8:	data.gen_viii.games.sword.text
		// 		|| data.gen_viii.games.shield.text
		// 		|| data.gen_viii.games.brilliant_diamond.text
		// 		|| data.gen_viii.games.shining_pearl.text
		// 		|| data.gen_viii.games.legends_arceus.text
		// 			? true : false,
		// 9:	data.gen_ix.games.scarlet.text
		// 		|| data.gen_ix.games.violet.text
		// 			? true : false,
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

		if (v.red_blue) { setVersionVal(prev => ({ ...prev, red_blue: true })) }
	}

	useEffect(() => {
		getGenVal()
	}, [props])

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Moves learned by {pokemonName}</Typography>
			</Box>
			<Box>
				<Tabs
					value={genVal.gen}
					onChange={(e, val) => setGenVal(prev => ({ ...prev, gen: val }))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="moves sorted by generation"
				>

					{Object.keys(data).map(gen => (
						genVal[data[gen].name] && (
							<Tab
								key={data[gen].id}
								label={data[gen].label}
								value={data[gen].id}
								id={`moves_gen_tab${data[gen].id}`}
								aria-controls={`moves_gen_panel${data[gen].id}`}
							/>
						)
					))}
				</Tabs>

				{Object.keys(data).map(gen => (
					genVal[data[gen].name] && (
						<Box
							key={data[gen].id}
							role="tabpanel"
							hidden={genVal.gen !== data[gen].id}
							id={`moves_gen_panel${data[gen].id}`}
							aria-labelledby={`moves_gen_tab${data[gen].id}`}
							sx={{ mt: 3 }}
						>
							{genVal.gen === data[gen].id && (
								<Box>
									<Tabs
										value={versionVal.version}
										onChange={(e, val) => setVersionVal(prev => ({ ...prev, version: val }))}
										variant="scrollable"
										scrollButtons="auto"
										aria-label="moves sorted by game"
									>
										{Object.keys(data[gen].version_group).map(group => (
											versionVal[data[gen].version_group[group].name] && (
												<Tab
													key={data[gen].version_group[group].id}
													label={data[gen].version_group[group].label}
													value={data[gen].version_group[group].id}
													id={`moves_group_tab${data[gen].version_group[group].id}`}
													aria-controls={`moves_group_panel${data[gen].version_group[group].id}`}
												/>
											)
										))}
									</Tabs>

									{Object.keys(data[gen].version_group).map(group => (
										versionVal[data[gen].version_group[group].name] && (
											<Box
												key={data[gen].version_group[group].id}
												role="tabpanel"
												hidden={versionVal.version !== data[gen].version_group[group].id}
												id={`moves_group_panel${data[gen].version_group[group].id}`}
												aria-labelledby={`moves_group_tab${data[gen].version_group[group].id}`}
												sx={{ mt: 3 }}
											>
												{versionVal.version === data[gen].version_group[group].id && (
													<Box>
														{data[gen].version_group[group].moves_level.length > 0 && (
															<Box>
																<Typography variant="h3">Moves learnt by level up</Typography>
																
																<TableContainer>
																	<Table aria-label={`moves learnt in ${data[gen].version_group[group].label} by level up`}>
																		<TableHead>
																			<TableRow sx={{
																				'& td, & th': {
																					padding: 1,
																					backgroundColor: gray[100]
																				},
																			}}>
																				<TableCell>Lvl.</TableCell>
																				<TableCell>Move</TableCell>
																				<TableCell>Type</TableCell>
																				<TableCell>Cat.</TableCell>
																				<TableCell>Power</TableCell>
																				<TableCell>Acc.</TableCell>
																				<TableCell>PP</TableCell>
																			</TableRow>
																		</TableHead>
																		<TableBody>
																			{data[gen].version_group[group].moves_level.map((m, i) => (
																				<MoveTableRow
																					key={i}
																					move={m}
																					type="level-up"
																					{...props.state}
																				/>
																			))}
																		</TableBody>
																	</Table>
																</TableContainer>
															</Box>
														)}
													</Box>
												)}
											</Box>
										)
									))}
								</Box>
							)}
						</Box>
					)
				))}
			</Box>
		</Box>
	)
}


const MoveTableRow = props => {
	const { lang, move, type, types } = props
	const [moveData, setMoveData] = useState()

	const getMoveData = move => {
		P.getMoveByName(move)
			.then(data => setMoveData(data))
	}

	useEffect(() => {
		getMoveData(move.move.name)
	}, [move])

	// console.log(moveData)

	return moveData && (
		type === 'level-up' && (
			<TableRow sx={{
				borderBottom: `1px solid ${gray[100]}`,
				'& td, & th': { border: 0, padding: 1, },
				'&:last-child': { border: 0 },
				'&:hover': {
					backgroundColor: alpha(getColorFromType(types[0])[100], 0.5),
					cursor: 'pointer',
				}
			}}>
				<TableCell sx={{ textAlign: 'right' }}>{move.version_details.level_learned_at}</TableCell>
				<TableCell sx={{ fontWeight: 'medium', fontSize: 16 }}>{filterByLang('name', moveData.names, lang)}</TableCell>
				<TableCell>
					<Chip
						size="small"
						variant="type"
						type={moveData.type.name}
						label={moveData.type.name}
						sx={{ width: '100%' }}
					/>
				</TableCell>
				<TableCell sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					{moveData.damage_class.name === 'physical' && <Physical />}
					{moveData.damage_class.name === 'special' && <Special />}
					{moveData.damage_class.name === 'status' && <Status />}
				</TableCell>
				<TableCell>
					{moveData.power ? moveData.power : <Typography>&mdash;</Typography>}
				</TableCell>
				<TableCell>
					{moveData.accuracy ? moveData.accuracy : <Typography>&mdash;</Typography>}
				</TableCell>
				<TableCell>
					{moveData.pp ? moveData.pp : <Typography>&mdash;</Typography>}
				</TableCell>
			</TableRow>
		)
	)
}

export default Moves