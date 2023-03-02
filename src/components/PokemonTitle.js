import { Chip, Container, Skeleton, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import { capitalize, formatDexId } from '../utilities/utilities';
import TypeIcon from "../assets/TypeIcons";

const PokemonTitle = (props) => {
	const p = props[0];

	return (
		props.loading ? (
			<Container id="PokemonTitle">
				<Skeleton width="80%">
					<Typography variant="h1" component="h1">.</Typography>
				</Skeleton>
				<Skeleton width="50%">
					<Typography variant="body" component="p">.</Typography>
				</Skeleton>
				<Grid container spacing={2}>
					<Grid xs={4}>
						<Skeleton variant="rounded" width="100%" height="3rem" />
					</Grid>
					<Grid xs={4}>
						<Skeleton variant="rounded" width="100%" height="3rem" />
					</Grid>
				</Grid>
			</Container>
		) : (
			<Container id="PokemonTitle">
				<Typography variant="h3" component="h1">
					<Typography variant="h3" component="span">
						<Typography variant="h3" component="span">No.</Typography>
						{formatDexId(p.id)}
					</Typography>
					{capitalize(p.name)}
				</Typography>

				<Typography variant="body" component="p">
					{p.genera.filter(g => g.language.name === 'en').map(g => g.genus)}
				</Typography>

				<Chip variant="type" type={p.types[0].type.name} icon={<TypeIcon type={p.types[0].type.name} />} label={p.types[0].type.name} />
				{p.types[1] ? (
					<Chip variant="type" type={p.types[1].type.name} icon={<TypeIcon type={p.types[1].type.name} />} label={p.types[1].type.name} sx={{ ml: 1 }} />
				) : null}
			</Container>
		)
	)
}

export default PokemonTitle;