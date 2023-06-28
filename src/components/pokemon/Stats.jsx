import { Box, LinearProgress, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { normalize } from "../../utilities/utilities"

const Stats = props => {
	const { stats } = props

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container spacing={1}>
				<Bar label="HP" stat={stats[0].base_stat} />
				<Bar label="ATT" stat={stats[1].base_stat} />
				<Bar label="DEF" stat={stats[2].base_stat} />
				<Bar label="SATT" stat={stats[3].base_stat} />
				<Bar label="SDEF" stat={stats[4].base_stat} />
				<Bar label="SPD" stat={stats[5].base_stat} />
			</Grid>
		</Box>
	)
}

const Bar = props => {
	const { label, stat } = props

	return (
		<Grid container spacing={1} xs={12} display="flex" alignItems="center">
			<Grid xs={1.5} display="flex" justifyContent="end">
				<Typography variant="h6" component="h3">{label}</Typography>
			</Grid>
			<Grid xs>
				<LinearProgress variant="determinate" value={normalize(stat)} />
			</Grid>
			<Grid xs={1}>
				<Typography component="p">{stat}</Typography>
			</Grid>
		</Grid>
	)
}

export default Stats