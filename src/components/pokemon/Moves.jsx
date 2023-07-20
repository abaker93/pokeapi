import { useEffect, useState } from "react"
import Pokedex from 'pokedex-promise-v2'

import { Box, Chip, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, alpha } from '@mui/material'
import PokemonTabs from "../../utilities/components/PokemonTabs"
import PokemonTab from "../../utilities/components/PokemonTab"

import { gameDataByPokemon } from "../../utilities/games"
import { filterByLang, getColorFromType } from '../../utilities/utilities'
import { gray, text } from "../../utilities/colors"
import { Physical, Special, Status } from "../../assets/MoveIcon"

const P = new Pokedex()

const Moves = props => {
	const { lang, pokemon, types } = props.state
	const pokemonName = filterByLang('name', pokemon.names, lang)
	const pokemonColor = getColorFromType(types[0])
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

	const [groupVal, setGroupVal] = useState({
		gen_i: {
			group: 1,
			'red-blue': false,
			yellow: false,
		},
		gen_ii: {
			group: 1,
			'gold-silver': false,
			crystal: false,
		},
		gen_iii: {
			group: 1,
			'ruby-sapphire': false,
			emerald: false,
			'firered-leafgreen': false,
		},
		gen_iv: {
			group: 1,
			'diamond-pearl': false,
			platinum: false,
			'heartgold-soulsilver': false,
		},
		gen_v: {
			group: 1,
			'black-white': false,
			'black-2-white-2': false,
		},
		gen_vi: {
			group: 1,
			'x-y': false,
			'omega-ruby-alpha-sapphire': false,
		},
		gen_vii: {
			group: 1,
			'sun-moon': false,
			'ultra-sun-ultra-moon': false,
			'lets-go-pikachu-lets-go-eevee': false,
		},
		gen_viii: {
			group: 1,
			'sword-shield': false,
			'brilliant-diamond-shining-pearl': false,
			'legends-arceus': false,
		},
		gen_ix: {
			group: 1,
			'scarlet-violet': false,
		},
	})

	const vg = {
		rb:		Object.keys(data.gen_i.version_group.red_blue.moves).length > 0,
		y:		Object.keys(data.gen_i.version_group.yellow.moves).length > 0,
		gs:		Object.keys(data.gen_ii.version_group.gold_silver.moves).length > 0,
		c:		Object.keys(data.gen_ii.version_group.crystal.moves).length > 0,
		rs:		Object.keys(data.gen_iii.version_group.ruby_sapphire.moves).length > 0,
		e:		Object.keys(data.gen_iii.version_group.emerald.moves).length > 0,
		fl:		Object.keys(data.gen_iii.version_group.firered_leafgreen.moves).length > 0,
		dp:		Object.keys(data.gen_iv.version_group.diamond_pearl.moves).length > 0,
		p:		Object.keys(data.gen_iv.version_group.platinum.moves).length > 0,
		hs:		Object.keys(data.gen_iv.version_group.heartgold_soulsilver.moves).length > 0,
		bw:		Object.keys(data.gen_v.version_group.black_white.moves).length > 0,
		bw2:	Object.keys(data.gen_v.version_group.black_2_white_2.moves).length > 0,
		xy:		Object.keys(data.gen_vi.version_group.x_y.moves).length > 0,
		oa:		Object.keys(data.gen_vi.version_group.omega_ruby_alpha_sapphire.moves).length > 0,
		sm:		Object.keys(data.gen_vii.version_group.sun_moon.moves).length > 0,
		usm:	Object.keys(data.gen_vii.version_group.ultra_sun_ultra_moon.moves).length > 0,
		lgpe:	Object.keys(data.gen_vii.version_group.lets_go_pikachu_lets_go_eevee.moves).length > 0,
		ss:		Object.keys(data.gen_viii.version_group.sword_shield.moves).length > 0,
		bs:		Object.keys(data.gen_viii.version_group.brilliant_diamond_shining_pearl.moves).length > 0,
		la:		Object.keys(data.gen_viii.version_group.legends_arceus.moves).length > 0,
		sv:		Object.keys(data.gen_ix.version_group.scarlet_violet.moves).length > 0,
	}

	const g = {
		1:	vg.rb || vg.y ? true : false,
		2:	vg.gs || vg.c ? true : false,
		3:	vg.rs || vg.e || vg.fl ? true : false,
		4:	vg.dp || vg.p || vg.hs ? true : false,
		5:	vg.bw || vg.bw2 ? true : false,
		6:	vg.xy || vg.oa ? true : false,
		7:	vg.sm || vg.usm || vg.lgpe ? true : false,
		8:	vg.ss || vg.bs || vg.la ? true : false,
		9:	vg.sv ? true : false,
	}

	const getGenVal = () => {
		if (g[1]) { setGenVal(prev => ({ ...prev, gen: 1 })) }
		else if (g[2]) { setGenVal(prev => ({ ...prev, gen: 2 })) }
		else if (g[3]) { setGenVal(prev => ({ ...prev, gen: 3 })) }
		else if (g[4]) { setGenVal(prev => ({ ...prev, gen: 4 })) }
		else if (g[5]) { setGenVal(prev => ({ ...prev, gen: 5 })) }
		else if (g[6]) { setGenVal(prev => ({ ...prev, gen: 6 })) }
		else if (g[7]) { setGenVal(prev => ({ ...prev, gen: 7 })) }
		else if (g[8]) { setGenVal(prev => ({ ...prev, gen: 8 })) }
		else if (g[9]) { setGenVal(prev => ({ ...prev, gen: 9 })) }

		if (g[1]) { setGenVal(prev => ({ ...prev, gen_i: true })) }
		if (g[2]) { setGenVal(prev => ({ ...prev, gen_ii: true })) }
		if (g[3]) { setGenVal(prev => ({ ...prev, gen_iii: true })) }
		if (g[4]) { setGenVal(prev => ({ ...prev, gen_iv: true })) }
		if (g[5]) { setGenVal(prev => ({ ...prev, gen_v: true })) }
		if (g[6]) { setGenVal(prev => ({ ...prev, gen_vi: true })) }
		if (g[7]) { setGenVal(prev => ({ ...prev, gen_vii: true })) }
		if (g[8]) { setGenVal(prev => ({ ...prev, gen_viii: true })) }
		if (g[9]) { setGenVal(prev => ({ ...prev, gen_ix: true })) }

		if (vg.rb)				{ setGroupVal(prev => ({ ...prev, gen_i: { ...prev.gen_i, group: 1 } })) }
		else if (vg.y)		{ setGroupVal(prev => ({ ...prev, gen_i: { ...prev.gen_i, group: 2 } })) }
		if (vg.gs)				{ setGroupVal(prev => ({ ...prev, gen_ii: { ...prev.gen_ii, group: 1 } })) }
		else if (vg.c)		{ setGroupVal(prev => ({ ...prev, gen_ii: { ...prev.gen_ii, group: 2 } })) }
		if (vg.rs)				{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, group: 1 } })) }
		else if (vg.e)		{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, group: 2 } })) }
		else if (vg.fl)		{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, group: 3 } })) }
		if (vg.dp)				{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, group: 1 } })) }
		else if (vg.p)		{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, group: 2 } })) }
		else if (vg.hs)		{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, group: 3 } })) }
		if (vg.bw)				{ setGroupVal(prev => ({ ...prev, gen_v: { ...prev.gen_v, group: 1 } })) }
		else if (vg.bw2)	{ setGroupVal(prev => ({ ...prev, gen_v: { ...prev.gen_v, group: 2 } })) }
		if (vg.xy)				{ setGroupVal(prev => ({ ...prev, gen_vi: { ...prev.gen_vi, group: 1 } })) }
		else if (vg.oa)		{ setGroupVal(prev => ({ ...prev, gen_vi: { ...prev.gen_vi, group: 2 } })) }
		if (vg.sm)				{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, group: 1 } })) }
		else if (vg.usm)	{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, group: 2 } })) }
		else if (vg.lgpe)	{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, group: 3 } })) }
		if (vg.ss)				{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, group: 1 } })) }
		else if (vg.bs)		{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, group: 2 } })) }
		else if (vg.la)		{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, group: 3 } })) }
		if (vg.sv)				{ setGroupVal(prev => ({ ...prev, gen_ix: { ...prev.gen_ix, group: 1 } })) }

		if (vg.rb)		{ setGroupVal(prev => ({ ...prev, gen_i: { ...prev.gen_i, 'red-blue': true } })) }
		if (vg.y)			{ setGroupVal(prev => ({ ...prev, gen_i: { ...prev.gen_i, yellow: true } })) }
		if (vg.gs)		{ setGroupVal(prev => ({ ...prev, gen_ii: { ...prev.gen_ii, 'gold-silver': true } })) }
		if (vg.c)			{ setGroupVal(prev => ({ ...prev, gen_ii: { ...prev.gen_ii, crystal: true } })) }
		if (vg.rs)		{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, 'ruby-sapphire': true } })) }
		if (vg.e)			{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, emerald: true } })) }
		if (vg.fl)		{ setGroupVal(prev => ({ ...prev, gen_iii: { ...prev.gen_iii, 'firered-leafgreen': true } })) }
		if (vg.dp)		{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, 'diamond-pearl': true } })) }
		if (vg.p)			{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, platinum: true } })) }
		if (vg.hs)		{ setGroupVal(prev => ({ ...prev, gen_iv: { ...prev.gen_iv, 'heartgold-soulsilver': true } })) }
		if (vg.bw)		{ setGroupVal(prev => ({ ...prev, gen_v: { ...prev.gen_v, 'black-white': true } })) }
		if (vg.bw2)		{ setGroupVal(prev => ({ ...prev, gen_v: { ...prev.gen_v, 'black-2-white-2': true } })) }
		if (vg.xy)		{ setGroupVal(prev => ({ ...prev, gen_vi: { ...prev.gen_vi, 'x-y': true } })) }
		if (vg.oa)		{ setGroupVal(prev => ({ ...prev, gen_vi: { ...prev.gen_vi, 'omega-ruby-alpha-sapphire': true } })) }
		if (vg.sm)		{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, 'sun-moon': true } })) }
		if (vg.usm)		{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, 'ultra-sun-ultra-moon': true } })) }
		if (vg.lgpe)	{ setGroupVal(prev => ({ ...prev, gen_vii: { ...prev.gen_vii, 'lets-go-pikachu-lets-go-eevee': true } })) }
		if (vg.ss)		{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, 'sword-shield': true } })) }
		if (vg.bs)		{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, 'brilliant-diamond-shining-pearl': true } })) }
		if (vg.la)		{ setGroupVal(prev => ({ ...prev, gen_viii: { ...prev.gen_viii, 'legends-arceus': true } })) }
		if (vg.sv)		{ setGroupVal(prev => ({ ...prev, gen_ix: { ...prev.gen_ix, 'scarlet-violet': true } })) }
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
				<GenTabs
					color={pokemonColor}
					data={data}
					genVal={genVal}
					setGenVal={setGenVal}
				/>

				{Object.keys(data).map(gen => (
					genVal[data[gen].name] && (
						<GenPanel
							key={data[gen].id}
							data={data[gen]}
							genVal={genVal}
						>
							{data[gen].id === genVal.gen && (
								<Box>
									<GroupTabs
										color={pokemonColor}
										data={data[gen]}
										groupVal={groupVal}
										setGroupVal={setGroupVal}
									/>

									{Object.keys(data[gen].version_group).map(group => (
										groupVal[data[gen].name][data[gen].version_group[group].name] && (
											<GroupPanel
												key={`${data[gen].id}${data[gen].version_group[group].id}`}
												data={data[gen].version_group[group]}
												gen={data[gen].name}
												groupVal={groupVal}
											>
												{Object.keys(data[gen].version_group[group].moves).map(method => (
													<MovesTable
														group={data[gen].version_group[group]}
														moves={data[gen].version_group[group].moves[method]}
														color={pokemonColor}
														lang={lang}
														name={pokemonName}
													/>
												))}
											</GroupPanel>
										)
									))}
								</Box>
							)}
						</GenPanel>
					)
				))}
			</Box>
		</Box>
	)
}

const GenTabs = props => {
	const { color, data, genVal, setGenVal } = props

	return (
		<PokemonTabs
			value={genVal.gen}
			onChange={(e, val) => setGenVal({ ...genVal, gen: val })}
			color={color}
			aria-label="moves sorted by generation"
		>
			{Object.keys(data).map(gen => (
				genVal[data[gen].name] && (
					<PokemonTab
						key={data[gen].id}
						color={color}
						label={data[gen].label}
						value={data[gen].id}
						id={`moves_gen_tab${data[gen].id}`}
						aria-controls={`moves_gen_panel${data[gen].id}`}
					/>
				)
			))}
		</PokemonTabs>
	)
}

const GroupTabs = props => {
	const { color, data, groupVal, setGroupVal } = props

	return (
		<PokemonTabs
			value={groupVal[data.name].group}
			onChange={(e, val) => setGroupVal({
				...groupVal,
				[data.name]: {
					...groupVal[data.name],
					group: val
				}
			})}
			color={color}
			aria-label="moves sorted by generation"
		>
			{Object.keys(data.version_group).map(group => (
				groupVal[data.name][data.version_group[group].name] && (
					<PokemonTab
						key={data.version_group[group].id}
						color={color}
						label={data.version_group[group].label}
						value={data.version_group[group].id}
						id={`moves_gen_tab${data.version_group[group].id}`}
						aria-controls={`moves_gen_panel${data.version_group[group].id}`}
					/>
				)
			))}
		</PokemonTabs>
	)
}

const GenPanel = props => {
	const { children, data, genVal } = props

	return (
		<Box
			role="tabpanel"
			hidden={genVal.gen !== data.id}
			id={`moves_gen_panel${data.id}`}
			aria-labelledby={`moves_gen_tab${data.id}`}
			sx={{ mt: 1 }}
		>
			<Box>
				{children}
			</Box>
		</Box>
	)
}

const GroupPanel = props => {
	const { children, data, gen, groupVal } = props

	return (
		<Box
			role="tabpanel"
			hidden={groupVal[gen].group !== data.id}
			id={`moves_group_panel${data.id}`}
			aria-labelledby={`moves_group_tab${data.id}`}
			sx={{ mt: 1 }}
		>
			<Box>
				{children}
			</Box>
		</Box>
	)
}

const MovesTable = props => {
	const { group, moves, name }	= props
	const [moveData, setMoveData] = useState([])
	const [machines, setMachines] = useState({
		hm: false,
		tm: false,
	})

	const getMoveData = props => {
		props.map(m => {
			P.getMoveByName(m.move.name)
				.then(move => {
					if (moves.name === 'machine') {

						P.getResource(move.machines.filter(f => f.version_group.name === group.name)[0].machine.url)
							.then(machine => {
								P.getResource(machine.item.url)
									.then(item => {
										if (item.name.slice(0, 1) === 'h') {
											setMoveData(prev => [
												...prev,
												{
													...move,
													hm: item,
													version_details: m.version_details
												}
											])
											setMachines(prev => ({ ...prev, hm: true }))
										}
										if (item.name.slice(0, 1) === 't') {
											setMoveData(prev => [
												...prev,
												{
													...move,
													tm: item,
													version_details: m.version_details
												}
											])
											setMachines(prev => ({ ...prev, tm: true }))
										}
									})
							})

					} else {

						setMoveData(prev => [
							...prev,
							{
								...move,
								version_details: m.version_details
							}
						])
					
					}
				})
		}) 
	}

	useEffect(() => {
		setMoveData([])
		getMoveData(moves.moves)
	}, [])

	if (moveData.length > 0) {
		
		if (moves.name === 'machine') {
			return (
				machines.hm ? ( 
					machines.tm ? (
						<>
							<Box key={`${moves.id}-hm`} sx={{ mt: 3 }}>
								<Typography variant="h3" mb={0.5}>Moves learnt by HM</Typography>
								<Typography variant="body2" fontStyle="italic" color={text[300]} mb={1}>{name} is compatible with these Hidden Machines in Pokémon {group.label}:</Typography>
								<TableContainer sx={{ mt: 1 }}>
									<Table aria-label={`moves learnt in ${group.label} by HM`}>
										<MovesTableHead subcategory="hm" {...props} />
										<MoveTableRows subcategory="hm" moveData={moveData} {...props} />
									</Table>
								</TableContainer>
							</Box>
							<Box key={`${moves.id}-tm`} sx={{ mt: 3 }}>
								<Typography variant="h3" mb={0.5}>Moves learnt by TM</Typography>
								<Typography variant="body2" fontStyle="italic" color={text[300]} mb={1}>{name} is compatible with these Technical Machines in Pokémon {group.label}:</Typography>
								<TableContainer sx={{ mt: 1 }}>
									<Table aria-label={`moves learnt in ${group.label} by TM`}>
										<MovesTableHead subcategory="tm" {...props} />
										<MoveTableRows subcategory="tm" moveData={moveData} {...props} />
									</Table>
								</TableContainer>
							</Box>
						</>
					) : (
						<Box key={`${moves.id}-hm`} sx={{ mt: 3 }}>
							<Typography variant="h3" mb={0.5}>Moves learnt by HM</Typography>
							<Typography variant="body2" fontStyle="italic" color={text[300]} mb={1}>{name} is compatible with these Hidden Machines in Pokémon {group.label}:</Typography>
							<TableContainer sx={{ mt: 1 }}>
								<Table aria-label={`moves learnt in ${group.label} by HM`}>
									<MovesTableHead subcategory="hm" {...props} />
									<MoveTableRows subcategory="hm" moveData={moveData} {...props} />
								</Table>
							</TableContainer>
						</Box>
					)
				) : (
					machines.tm ? (
						<Box key={`${moves.id}-tm`} sx={{ mt: 3 }}>
							<Typography variant="h3" mb={0.5}>Moves learnt by TM</Typography>
							<Typography variant="body2" fontStyle="italic" color={text[300]} mb={1}>{name} is compatible with these Technical Machines in Pokémon {group.label}:</Typography>
							<TableContainer sx={{ mt: 1 }}>
								<Table aria-label={`moves learnt in ${group.label} by TM`}>
									<MovesTableHead subcategory="tm" {...props} />
									<MoveTableRows subcategory="tm" moveData={moveData} {...props} />
								</Table>
							</TableContainer>
						</Box>
					) : null
				)
			)
		}

		return (
			<Box key={moves.id} sx={{ mt: 3 }}>
				<Typography variant="h3" mb={0.5}>Moves learnt by {moves.label}</Typography>
				{moves.name === 'level' && (
					<Typography variant="body2" color={text[300]} mb={1}>{name} learns the followiung moves in Pokémon {group.label} at the levels specified:</Typography>
				)}
				{moves.name === 'tutor' && (
					<Typography variant="body2" color={text[300]} mb={1}>{name} can be taught these moves in Pokémon {group.label} from move tutors:</Typography>
				)}
				<TableContainer sx={{ mt: 1 }}>
					<Table aria-label={`moves learnt in ${group.label} by ${moves.label}`}>
						<MovesTableHead {...props} />
						<MoveTableRows moveData={moveData} {...props} />
					</Table>
				</TableContainer>
			</Box>
		)

	}
}

const MovesTableHead = props => {
	const { moves, subcategory } = props
	const category = moves.name

	const styles = {
		'& td, & th': {
			padding: 1,
			backgroundColor: alpha(gray[100], 0.4),
			borderBottom: `1px solid ${gray[300]}`,
		},
	}

	if (category === 'level') {
		return (
			<TableHead>
				<TableRow sx={styles}>
					<TableCell>Lvl.</TableCell>
					<TableCell>Move</TableCell>
					<TableCell>Type</TableCell>
					<TableCell>Cat.</TableCell>
					<TableCell>Pwr.</TableCell>
					<TableCell>Acc.</TableCell>
					<TableCell>PP</TableCell>
				</TableRow>
			</TableHead>
		)
	}

	if (category === 'machine') {
		return (
			<TableHead>
				<TableRow sx={styles}>
					<TableCell>{subcategory === 'tm' ? <>TM</> : <>HM</>}</TableCell>
					<TableCell>Move</TableCell>
					<TableCell>Type</TableCell>
					<TableCell>Cat.</TableCell>
					<TableCell>Pwr.</TableCell>
					<TableCell>Acc.</TableCell>
					<TableCell>PP</TableCell>
				</TableRow>
			</TableHead>
		)
	}

	if (category === 'tutor') {
		return (
			<TableHead>
				<TableRow sx={styles}>
					<TableCell>Move</TableCell>
					<TableCell>Type</TableCell>
					<TableCell>Cat.</TableCell>
					<TableCell>Pwr.</TableCell>
					<TableCell>Acc.</TableCell>
					<TableCell>PP</TableCell>
				</TableRow>
			</TableHead>
		)
	}
}

const MoveTableRows = props => {
	const { color, lang, moveData, moves, subcategory } = props
	const category = moves.name

	const rowStyle = {
		borderBottom: `1px solid ${gray[100]}`,
		
		'& td, & th': { border: 0, padding: 1, },
		
		'&:last-child': { border: 0 },
		
		'&.MuiTableRow-hover:hover': {
			backgroundColor: alpha(color[100], 0.5),
			cursor: 'pointer',
		}
	}

	if (category === 'level') {
		return (
			<TableBody>
				{moveData
					.sort((a, b) => a.version_details.level_learned_at - b.version_details.level_learned_at || filterByLang('name', a.names, lang).localeCompare(filterByLang('name', b.names, lang)))
					.map(move => (
						<TableRow key={`${move.id}-${move.version_details.level_learned_at}`} hover sx={rowStyle}>
							<TableCell sx={{ textAlign: 'right' }}>
								{move.version_details.level_learned_at}
							</TableCell>
							<TableCell sx={{ fontWeight: 'medium', fontSize: 16 }}>
								{filterByLang('name', move.names, lang)}
							</TableCell>
							<TableCell>
								<Chip
									size="small"
									variant="type"
									type={move.type.name}
									label={move.type.name}
									sx={{ width: '100%' }}
								/>
							</TableCell>
							<TableCell sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								{move.damage_class.name === 'physical' && <Physical />}
								{move.damage_class.name === 'special' && <Special />}
								{move.damage_class.name === 'status' && <Status />}
							</TableCell>
							<TableCell>
								{move.power ? move.power : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.accuracy ? move.accuracy : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.pp ? move.pp : <Typography>&mdash;</Typography>}
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		)
	}

	if (category === 'machine') {
		return (
			<TableBody>
				{moveData
					.filter(f => f[subcategory])
					.sort((a, b) => a[subcategory].name.localeCompare(b[subcategory].name))
					.map(move => (
						<TableRow key={move.id} hover sx={rowStyle}>
							<TableCell sx={{ textAlign: 'right' }}>
								{filterByLang('name', move[subcategory].names, lang)}
							</TableCell>
							<TableCell sx={{ fontWeight: 'medium', fontSize: 16 }}>
								{filterByLang('name', move.names, lang)}
							</TableCell>
							<TableCell>
								<Chip
									size="small"
									variant="type"
									type={move.type.name}
									label={move.type.name}
									sx={{ width: '100%' }}
								/>
							</TableCell>
							<TableCell sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								{move.damage_class.name === 'physical' && <Physical />}
								{move.damage_class.name === 'special' && <Special />}
								{move.damage_class.name === 'status' && <Status />}
							</TableCell>
							<TableCell>
								{move.power ? move.power : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.accuracy ? move.accuracy : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.pp ? move.pp : <Typography>&mdash;</Typography>}
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		)
	}

	if (category === 'tutor') {
		return (
			<TableBody>
				{moveData
					.sort((a, b) => filterByLang('name', a.names, lang).localeCompare(filterByLang('name', b.names, lang)))
					.map(move => (
						<TableRow key={move.id} hover sx={rowStyle}>
							<TableCell sx={{ fontWeight: 'medium', fontSize: 16 }}>
								{filterByLang('name', move.names, lang)}
							</TableCell>
							<TableCell>
								<Chip
									size="small"
									variant="type"
									type={move.type.name}
									label={move.type.name}
									sx={{ width: '100%' }}
								/>
							</TableCell>
							<TableCell sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
								{move.damage_class.name === 'physical' && <Physical />}
								{move.damage_class.name === 'special' && <Special />}
								{move.damage_class.name === 'status' && <Status />}
							</TableCell>
							<TableCell>
								{move.power ? move.power : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.accuracy ? move.accuracy : <Typography>&mdash;</Typography>}
							</TableCell>
							<TableCell>
								{move.pp ? move.pp : <Typography>&mdash;</Typography>}
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		)
	}
}

export default Moves