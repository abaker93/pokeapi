import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

import StatBar from "../../utilities/components/StatBar";
import { getColorFromType, normalize } from "../../utilities/utilities"


const Stats = props => {
	const { pokemon, types } = props.state

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container spacing={1}>
				<Bar label="HP" stat={pokemon.stats[0].base_stat} types={types} />
				<Bar label="ATT" stat={pokemon.stats[1].base_stat} types={types} />
				<Bar label="DEF" stat={pokemon.stats[2].base_stat} types={types} />
				<Bar label="SATT" stat={pokemon.stats[3].base_stat} types={types} />
				<Bar label="SDEF" stat={pokemon.stats[4].base_stat} types={types} />
				<Bar label="SPD" stat={pokemon.stats[5].base_stat} types={types} />
			</Grid>
		</Box>
	)
}


const Bar = props => {
	const { types, label, stat } = props

	return (
		<Grid container spacing={1} xs={12} display="flex" alignItems="center">
			<Grid xs={1.5} display="flex" justifyContent="end">
				<Typography variant="h6" component="h3">{label}</Typography>
			</Grid>
			<Grid xs>
				<StatBar variant="determinate" types={types} value={normalize(stat)} />
			</Grid>
			<Grid xs={1}>
				<Typography component="p">{stat}</Typography>
			</Grid>
		</Grid>
	)
}

export default Stats