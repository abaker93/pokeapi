import { Container } from "@mui/material";
import { capitalize } from "../../utilities/utilities";

const PokemonEvolution = (props) => {
	const evoChain = props.evolution.chain;
	const evoPokemon = props.evolution.pokemon;
	const pokemon = props.pokemon;

	console.log("evoChain", evoChain);
	console.log("evoPokemon", evoPokemon);
	console.log("pokemon", pokemon)

	const getID = (text) => {
		let id = text.match(/[\/][0-9]+/g);
		id = id[0].substring(1);
		return id;
	}

	if (evoChain.chain.evolves_to.length < 1) {
		return (
			<div>{pokemon.names.filter(f => f.language.name === "en").map(m => m.name)} does not evolve.</div>
		)
	}
	
	return (
		<Container id="PokemonEvolution" sx={{ mb: 5 }}>
			{evoPokemon.filter(f1 => f1.id == getID(evoChain.chain.species.url)).map(m1 => (
				<div key={m1.id} className="lvl1">
					<div className="lvl1-branch">
						<div className="lvl1-img">
							<img src={m1.sprites.other["official-artwork"].front_default} />
						</div>

						{evoChain.chain.evolves_to.length > 0 ? (
							<div className="lvl2">
								{evoChain.chain.evolves_to.map(l2 => (
									<div className="lvl2-branch">
										<div key={getID(l2.species.url)} className="lvl2-img">
											{evoPokemon.filter(f2 => f2.id == getID(l2.species.url)).map(m2 => (
												<img key={m2.id} src={m2.sprites.other["official-artwork"].front_default} />
											))}
										</div>
										
										{l2.evolves_to.length > 0 ? (
											<div className="lvl3">
												{l2.evolves_to.map(l3 => (
													<div key={getID(l3.species.url)} className="lvl3">
														{evoPokemon.filter(f3 => f3.id == getID(l3.species.url)).map(m3 => (
															<div className="lvl3-img">
																<img key={m3.id} src={m3.sprites.other["official-artwork"].front_default} />
															</div>
														))}
													</div>
												))}
											</div>
										) : null }
									</div>
								))}
							</div>
						) : null }
					</div>
				</div>
			))}
		</Container>
	)
}

export default PokemonEvolution;