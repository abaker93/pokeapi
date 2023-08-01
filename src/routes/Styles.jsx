import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container, Typography } from '@mui/material'
import { gradient } from '../utilities/gradient'

const Styles = () => {
	const typesArray = [
		'fighting',
		'psychic',
		'fire',
		'ground',
		'electric',
		'bug',
		'grass',
		'ice',
		'steel',
		'water',
		'dragon',
		'ghost',
		'flying',
		'dark',
		'poison',
		'fairy',
		'rock',
		'normal',
	]

	return (
		<Container maxWidth={false} sx={{ p: 3 }}>
			<Typography variant="h1">Styles</Typography>
			<Typography variant="h2">Type Colors</Typography>
			
			<Typography variant="h2">Type Gradients</Typography>
			<Grid container columns={1} spacing={1}>
				{typesArray.map((t1, i) => (
					<Grid key={i} container columns={{ xs: 6, md: 19}} xs={1} spacing={1}>
						<Grid xs={6} md={1} sx={{ alignContent: 'center' }}>
							<Typography variant="h3">{t1}</Typography>
						</Grid>
						{typesArray.map((t2, j) => (
							<Grid key={j} xs={1}>
								<Box sx={{
									background: `linear-gradient(45deg, ${gradient[t1][t2]})`,
									borderRadius: 0.5,
									aspectRatio: '1/1',
									p: 1,
									'& > p': { m: 0 }
								}}>
									<p>{t1}</p>
									<p>{t2}</p>
								</Box>
							</Grid>
						))}
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Styles