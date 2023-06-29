import { Box, Link, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { filterByLang, formatDexId, getIdFromURL } from "../../utilities/utilities"

const Evolution = props => {
	const { evolution, lang, pokemon } = props.state

	if (evolution.chain.chain.evolves_to.length < 1) {
		return (
			<Box sx={{ mb: 5 }}>
				<Typography variant="body1" textAlign="center">{filterByLang('name', pokemon.names, lang)} does not evolve.</Typography>
			</Box>
		)
	}

	return (
		<Box sx={{ mb: 5 }}>
			<Grid container xs>
				<Grid container xs columns={3}>
					<Grid xs={1} display="flex" alignItems="center">
						{evolution.pokemon.filter(f1 => f1.id == getIdFromURL(evolution.chain.chain.species.url)).map(m1 => (
							<Link key={m1.id} href={`${formatDexId(m1.id)}`}>
								<img
									src={m1.sprites.other["official-artwork"].front_default}
									alt={filterByLang('name', m1.names, lang)}
									style={{ width: '100%' }}
								/>
							</Link>
						))}
					</Grid>

					{evolution.chain.chain.evolves_to.length > 0 ? (
						<Grid container xs={2}>
							{evolution.chain.chain.evolves_to.map(l2 => (
								<Grid key={getIdFromURL(l2.species.url)} container xs columns={2}>
									<Grid xs={1} display="flex" alignItems="center">
										{evolution.pokemon.filter(f2 => f2.id == getIdFromURL(l2.species.url)).map(m2 => (
											<Link key={m2.id} href={`${formatDexId(m2.id)}`}>
												<img
													src={m2.sprites.other["official-artwork"].front_default}
													alt={filterByLang('name', m2.names, lang)}
													style={{ width: '100%' }}
												/>
											</Link>
										))}
									</Grid>
									
									{l2.evolves_to.length > 0 ? (
										<Grid xs={1}>
											{l2.evolves_to.map(l3 => (
												<Grid key={getIdFromURL(l3.species.url)} container xs={4}>
													<Grid xs={4} display="flex" alignItems="center">
														{evolution.pokemon.filter(f3 => f3.id == getIdFromURL(l3.species.url)).map(m3 => (
															<Link key={m3.id} href={`${formatDexId(m3.id)}`}>
																<img
																	src={m3.sprites.other["official-artwork"].front_default}
																	alt={filterByLang('name', m3.names, lang)}
																	style={{ width: '100%' }}
																/>
															</Link>
														))}
													</Grid>
												</Grid>
											))}
										</Grid>
									) : null }
								</Grid>
							))}
						</Grid>
					) : null }
				</Grid>
			</Grid>
		</Box>
	)
}

export default Evolution