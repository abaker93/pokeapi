import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { gameDataByPokemon } from '../../utilities/games';
import { useState } from 'react';
import { filterByLang, formatDexId, getNumByDex } from '../../utilities/utilities';

const FlavorText = props => {
	const { lang, pokemon } = props.state

	const pokedexNumbers = pokemon.pokedex_numbers

	const [genVal, setGenVal] = useState({
		gen:			1,
		gen_i:		true,
		gen_ii:		true,
		gen_iii:	true,
		gen_iv:		true,
		gen_v:		true,
		gen_vi:		true,
		gen_vii:	true,
		gen_viii:	true,
		gen_ix:		true,
	})

	const data = gameDataByPokemon(props)

	console.log(data)

	// const games = {
	// 	red: {
	// 		num:	gamesArray[0].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'red'), lang)
	// 	},
	// 	blue: {
	// 		num:	gamesArray[0].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'blue'), lang)
	// 	},
	// 	yellow: {
	// 		num:	gamesArray[0].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'yellow'), lang)
	// 	},
	// 	gold: {
	// 		num:	gamesArray[1].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'gold'), lang)
	// 	},
	// 	silver: {
	// 		num:	gamesArray[1].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'silver'), lang)
	// 	},
	// 	crystal: {
	// 		num:	gamesArray[1].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'crystal'), lang)
	// 	},
	// 	ruby: {
	// 		num:	gamesArray[2].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'ruby'), lang)
	// 	},
	// 	sapphire: {
	// 		num:	gamesArray[2].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'sapphire'), lang)
	// 	},
	// 	emerald: {
	// 		num:	gamesArray[2].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'emerald'), lang)
	// 	},
	// 	firered: {
	// 		num:	gamesArray[2].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'firered'), lang)
	// 	},
	// 	leafgreen: {
	// 		num:	gamesArray[2].games[4].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'leafgreen'), lang)
	// 	},
	// 	diamond: {
	// 		num:	gamesArray[3].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'diamond'), lang)
	// 	},
	// 	pearl: {
	// 		num:	gamesArray[3].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'pearl'), lang)
	// 	},
	// 	platinum: {
	// 		num:	gamesArray[3].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'platinum'), lang)
	// 	},
	// 	heartgold: {
	// 		num:	gamesArray[3].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'heartgold'), lang)
	// 	},
	// 	soulsilver: {
	// 		num:	gamesArray[3].games[4].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'soulsilver'), lang)
	// 	},
	// 	black: {
	// 		num:	gamesArray[4].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'black'), lang)
	// 	},
	// 	white: {
	// 		num:	gamesArray[4].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'white'), lang)
	// 	},
	// 	black_2: {
	// 		num:	gamesArray[4].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'black-2'), lang)
	// 	},
	// 	white_2: {
	// 		num:	gamesArray[4].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'white-2'), lang)
	// 	},
	// 	x: {
	// 		num:	gamesArray[5].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'x'), lang)
	// 	},
	// 	y: {
	// 		num:	gamesArray[5].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'y'), lang)
	// 	},
	// 	omega_ruby: {
	// 		num:	gamesArray[5].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'omega-ruby'), lang)
	// 	},
	// 	alpha_sapphire: {
	// 		num:	gamesArray[5].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'alpha-sapphire'), lang)
	// 	},
	// 	sun: {
	// 		num:	gamesArray[6].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'sun'), lang)
	// 	},
	// 	moon: {
	// 		num:	gamesArray[6].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'moon'), lang)
	// 	},
	// 	ultra_sun: {
	// 		num:	gamesArray[6].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'ultra-sun'), lang)
	// 	},
	// 	ultra_moon: {
	// 		num:	gamesArray[6].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'ultra-moon'), lang)
	// 	},
	// 	lets_go_pikachu: {
	// 		num:	gamesArray[6].games[4].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'lets-go-pikachu'), lang)
	// 	},
	// 	lets_go_eevee: {
	// 		num:	gamesArray[6].games[5].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'lets-go-eevee'), lang)
	// 	},
	// 	sword: {
	// 		num:	gamesArray[7].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'sword-shield'), lang)
	// 	},
	// 	shield: {
	// 		num:	gamesArray[7].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'sword-shield'), lang)
	// 	},
	// 	brilliant_diamond: {
	// 		num:	gamesArray[7].games[2].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'brilliant-diamond'), lang)
	// 	},
	// 	shining_pearl: {
	// 		num:	gamesArray[7].games[3].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'shining-pearl'), lang)
	// 	},
	// 	legends_arceus: {
	// 		num:	gamesArray[7].games[4].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'legends-arceus'), lang)
	// 	},
	// 	scarlet: {	
	// 		num:	gamesArray[8].games[0].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'scarlet'), lang)
	// 	},
	// 	violet: {
	// 		num:	gamesArray[8].games[1].pokedex.map(dex => getNumByDex(pokedexNumbers, dex)),
	// 		text:	filterByLang('flavor_text', pokemon.flavor_text_entries.filter(f => f.version.name === 'violet'), lang)
	// 	},
	// }

	// console.log(games)

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 3 }}>
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
								onChange={(e, val)}
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
											<Box key={data[gen].games[game].id} sx={{ mb: 3 }}>
												<Typography variant="h4">{data[gen].games[game].label}</Typography>
												</Box>
										)
									))}
								</Box>
							)}
						</Container>
					)
				))}

				{/* {gamesArray.map(gen => (
					generations[gen.id] ? (
						<Container
							key={gen.id}
							role="tabpanel"
							hidden={generations.gen !== gen.id}
							id={`flavortext_panel_${gen.id}`}
							aria-labelledby={props.ariaLabelledBy}
							sx={{ mt: 3 }}
						> 
							{generations.gen === gen.id && (
								gen.games.map(game => (
									games[game.id].text && (
										<Box key={game.id}>

											<Typography variant="h4">{game.name}</Typography>
											
											{games[game.id].num.map((m,i) => (
												m && (
													<Typography key={i} component="span" fontWeight="medium" sx={{ mr: 0.5, opacity: 0.7 }}>
														<Typography component="span" fontSize={12} fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.25 }}>
															No.
														</Typography>
														{formatDexId(m)}
													</Typography>
												)
											))}

											{games[game.id].text && (
												<Typography>{games[game.id].text}</Typography>
											)}

										</Box>
									)
								))
							)}
						</Container>
					) : null
				))} */}

			</Box>
		</Box>
	)
}

export default FlavorText