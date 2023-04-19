import { Box, Container, Link, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const updated = {
	version: "1.0.0",
	date: "April 19, 2023"
}

const notesData = [
	{
		id: 1,
		title: "Missing Data",
		text:
			<>
				I get most of the data from <Link href="https://pokeapi.co/" underline="hover">PokéAPI</Link>, a free and open Pokédex API. This data is updated by volunteers and not immediately available upon game release. As of this <Link href="#update" underline="hover">update</Link>, here's the list of missing data I've noticed:
				<ul>
					<li>Gen VIII - incomplete data (specifically for Sword & Shield)</li>
					<li>Gen IX - missing all Pokédex Entries & Wild Encounter data</li>
				</ul>
			</>
	}
]

const Notes = () => {
	return (
		<Container style={{ marginTop: 70 }}>
			<Box mb={3}>
				<Typography variant="h1">Developer Notes</Typography>
			</Box>
			{notesData.map(n => (
				<Grid container spacing={2} mb={3}>
					<Grid xs="auto" >
						<Typography variant="h6" component="p">{n.id}</Typography>
					</Grid>
					<Grid xs>
						<Typography variant="h2" mb={1}>{n.title}</Typography>
						<Typography variant="body1">{n.text}</Typography>
					</Grid>
				</Grid>
			))}
			<Paper id="update" elevation={4} variant="outlined" sx={{ p: 3 }}>
				<Typography variant="body1">Version: {updated.version}</Typography>
				<Typography variant="body1">Last Updated: {updated.date}</Typography>
			</Paper>
		</Container>
	)
}

export default Notes;