import { Card, CardActionArea, CardContent, Chip, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

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
								<Chip size="large" type={p.types[0].type.name} label={a.ability.name} />
							</Grid>
						))
					}
				</Grid>

				<Grid xs={6}>
					{p.abilities
						.filter(a => a.is_hidden)
						.sort((a, b) => a - b)
						.map((a, index) => (
							<Chip key={index} className="hidden" size="large" type={p.types[0].type.name} label={a.ability.name} />
						))
					}
				</Grid>
			</Grid>

		</Container>
	)
}