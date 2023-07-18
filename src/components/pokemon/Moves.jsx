import { useEffect, useState } from "react"
import Pokedex from 'pokedex-promise-v2'

import { Box, Chip, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, alpha } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import PokemonTabs from "../../utilities/components/PokemonTabs"
import PokemonTab from "../../utilities/components/PokemonTab"

import { gameDataByPokemon } from "../../utilities/games"
import { filterByLang, getColorFromType } from '../../utilities/utilities'
import { gray } from "../../utilities/colors"
import { Physical, Special, Status } from "../../assets/MoveIcon"

const P = new Pokedex()

const Moves = props => {
	const { lang, pokemon, types } = props.state
	const pokemonName = filterByLang('name', pokemon.names, lang)
	const pokemonColor = getColorFromType(types[0])
	const data = gameDataByPokemon(props)

	// console.log(data.gen_i.version_group.red_blue.moves)

	const [genVal, setGenVal] = useState({
		gen:			1,
		gen_i:		true,
		gen_ii:		true,
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
			'red-blue': true,
			yellow: true,
		},
		gen_ii: {
			group: 1,
			'gold-silver': true,
			crystal: true,
		},
	})

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
												key={data[gen].version_group[group].id}
												data={data[gen].version_group[group]}
												gen={data[gen].name}
												groupVal={groupVal}
											>
												{Object.keys(data[gen].version_group[group].moves).map(method => (
													<MovesTable
														group={data[gen].version_group[group].name}
														moves={data[gen].version_group[group].moves[method]}
														color={pokemonColor}
														lang={lang}
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
	const { group, moves }	= props
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

						P.getResource(move.machines.filter(f => f.version_group.name === group)[0].machine.url)
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

	// console.log(moveData)

	if (moveData.length > 0) {
		
		if (moves.name === 'machine') {
			return (
				machines.hm ? ( 
					machines.tm ? (
						<>
							<Box key={`${moves.id}-hm`} sx={{ mt: 3 }}>
								<Typography variant="h3">Moves learnt by HM</Typography>
								<TableContainer sx={{ mt: 1 }}>
									<Table aria-label={`moves learnt in ${group.label} by HM`}>
										<MovesTableHead subcategory="hm" {...props} />
										<MoveTableRows subcategory="hm" moveData={moveData} {...props} />
									</Table>
								</TableContainer>
							</Box>
							<Box key={`${moves.id}-tm`} sx={{ mt: 3 }}>
								<Typography variant="h3">Moves learnt by TM</Typography>
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
							<Typography variant="h3">Moves learnt by HM</Typography>

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
							<Typography variant="h3">Moves learnt by TM</Typography>

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
				<Typography variant="h3">Moves learnt by {moves.label}</Typography>

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
					<TableCell>Power</TableCell>
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
					<TableCell>Power</TableCell>
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
						<TableRow key={`${move.id}-${move.version_details.level_learned_at}`} component={Link} href={`/move/${move.name}`} underline="none" hover sx={rowStyle}>
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
						<TableRow key={move.id} component={Link} href={`/move/${move.name}`} underline="none" hover sx={rowStyle}>
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
}

export default Moves