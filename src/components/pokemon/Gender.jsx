import { FemaleSharp, MaleSharp } from '@mui/icons-material'
import { Box, Tooltip, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { female as femaleColor, male as maleColor } from '../../utilities/colors'


const Gender = props => {
	const { lang, pokemon, types } = props.state

	let female = pokemon.gender_rate / 8
	const male = (1 - female) * 100
	female = female * 100
	const genderless = female < 0 || male < 0
	
	return (
		<>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Gender Ratio</Typography>
			</Box>
			{!genderless ? (
				<Grid container spacing={1}>
					<Grid xs>
						<Tooltip followCursor title={
							<>
								<Typography>Female: {female}%</Typography>
								<Typography>Male: {male}%</Typography>
							</>
						}>
							<Box sx={{
								aspectRatio:	1 / 1,
								background:		`conic-gradient(${maleColor} ${male}%, ${femaleColor} 0%)`,
								borderRadius:	'50%',
								margin:				'0 auto',
								maxWidth:			'100px',
								width:				'100%',
							}} />
						</Tooltip>
					</Grid>
					<Grid xs>
						{female > 0 ? (
							<Typography color={femaleColor}>
								<FemaleSharp sx={{ fontSize: '1.3em', mb: '-4px' }} />{female}%
							</Typography>
						) : (
							<Typography color="disabled">
								<FemaleSharp sx={{ fontSize: '1.3em', mb: '-4px' }} />{female}%
							</Typography>
						)}

						{male > 0 ? (
							<Typography color={maleColor}>
								<MaleSharp sx={{ fontSize: '1.2em', mb: '-4px' }} />{male}%
							</Typography>
						) : (
							<Typography color="disabled">
								<MaleSharp sx={{ fontSize: '1.2em', mb: '-4px' }} />{male}%
							</Typography>
						)}
					</Grid>
				</Grid>
			) : (
				Genderless
			)}
			
		</>
	)
}

export default Gender