import { Container, LinearProgress, Typography } from "@mui/material";

export default function PokemonStats(props) {
	const p = props[0];

	return (
		<Container>
			<Typography component="h3">HP</Typography>
			<LinearProgress variant="determinate" value={p.stats[0].base_stat} />
			<Typography component="p">{p.stats[0].base_stat}</Typography>

			<Typography component="h3">ATT</Typography>
			<LinearProgress variant="determinate" value={p.stats[1].base_stat} />
			<Typography components="p">{p.stats[1].base_stat}</Typography>

			<Typography component="h3">DEF</Typography>
			<LinearProgress variant="determinate" value={p.stats[2].base_stat} />
			<Typography components="p">{p.stats[2].base_stat}</Typography>

			<Typography component="h3">SP.ATT</Typography>
			<LinearProgress variant="determinate" value={p.stats[3].base_stat} />
			<Typography components="p">{p.stats[3].base_stat}</Typography>

			<Typography component="h3">SP.DEF</Typography>
			<LinearProgress variant="determinate" value={p.stats[4].base_stat} />
			<Typography components="p">{p.stats[4].base_stat}</Typography>

			<Typography component="h3">SPD</Typography>
			<LinearProgress variant="determinate" value={p.stats[5].base_stat} />
			<Typography components="p">{p.stats[5].base_stat}</Typography>
		</Container>
	)
}