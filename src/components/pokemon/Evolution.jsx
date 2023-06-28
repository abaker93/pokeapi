import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { filterByLang, getIdFromURL } from "../../utilities/utilities"

const Evolution = props => {
	const { evolutionChain, evolutionPokemon, lang, pokemon } = props

	// console.log(evolutionChain)

	if (evolutionChain.chain.evolves_to.length < 1) {
		return (
			<Typography variant="body1" textAlign="center">{filterByLang('name', pokemon.names, lang)} does not evolve.</Typography>
		)
	}

	return (
		<Container sx={{ mb: 5 }}>
			{evolutionPokemon.filter(f1 => f1.id == getIdFromURL(evolutionChain.chain.species.url)).map(m1 => (
				<Grid key={m1.id} container xs>
					<Grid container xs={12}>
						<Grid xs={4} display="flex" alignItems="center">
							<img src={m1.sprites.other["official-artwork"].front_default} style={{ width: '100%' }} />
						</Grid>

						{evolutionChain.chain.evolves_to.length > 0 ? (
							<Grid container xs={8}>
								{evolutionChain.chain.evolves_to.map(l2 => (
									<Grid key={getIdFromURL(l2.species.url)} container xs={12}>
										<Grid xs={6} display="flex" alignItems="center">
											{evolutionPokemon.filter(f2 => f2.id == getIdFromURL(l2.species.url)).map(m2 => (
												<img key={m2.id} src={m2.sprites.other["official-artwork"].front_default} style={{ width: '100%' }} />
											))}
										</Grid>
										
										{l2.evolves_to.length > 0 ? (
											<Grid xs={6}>
												{l2.evolves_to.map(l3 => (
													<Grid key={getIdFromURL(l3.species.url)} container xs={4}>
														{evolutionPokemon.filter(f3 => f3.id == getIdFromURL(l3.species.url)).map(m3 => (
															<Grid key={m3.id} xs={4} display="flex" alignItems="center">
																<img src={m3.sprites.other["official-artwork"].front_default} style={{ width: '100%' }} />
															</Grid>
														))}
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
			))}
		</Container>
	)
}

export default Evolution