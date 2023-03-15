import { Card, CardActionArea, CardContent, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { eggCycleSteps } from "../../utilities/data";

export default function PokemonBreeding(props) {
	const loading = props.loading;
	const eggGroups = props.eggGroups;
	const pokemon = props.pokemon;

	// TODO:		Loading skeleton elements

	return (
		<Container id="PokemonBreeding" sx={{ mb: 5 }}>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<Typography variant="h2" mb={1}>Breeding</Typography>
					<Grid container spacing={2}>
						<Grid container xs={6} spacing={0}>
							<Grid xs={12} mb={1}>
								<Typography variant="h3">Egg Group{eggGroups.length > 1 ? `s` : null}</Typography>
							</Grid>
							<Grid container xs={12} spacing={2}>
								{eggGroups.map((g, index) => (
									g.names
										.filter(f => f.language.name === "en")
										.map(m => (
											<Grid key={index} xs={12}>
												<Card variant="type" type={pokemon.types[0].type.name}>
													<CardActionArea>
														<CardContent href={`./egg-group/${m.name}`}>
															<Typography variant="body1">{m.name}</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Grid>
										))
								))}
							</Grid>
						</Grid>
						<Grid xs={6}>
							<Typography variant="h3" sx={{ mb: 1 }}>Egg Cycles</Typography>
							<Typography variant="body1">{pokemon.hatch_counter}</Typography>
							<Typography variant="caption">
								{
									((pokemon.hatch_counter / 2) * eggCycleSteps)
										.toLocaleString('en', {useGrouping: true})
								} - {
									(pokemon.hatch_counter * eggCycleSteps)
										.toLocaleString('en', {useGrouping: true})
								} steps
							</Typography>
						</Grid>
					</Grid>
				</>
			)}
		</Container>
	)
}