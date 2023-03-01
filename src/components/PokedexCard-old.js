import { Card, CardActionArea, CardContent, Chip, Link, Skeleton, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { capitalize, formatDexId } from "../utilities/utilities";

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

					sx={{ height: "120px" }}
				>
					<CardActionArea>
						<CardContent sx={{ p: 0 }}>
							<Grid container spacing={1}>
								<Grid xs={4}>
									<img
										src={p.sprites.other["official-artwork"].front_default}
										alt={p.name}
									/>
								</Grid>
								<Grid xs={8}>
									<Grid xs={12}>
										<Typography variant="h6" component="h2">
											<Typography component="span">
												<Typography component="span">No.</Typography>
												{formatDexId(p.id)}
											</Typography>
											{capitalize(p.name)}
										</Typography>
									</Grid>
									<Grid xs={12}>
										<Chip variant="type" size="small" type={p.types[0].type.name} label={p.types[0].type.name} />
										{p.types[1] ? <Chip variant="type" size="small" type={p.types[1].type.name} label={p.types[1].type.name} sx={{ ml: 1 }} /> : null}
									</Grid>
									<Grid container xs={12}>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">HP
											</Typography>
											<Typography component="p" className="stat-body">{p.stats[0].base_stat}</Typography>
										</Grid>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">ATT</Typography>
											<Typography component="h3" className="stat-body">{p.stats[1].base_stat}</Typography>
										</Grid>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">DEF</Typography>
											<Typography component="h3" className="stat-body">{p.stats[2].base_stat}</Typography>
										</Grid>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">SP.ATT</Typography>
											<Typography component="h3" className="stat-body">{p.stats[3].base_stat}</Typography>
										</Grid>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">SP.DEF</Typography>
											<Typography component="h3" className="stat-body">{p.stats[4].base_stat}</Typography>
										</Grid>
										<Grid xs sx={{ px: 0 }}>
											<Typography component="h3" className="stat-heading">SPD</Typography>
											<Typography component="h3" className="stat-body">{p.stats[5].base_stat}</Typography>
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