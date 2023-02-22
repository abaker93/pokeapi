import { Button, Skeleton, Typography } from "@mui/material";
import { formatDexId } from '../utilities';

const PokemonTitle = (props) => {
	const p = props[0];

	return (
		props.loading ? (
			<section id="pokemonTitle">
				<Skeleton width="80%">
					<Typography variant="h1" component="h1">.</Typography>
				</Skeleton>
				<Skeleton width="50%">
					<Typography variant="body" component="p">.</Typography>
				</Skeleton>
				<Skeleton width="40%">
					<Button />
				</Skeleton>
				<Skeleton width="40%">
					<Button />
				</Skeleton>
			</section>
		) : (
			<section id="pokemonTitle">
				<Typography variant="h1" component="h1">
					<Typography variant="body2" component="span">
						<Typography variant="caption" component="span">No.</Typography>
						{formatDexId(p.id)}
					</Typography>
					{p.name}
				</Typography>

				<Typography variant="body" component="p">
					{p.genera.filter(g => g.language.name === 'en').map(g => g.genus)}
				</Typography>

				<Button type="button">{p.types[0].type.name}</Button>
				{p.types[1] ? (
					<Button type="button">{p.types[1].type.name}</Button>
				)	: null}
			</section>
		)
	)
}

export default PokemonTitle;