import { Container, Typography } from "@mui/material";
import { FemaleSharp, MaleSharp } from "@mui/icons-material";

export default function PokemonAdditionalInfo (props) {
	const p = props[0];

	const female = p.gender_rate / 8;
	const male = 1 - female;
	const genderless = female < 0 || male < 0 ? true : false;

	return (
		<Container id="PokemonAdditionalInfo" className="grid">
			<Typography variant="h2">Additional Info</Typography>

			{!genderless ? (
				<div className="col gender grid">
					<Typography variant="h3">Gender</Typography>
					<div class="col">
						<div className="pie-chart" style={{ "--male-percentage": male * 100 }}></div>
					</div>
					<div class="col">
						<Typography variant="body1"><FemaleSharp sx={{ fontSize: '1em' }} /> {female * 100}%</Typography>
						<Typography variant="body1"><MaleSharp sx={{ fontSize: '1em' }} /> {male * 100}%</Typography>
					</div>
				</div>
			) : (
				<div className="col">
					<Typography variant="body1">Genderless</Typography>
				</div>
			)}
		</Container>
	)
}