import { Box, CardActionArea, CardContent, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import TypeCard from "../../utilities/components/TypeCard";
import { filterByLang, getColorFromType } from "../../utilities/utilities";


const Abilities = props => {
	const { abilities, lang, types } = props.state
	
	return (
		<>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Abilities</Typography>
			</Box>
			<Grid container spacing={1}>
				{abilities.sort((a,b) => a.slot - b.slot).map((m) => (
					<Grid key={m.slot} xs={12}>
						<TypeCard variant="outlined" color={getColorFromType(types[0])}>
							<CardActionArea href={`/abilities/${m.ability.name}`}>
								<CardContent>
									{m.is_hidden ? (
										<>
											<Typography variant="body1" sx={{ mb: '-5px' }}>{filterByLang('name', m.ability.names, lang)}</Typography>
											<Typography variant="caption" fontStyle="italic" color={getColorFromType(types[0])[500]} sx={{ ml: 1 }}>Hidden Ability</Typography>
										</>
									) : (
										<Typography variant="body1">{filterByLang('name', m.ability.names, lang)}</Typography>
									)}
								</CardContent>
							</CardActionArea>
						</TypeCard>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default Abilities