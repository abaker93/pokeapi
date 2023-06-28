import { Box, Chip, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { calcDefense, filterByLang } from "../../utilities/utilities"
import TypeIcon from "../../assets/TypeIcon";
import { typesArray } from "../../utilities/types";

const Defense = props => {
	const { lang, pokemon, type1, type2 } = props

	// TODO:	dude... the calcDefense must be so fucked... doesn't match pokemondb AT ALL
	
	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h2">Type Defenses</Typography>
				<Typography variant="p">The effectiveness of each type on {filterByLang('name', pokemon.names, lang)}</Typography>
			</Box>
			
			<Grid container spacing={1.5} columns={9}>
				{typesArray.map((type, index) => (
					<Grid xs={1} key={index}>
						<Chip variant="type" direction="vertical" icon={<TypeIcon type={type} />} type={type} size="small" label={calcDefense(type1, type2, type)} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Defense