import { formatDexId } from '../../utilities/utilities';
import { Box, Container, Link, Skeleton, Typography } from "@mui/material";
import { Wave1, Wave2, Wave3, Wave4 } from '../../assets/Waves';

const PokemonHeader = (props) => {
	const p = props[0];

	return (
		props.loading ? (
			<Skeleton
				variant="rectangle"
				sx={{
					width: "100%",
					height: "35vh",
					pt: "56px",
					mb: "1.25rem"
				}}
			/>
		) : (
			<Container
				id="PokemonHeader"
				component="header"
				maxWidth="false"
			>
				<Typography variant="japanese" component="span" className="japanese">
					{p.names.filter(n => n.language.name === 'ja').map(n => n.name)}
				</Typography>
				<img
					className="poke-img"
					src={p.sprites.other["official-artwork"].front_default}
					alt={p.name}
				/>
				{p.prev.name !== null ? (
					<Link href={`/pokemon/${formatDexId(p.id - 1)}`}>
						<img
							className="prev-poke-img"
							src={p.prev.artwork}
							alt={p.prev.name}
						/>
					</Link>
				) : null}
				{p.next.name !== null ? (
					<Link href={`/pokemon/${formatDexId(p.id + 1)}`}>
						<img
							className="next-poke-img"
							src={p.next.artwork}
							alt={p.next.name}
						/>
					</Link>
				) : null}
				<Box className="waves">
					<Wave1 fill="rgba(255,255,255,0.7)" />
					<Wave2 fill="rgba(255,255,255,0.7)" />
					<Wave3 fill="rgba(255,255,255,0.7)" />
					<Wave4 fill="rgba(255,255,255,1)" />
				</Box>
			</Container>
		)
	)
}

export default PokemonHeader;