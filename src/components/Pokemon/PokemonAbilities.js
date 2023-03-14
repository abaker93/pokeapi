import { capitalize, Card, CardActionArea, CardContent, Container, Typography } from "@mui/material";

export default function PokemonAbilities(props) {
	const p = props;

	return (
		<Container id="PokemonAbilities" className="grid">
			<Typography variant="h2">Abilities</Typography>
			<div className="col grid">
				{p.abilities
					.filter(a => !a.is_hidden)
					.sort((a, b) => a - b)
					.map((a, index) => (
						<Card key={index} variant="type" type={p.types[0].type.name}>
							<CardActionArea href={`./ability/${a.ability.name}`}>
								<CardContent>
									<Typography variant="body1">{capitalize(a.ability.name)}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))
				}
			</div>
			<div className="col grid">
				{p.abilities
					.filter(a => a.is_hidden)
					.sort((a, b) => a - b)
					.map((a, index) => (
						<Card key={index} variant="type" type={p.types[0].type.name}>
							<CardActionArea>
								<CardContent>
									<Typography variant="body1">{capitalize(a.ability.name)}</Typography>
									<Typography variant="caption">hidden</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))
				}
			</div>
		</Container>
	)
}