import { Chip, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { FemaleSharp, MaleSharp } from "@mui/icons-material";
import { calcMeasurement } from "../../utilities/utilities";

export default function PokemonAdditionalInfo (props) {
	const p = props;

	const female = p.gender_rate / 8;
	const male = 1 - female;
	const genderless = female < 0 || male < 0 ? true : false;

	return (
		<Container id="PokemonAdditionalInfo">
			<Typography variant="h2" mb={1}>Additional Info</Typography>

			<Grid container mb={5}>
				<Grid container xs={6}>
					<Grid xs={12} mb={1}>
						<Typography variant="h3">Gender</Typography>
					</Grid>
					{!genderless ? (
						<>
							<Grid xs={6}>
								<div className="pie-chart" style={{ "--male-percentage": male * 100 }}></div>
							</Grid>
							<Grid xs={6}>
								<Typography variant="body1"><FemaleSharp sx={{ fontSize: '1em' }} /> {female * 100}%</Typography>
								<Typography variant="body1"><MaleSharp sx={{ fontSize: '1em' }} /> {male * 100}%</Typography>
							</Grid>
						</>
					) : (
						<Grid xs={12}>
							<Typography variant="body1">Genderless</Typography>
						</Grid>
					)}
				</Grid>

				<Grid xs={3}>
					<Typography variant="h3" mb={1}>Height</Typography>
					<Typography variant="body1">{calcMeasurement(p.height, "in")}</Typography>
					<Typography variant="body1">{calcMeasurement(p.height, "cm")}</Typography>
				</Grid>

				<div xs={3}>
					<Typography variant="h3" mb={1}>Weight</Typography>
					<Typography variant="body1">{calcMeasurement(p.weight, "lbs")}</Typography>
					<Typography variant="body1">{calcMeasurement(p.weight, "kg")}</Typography>
				</div>
			</Grid>

			<Grid container mb={5}>
				<Grid xs>
					<Typography variant="h3" mb={1}>EV Yield</Typography>
					{p.stats.filter(f => f.effort > 0).map(m => (
						<Chip size="small" label={`${m.effort} ${m.stat.name}`} />
					))}
				</Grid>
			</Grid>

			<Grid container mb={5} rowSpacing={1} columnSpacing={2}>
				<Grid xs={7}>
					<Typography component="h4" variant="h6">Catch Rate</Typography>
				</Grid>
				<Grid xs={5}>
					{/* // TODO: need to figure out math for capture rate with a reg pokebal, full hp */}
					<Typography variant="body1">{p.capture_rate}</Typography>
				</Grid>
				<Grid xs={7}>
					<Typography component="h4" variant="h6">Base Friendship</Typography>
				</Grid>
				<Grid xs={5}>
					<Typography variant="body1"></Typography>
				</Grid>
				<Grid xs={7}>
					<Typography component="h4" variant="h6">Base Experience</Typography>
				</Grid>
				<Grid xs={5}>
					<Typography variant="body1">{p.base_experience}</Typography>
				</Grid>
				<Grid xs={7}>
					<Typography component="h4" variant="h6">Growth Rate</Typography>
				</Grid>
				<Grid xs={5}>
					<Typography variant="body1">{p.growth_rate.name}</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}