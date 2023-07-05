import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { calcMeasurement } from '../../utilities/utilities'


const Size = props => {
	const { pokemon } = props.state
	
	return (
		<>
			<Grid container>
				<Grid xs>
					<Box sx={{ mb: 2 }}>
						<Typography variant="h2">Height</Typography>
					</Box>
					<Box sx={{ mb: 2 }}>
						<Typography>{calcMeasurement(pokemon.height, 'in')}</Typography>
						<Typography>{calcMeasurement(pokemon.height, 'cm')}</Typography>
					</Box>
				</Grid>
				<Grid xs>
					<Box sx={{ mb: 2 }}>
						<Typography variant="h2">Weight</Typography>
					</Box>
					<Box sx={{ mb: 2 }}>
						<Typography>{calcMeasurement(pokemon.weight, 'lb')}</Typography>
						<Typography>{calcMeasurement(pokemon.weight, 'kg')}</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default Size