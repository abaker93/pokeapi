import { Box, Card as MUICard, CardContent, Chip, Typography, CardActionArea } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { formatDexId } from "../../utilities/utilities"

const Card = props => {
	return(
		<MUICard
			// variant="pokedex"
			type1={props.types[0].type}
			type2={
				props.types[1].type !== null
					? props.types[1].type
					: props.types[0].type
			}
		>
			<CardActionArea>
				<CardContent>
					<Grid container columnSpacing={2}>
						<Grid xs={4}>
							<img src={props.sprite} alt={props.name} style={{ maxWidth: "100%" }} />
						</Grid>
						<Grid xs={8}>
							<Box>
								<Typography variant="h6" component="h2" fontWeight="medium">
									<Typography component="span">
										<Typography component="span">
											No.
										</Typography>
										{formatDexId(props.id, props.dexLength)}
									</Typography>
									{props.name}
								</Typography>
							</Box>
							<Box>
								<Chip size="xsmall" label={props.types[0].type} />
								{props.types[1].type !== null
									? <Chip size="xsmall" label={props.types[1].type} />
									: null
								}
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</MUICard>
	)
}

export default Card