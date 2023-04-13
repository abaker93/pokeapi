import { Chip, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import TypeIcon from "../../assets/TypeIcons";
import { typesArray } from "../../utilities/data";
import { calcDefense } from "../../utilities/utilities";

export default function PokemonDefense(props) {
	const p = props;

	return (
		<Container id="PokemonDefense" sx={{ mb: 5 }}>
			<Grid container rowSpacing={2} justifyContent="space-between">
				{typesArray.map((type, index) => (
					<Grid key={index} xs={1.33} display="flex" justifyContent="center">
						<PokemonDefenseChip
							defense={[
								p.types[0].type.name,
								p.types[1] ? p.types[1].type.name : null
							]}
							offense={type}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

function PokemonDefenseChip(props) {
	return (
		<Chip
			variant="type"
			type={props.offense}
			orientation="vertical"
			icon={<TypeIcon type={props.offense} />}
			label={calcDefense(props.defense[0], props.defense[1], props.offense)}
		/>
	)
}