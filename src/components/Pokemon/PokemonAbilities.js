import { Card, CardActionArea, CardContent, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { capitalize } from "../../utilities/utilities";

export default function PokemonAbilities(props) {
	const p = props;

	return (
		<Container id="PokemonAbilities" sx={{ mb: 5 }}>
			<Typography variant="h2" mb={1}>Abilities</Typography>

			<Grid container spacing={2}>
				<Grid container xs={6} spacing={2}>
					{p.abilities
						.filter(a => !a.is_hidden)
						.sort((a, b) => a - b)
						.map((a, index) => (
							<Grid key={index} xs={12}>
								<Card variant="type" type={p.types[0].type.name}>
									<CardActionArea href={`./ability/${a.ability.name}`}>
										<CardContent>
											<Typography variant="body1">{capitalize(a.ability.name)}</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))
					}
				</Grid>

				<Grid xs={6}>
					{p.abilities
						.filter(a => a.is_hidden)
						.sort((a, b) => a - b)
						.map((a, index) => (
							<Card key={index} variant="type" type={p.types[0].type.name}>
								<CardActionArea href={`./ability/${a.ability.name}`}>
									<CardContent>
										<Typography variant="body1">{capitalize(a.ability.name)}</Typography>
										<Typography variant="caption">hidden</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						))
					}
				</Grid>
			</Grid>

		</Container>
	)
}