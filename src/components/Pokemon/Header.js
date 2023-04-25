import { Box, Chip, Container, Grid, Link, Skeleton, Typography } from "@mui/material";
import { formatDexId, getPokeName } from '../../utilities/utilities';
import TypeIcon from '../../assets/TypeIcons';
import { Wave1, Wave2, Wave3, Wave4 } from '../../assets/Waves';

const Header = props => {
	return (
		<>
			<Hero {...props} />
			<Title {... props} />
		</>
	)
}

const Hero = p => {
	if (p.loading) {
		return (
			<Skeleton
				variant="rectangle"
				sx={{
					width: "100%",
					height: "35vh",
					pt: "56px",
					mb: "1.25rem"
				}}
			/>
		)
	}

	return (
		<Container id="PokeHeader" component="header" maxWidth="false">
			<Typography variant="japanese" component="span" className="japanese">{getPokeName(p.names, "ja")}</Typography>
			<img className="poke-img" src={p.sprites.other["official-artwork"].front_default} alt={p.name} />
			{p.prev !== null ? (
				<Link href={`/pokemon/${formatDexId(p.id - 1)}`}>
					<img className="prev-poke-img" src={p.prev.artwork} alt={p.prev.name} />
				</Link>
			) : null}
			{p.next !== null ? (
				<Link href={`/pokemon/${formatDexId(p.id + 1)}`}>
					<img className="next-poke-img" src={p.next.artwork} alt={p.next.name} />
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
}

const Title = p => {
	if (p.loading) {
		return (
			<>
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
			</>
		)
	}

	return (
		<Container id="PokeTitle" sx={{ mb: 5 }}>
			<Typography variant="h3" component="h1">
				<Typography variant="h3" component="span">
					<Typography variant="h3" component="span">No.</Typography>
					{formatDexId(p.id)}
				</Typography>
				{getPokeName(p.names, "en")}
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
}

export default Header;