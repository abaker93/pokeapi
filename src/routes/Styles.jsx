import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container, Typography } from '@mui/material'
import { gradient } from '../utilities/gradient'
import { getColorFromType, getIconFromType, getTMFromType } from '../utilities/utilities'

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
			<Box my={5}>
				<Typography variant="h2">Type Colors</Typography>
			</Box>
				
			<Box my={5}>
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
			</Box>
			
			<Box my={5}>
				<Typography variant="h2">Type Icons</Typography>
				<Grid container columns={{ xs: 6, md: 19 }} spacing={1}>
					{typesArray.sort((a,b) => a.localeCompare(b)).map(t => (
						<Grid key={t} xs={1} md={1} sx={{ alignContent: 'center' }}>
							<Typography component="h3" variant="h6">{t}</Typography>
							{getIconFromType(t, { fontSize: '2rem', color: getColorFromType(t)[500] })}
						</Grid>
					))}
				</Grid>
			</Box>

			<Box my={5}>
				<Typography variant="h2">TM Icons</Typography>
				<Grid container columns={{ xs: 6, md: 19 }} spacing={1}>
					{typesArray.sort((a,b) => a.localeCompare(b)).map(t => (
						<Grid key={t} xs={1} md={1} sx={{ alignContent: 'center' }}>
							<Typography component="h3" variant="h6">{t}</Typography>
							{getTMFromType(t, { fontSize: '2rem' })}
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	)
}

export default Styles