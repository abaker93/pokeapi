import { Card, CardActionArea, CardContent, Chip, Link, Skeleton, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { formatDexId } from "../utilities/utilities";

const PokedexCard = (props) => {
	let p = props;

	return (
		props.loading ? (
			<Skeleton width="100%" height="100px" />
		) : (
			<Link href={`/pokemon/${formatDexId(p.id)}`} underline="none">
				<Card
					data-type-one={p.types[0].type.name}
					data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
				>
					<CardActionArea>
						<CardContent>
							<Grid container spacing={2}>
								<Grid xs={5}>
									<img
										src={p.sprites.other["official-artwork"].front_default}
										alt={p.name}
									/>
								</Grid>
								<Grid container xs={7}>
									<Grid xs={12}>
										<Typography variant="h6" component="h2" sx={{ textTransform: "capitalize" }}>
											<Typography component="span" sx={{ fontSize: "0.75em", marginRight: 4 }}>
												<Typography component="span" sx={{ fontSize: "0.75em", marginRight: 1 }}>No.</Typography>
												{formatDexId(p.id)}
											</Typography>
											{p.name}
										</Typography>
									</Grid>
									<Grid container xs={12}>
										<Chip variant="type" size="small" type={p.types[0].type.name} label={p.types[0].type.name} />
										{p.types[1] ? <Chip variant="type" size="small" type={p.types[1].type.name} label={p.types[1].type.name} sx={{ ml: 1 }} /> : null}
									</Grid>
									<Grid container xs={12}>
										<Grid xs>
											<Typography variant="caption" component="h3">HP</Typography>
											<Typography variant="caption" component="p">{p.stats[0].base_stat}</Typography>
										</Grid>
										<Grid xs>
											<Typography variant="caption" component="h3">ATT</Typography>
											<Typography variant="caption" component="p">{p.stats[1].base_stat}</Typography>
										</Grid>
										<Grid xs>
											<Typography variant="caption" component="h3">DEF</Typography>
											<Typography variant="caption" component="p">{p.stats[2].base_stat}</Typography>
										</Grid>
										<Grid xs>
											<Typography variant="caption" component="h3">SP.ATT</Typography>
											<Typography variant="caption" component="p">{p.stats[3].base_stat}</Typography>
										</Grid>
										<Grid xs>
											<Typography variant="caption" component="h3">SP.DEF</Typography>
											<Typography variant="caption" component="p">{p.stats[4].base_stat}</Typography>
										</Grid>
										<Grid xs>
											<Typography variant="caption" component="h3">SPD</Typography>
											<Typography variant="caption" component="p">{p.stats[5].base_stat}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		)
	)
}

export default PokedexCard;