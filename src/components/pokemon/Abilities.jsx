import { Box, Card, CardActionArea, CardContent, Typography, alpha, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { poison, text } from '../../utilities/colors'
import { filterByLang } from "../../utilities/utilities";

const AbilitiesCard = styled(Card)(() => ({
	backgroundColor: alpha(poison[100], 0.3),
	borderColor: poison[500],
	'& .MuiCardContent-root': {
		padding: 12,
		'&:last-child': {
			paddingBottom:	12,
		}
	}
	
}))

const Abilities = props => {
	const { abilities, lang, pokemon } = props

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h2">Abilities</Typography>
			</Box>
			<Grid container spacing={1}>
				{abilities.map((m) => (
					<Grid key={m.slot} xs={12}>
						<AbilitiesCard variant="outlined">
							<CardActionArea href={`/abilities/${m.ability.name}`}>
								<CardContent>
									{m.is_hidden ? (
										<>
											<Typography variant="body1" sx={{ mb: '-5px' }}>{filterByLang('name', m.ability.names, lang)}</Typography>
											<Typography variant="caption" fontStyle="italic" color={text[300]} sx={{ ml: 1 }}>Hidden Ability</Typography>
										</>
									) : (
										<Typography variant="body1">{filterByLang('name', m.ability.names, lang)}</Typography>
									)}
								</CardContent>
							</CardActionArea>
						</AbilitiesCard>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Abilities