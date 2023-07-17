import { useEffect, useState } from "react"
import Pokedex from 'pokedex-promise-v2'

import { Box, Chip, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography, alpha } from '@mui/material'
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

	console.log(data.gen_i.version_group.red_blue.moves)

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
													<Box
														key={data[gen].version_group[group].moves[method].id}
														sx={{ mt: 3 }}
													>
														<Typography variant="h3">Moves learnt by {data[gen].version_group[group].moves[method].label}</Typography>

														<MovesTable
															group={data[gen].version_group[group].name}
															moves={data[gen].version_group[group].moves[method]}
														/>
													</Box>
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

	return (
		<TableContainer sx={{ mt: 1 }}>
			<Table aria-label={`moves learnt in ${group.label} by ${moves.label}`}>
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
			</Table>
		</TableContainer>
	)
}

export default Moves