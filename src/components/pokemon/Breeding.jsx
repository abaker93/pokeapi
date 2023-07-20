import { Box, CardActionArea, CardContent, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import TypeCard from '../../utilities/components/TypeCard'
import { filterByLang, getColorFromType } from '../../utilities/utilities'
import { text } from "../../utilities/colors"


const Breeding = props => {
	const { eggGroups, lang, pokemon, types } = props.state

	const eggCycleSteps = 275
	
	return (
		<>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Egg Group{eggGroups.length > 1 ? 's' : null}</Typography>
			</Box>
			<Grid container spacing={1} sx={{ mb: 2 }}>
				{eggGroups.map((m) => (
					<Grid key={m.id} xs={12}>
						<TypeCard variant="outlined" color={getColorFromType(types[0])}>
							<CardActionArea href={`/egg-group/${m.name}`}>
								<CardContent>
									{m.name === 'no-eggs' ? (
										<>
											<Typography variant="body1" sx={{ mb: '-5px' }}>{filterByLang('name', m.names, lang)}</Typography>
											<Typography variant="caption" fontStyle="italic" color={getColorFromType(types[0])[500]} sx={{ ml: 1 }}>{filterByLang('name', pokemon.names, lang)} can't breed</Typography>
										</>
									) : (
										<Typography variant="body1">{filterByLang('name', m.names, lang)}</Typography>
									)}
								</CardContent>
							</CardActionArea>
						</TypeCard>
					</Grid>
				))}
			</Grid>
			<Box sx={{ mb: 1 }}>
				<Typography variant="h2">Egg Cycles</Typography>
			</Box>
			<Box>
				<Typography variant="body1">
					{pokemon.hatch_counter}
					<Typography variant="caption" fontStyle="italic" sx={{ ml: 1 }} color={text[300]}>
						({((pokemon.hatch_counter / 2) * eggCycleSteps).toLocaleString('en', {useGrouping: true})} - {(pokemon.hatch_counter * eggCycleSteps).toLocaleString('en', {useGrouping: true})} steps)
					</Typography>
				</Typography>
			</Box>
		</>
	)
}

export default Breeding