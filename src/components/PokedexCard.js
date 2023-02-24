import { Card, CardActionArea, CardContent, Link, Skeleton } from "@mui/material";
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
								<Grid xs={7}>
									<h2>
										<span style={{ fontSize: "0.5em", marginRight: 4 }}>
											<span style={{ fontSize: "0.7em", marginRight: 1 }}>No.</span>
											{formatDexId(p.id)}
										</span>
										{p.name}
									</h2>
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