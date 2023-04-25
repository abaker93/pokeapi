import { Chip, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import TypeIcon from "../../assets/TypeIcons";
import { typesArray } from "../../utilities/data";
import { calcDefense } from "../../utilities/utilities";

const Defense = p => {
	return (
		<Container id="PokeDefense" sx={{ mb: 5 }}>
			<Grid container rowSpacing={2} justifyContent="space-between">
				{typesArray.map((type, index) => (
					<Grid key={index} xs={1.33} display="flex" justifyContent="center">
						<DefenseChip
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

const DefenseChip = p => {
	return (
		<Chip
			variant="type"
			type={p.offense}
			orientation="vertical"
			icon={<TypeIcon type={p.offense} />}
			label={calcDefense(p.defense[0], p.defense[1], p.offense)}
		/>
	)
}

export default Defense;