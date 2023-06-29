import { Box, Card, CardActionArea, CardContent, Typography, alpha, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { poison, text } from '../../utilities/colors'
import { filterByLang } from "../../utilities/utilities";

const Breeding = props => {
	const { eggGroups, lang, color } = props.state
	
	// console.log(eggGroups)
	
	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Breeding</Typography>
			</Box>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h3">Egg Group{eggGroups.length > 1 ? 's' : null}</Typography>
			</Box>
			<Grid container spacing={1} sx={{ mb: 2 }}>
				{eggGroups.map((m) => (
					<Grid key={m.id} xs={12}>
						<Card variant="outlined" type={color}>
							<CardActionArea href={`/egg-groups/${m.name}`}>
								<CardContent>
									<Typography variant="body1">{filterByLang('name', m.names, lang)}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
			<Box>
				<Typography variant="h3">Egg Cycles</Typography>
			</Box>
		</Box>
	)
}

export default Breeding