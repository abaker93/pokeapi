import { Box, Card as MUICard, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { formatDexId } from "../../utilities/utilities"
import { gray, text } from "../../utilities/colors";

const Card = props => {
	return(
		<MUICard
			variant="pokedex"
			type1={props.types[0].type}
			type2={
				props.types[1].type !== null
					? props.types[1].type
					: props.types[0].type
			}
		>
			<CardActionArea sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<CardMedia
					component="img"
					image={props.sprite}
					alt={`${props.name} official artwork`}
					sx={{
						width: '120px',
						maxWidth: '100%',
						position: 'absolute',
						top: '-20px',
						left: '-16px',
					}}
				/>
				<CardContent sx={{ width: 'calc(100% - 100px)' }}>
					<Box sx={{ mb: 0.5 }}>
						<Typography variant="h6" component="h2" fontWeight="medium">
							<Typography component="span" fontSize={12} fontWeight="medium" sx={{ mr: 0.5, opacity: 0.7 }}>
								<Typography component="span" fontSize={8} fontWeight="medium" textTransform="uppercase">
									No.
								</Typography>
								{formatDexId(props.id, props.dexLength)}
							</Typography>
							{props.name}
						</Typography>
					</Box>
					<Box>
						<Chip variant="type" size="xsmall" type={props.types[0].type} label={props.types[0].type} sx={{ mr: 1, }} />
						{props.types[1].type !== null
							? <Chip variant="type" size="xsmall" type={props.types[1].type} label={props.types[1].type} />
							: null
						}
					</Box>
				</CardContent>
			</CardActionArea>
		</MUICard>
	)
}

export default Card