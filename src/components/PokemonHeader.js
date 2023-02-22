import { Link } from "react-router-dom";
import { formatDexId } from '../utilities/utilities';
import { Box, Skeleton, Typography } from "@mui/material";

const PokemonHeader = (props) => {
	const p = props[0];

	return (
		props.loading ? (
			<Skeleton
				variant="rectangle"
				sx={{
					width: "100%",
					height: "30vh",
					marginBottom: "4rem"
				}}
			/>
		) : (
			<header>
				<Box className="top">
					<Typography variant="body" component="span" className="japanese">
						{p.names.filter(n => n.language.name === 'ja').map(n => n.name)}
					</Typography>
					<img
						className="poke-img"
						src={p.sprites.other["official-artwork"].front_default}
						alt={p.name}
					/>
					{p.prev.name !== null ? (
						<Link to={`/pokemon/${formatDexId(p.id - 1)}`}>
							<img
								className="prev-poke-img"
								src={p.prev.artwork}
								alt={p.prev.name}
							/>
						</Link>
					) : null}
					{p.next.name !== null ? (
						<Link to={`/pokemon/${formatDexId(p.id + 1)}`}>
							<img
								className="next-poke-img"
								src={p.next.artwork}
								alt={p.next.name}
							/>
						</Link>
					) : null}
				</Box>
			</header>
		)
	)
}

export default PokemonHeader;