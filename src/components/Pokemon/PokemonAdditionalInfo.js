import { Chip, Container, Typography } from "@mui/material";
import { FemaleSharp, MaleSharp } from "@mui/icons-material";
import { calcMeasurement } from "../../utilities/utilities";

export default function PokemonAdditionalInfo (props) {
	const p = props;

	const female = p.gender_rate / 8;
	const male = 1 - female;
	const genderless = female < 0 || male < 0 ? true : false;

	return (
		<Container id="PokemonAdditionalInfo">
			<Typography variant="h2">Additional Info</Typography>

			<div className="row grid">
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
			</div>

			<div className="row">
				<div className="col">
					<Typography variant="h3">EV Yield</Typography>
					{p.stats.filter(f => f.effort > 0).map(m => (
						<Chip size="small" label={`${m.effort} ${m.stat.name}`} />
					))}
				</div>
			</div>

			<div className="row">
				<div className="col">
					<Typography component="h4" variant="h6">Catch Rate</Typography>
				</div>
				<div className="col">
					{/* // TODO: need to figure out math for capture rate with a reg pokebal, full hp */}
					<Typography variant="body1">{p.capture_rate}</Typography>
				</div>
				<div className="col">
					<Typography component="h4" variant="h6">Base Friendship</Typography>
				</div>
				<div className="col">
					<Typography variant="body1"></Typography>
				</div>
				<div className="col">
					<Typography component="h4" variant="h6">Base Experience</Typography>
				</div>
				<div className="col">
					{/* // TODO: need to figure out math for capture rate with a reg pokebal, full hp */}
					<Typography variant="body1">{p.base_experience}</Typography>
				</div>
				<div className="col">
					<Typography component="h4" variant="h6">Growth Rate</Typography>
				</div>
				<div className="col">
					{/* // TODO: need to figure out math for capture rate with a reg pokebal, full hp */}
					<Typography variant="body1">{p.growth_rate.name}</Typography>
				</div>
			</div>
		</Container>
	)
}