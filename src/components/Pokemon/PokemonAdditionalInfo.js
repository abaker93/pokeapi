import { Container, Typography } from "@mui/material";
import { FemaleSharp, MaleSharp } from "@mui/icons-material";
import { calcMeasurement } from "../../utilities/utilities";

export default function PokemonAdditionalInfo (props) {
	const p = props;

	const female = p.gender_rate / 8;
	const male = 1 - female;
	const genderless = female < 0 || male < 0 ? true : false;

	return (
		<Container id="PokemonAdditionalInfo" className="grid">
			<Typography variant="h2">Additional Info</Typography>

			{!genderless ? (
				<div className="col gender grid">
					<Typography variant="h3">Gender</Typography>
					<div className="col">
						<div className="pie-chart" style={{ "--male-percentage": male * 100 }}></div>
					</div>
					<div className="col">
						<Typography variant="body1"><FemaleSharp sx={{ fontSize: '1em' }} /> {female * 100}%</Typography>
						<Typography variant="body1"><MaleSharp sx={{ fontSize: '1em' }} /> {male * 100}%</Typography>
					</div>
				</div>
			) : (
				<div className="col">
					<Typography variant="body1">Genderless</Typography>
				</div>
			)}

			<div className="col">
				<Typography variant="h3">Height</Typography>
				<Typography variant="body1">{calcMeasurement(p.height, "in")}</Typography>
				<Typography variant="body1">{calcMeasurement(p.height, "cm")}</Typography>
			</div>

			<div className="col">
				<Typography variant="h3">Weight</Typography>
				<Typography variant="body1">{calcMeasurement(p.weight, "lbs")}</Typography>
				<Typography variant="body1">{calcMeasurement(p.weight, "kg")}</Typography>
			</div>
		</Container>
	)
}