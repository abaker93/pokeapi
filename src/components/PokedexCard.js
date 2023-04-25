import { Card, CardActionArea, CardContent, Chip, Skeleton, Typography } from "@mui/material";
import { formatDexId } from "../utilities/utilities";

const PokedexCard = (props) => {
	let p = props;

	return (
		p.loading ? (
			<Skeleton className="pokedex-card" width="100%" height="200px" />
		) : (
				<Card
					data-type-one={p.types[0].type.name}
					data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
					className="pokedex-card"
					elevation={16}
					sx={{ overflow: "visible", color: "#FFFFFF" }}
				>
					<CardActionArea href={`/pokemon/${formatDexId(p.id)}`}>
						<CardContent className="grid">
							<div className="col js-center">
								<img
									src={p.sprites.other["official-artwork"].front_default}
									alt={p.name}
								/>
							</div>
							<div className="col">
								<div className="row name">
									<Typography variant="h6" component="h2">
										<Typography component="span">
											<Typography component="span">No.</Typography>
											{formatDexId(p.id)}
										</Typography>
										{p.names.filter(n => n.language.name === "en").map(n => n.name)}
									</Typography>
								</div>
								<div className="row types">
									<Chip variant="type" size="small" type={p.types[0].type.name} label={p.types[0].type.name} />
									{p.types[1] ? <Chip variant="type" size="small" type={p.types[1].type.name} label={p.types[1].type.name} sx={{ ml: 1 }} /> : null}
								</div>
								<div className="row grid stats">
									<div className="col">
										<Typography component="h3">HP</Typography>
										<Typography component="p">{p.stats[0].base_stat}</Typography>
									</div>
									<div className="col">
										<Typography component="h3">ATT</Typography>
										<Typography component="p">{p.stats[1].base_stat}</Typography>
									</div>
									<div className="col">
										<Typography component="h3">DEF</Typography>
										<Typography component="p">{p.stats[2].base_stat}</Typography>
									</div>
									<div className="col">
										<Typography component="h3">SP.ATT</Typography>
										<Typography component="p">{p.stats[3].base_stat}</Typography>
									</div>
									<div className="col">
										<Typography component="h3">SP.DEF</Typography>
										<Typography component="p">{p.stats[4].base_stat}</Typography>
									</div>
									<div className="col">
										<Typography component="h3">SPD</Typography>
										<Typography component="p">{p.stats[5].base_stat}</Typography>
									</div>
								</div>
							</div>
						</CardContent>
					</CardActionArea>
				</Card>
		)
	)
}

export default PokedexCard;