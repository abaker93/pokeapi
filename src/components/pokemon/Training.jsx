import { Box, Chip, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import { filterByLang, getColorFromType } from "../../utilities/utilities"

const Training = props => {
	const { evYield, growthRate, lang, pokemon, types } = props.state

	
	const createData = (name, data) => {
		return { name, data }
	}


	const tableData = [
		createData('EV yield', evYield.map(m => (
			<Chip
				key={m.id}
				component="span"
				size="xsmall"
				label={`${m.effort} ${filterByLang('name', m.names, lang)}`}
				sx={{ mr: 1 }}
			/>
		))),
		createData('Catch Rate', pokemon.capture_rate),
		createData('Base Experience', pokemon.base_experience),
		createData('Base Friendship', pokemon.base_happiness),			 // TODO:	add note about friendship = happiness
		createData('Growth Rate', filterByLang('description', growthRate.descriptions, lang)),
	]


	return (
		<>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Training</Typography>
			</Box>
			<Table aria-label="training stats">
				<TableBody>
					{tableData.map((m, i) => (
						<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" size="small" sx={{ pl: 0, pr: 1, borderBottomColor: 'divider' }}>
								<Typography variant="caption" textTransform="uppercase" letterSpacing="0.05em" color={getColorFromType(types[0])[700]}>{m.name}</Typography>
							</TableCell>
							<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
								{m.data}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default Training