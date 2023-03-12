import { Container, Typography } from "@mui/material";
import { useEffect } from "react";

export default function PokemonEvolution(props) {
	const loading = props.loading;
	const currentPokemon = props.pokemon[0];
	const evolutionChain = props.evolution.chain;
	const pokemon = props.evolution.pokemon;

	const a = evolutionChain.chain;
	let levels;

	if (a) {
		if (a.evolves_to.length > 0) {
			a.evolves_to.map(b => {
				if (b.evolves_to.length > 0) {
					b.evolves_to.map(c => {
						if (c.evolves_to.length > 0) {
							levels = 4;
						} else {
							levels = 3;
						}
					})
				} else {
					levels = 2;
				}
			})
		} else {
			levels = 1;
		}
	}

	return (
		<Container id="PokemonEvolution" className="grid" data-level={levels}>
			{loading ? (
				<p>Loading</p>
			) : (
				levels > 1 ? (
					<PokemonEvolutionNode levels={levels} pokemon={pokemon.filter(f => f.name === a.species.name)} details={a.evolution_details}>
						{a.evolves_to.map((b, index) => (
							<PokemonEvolutionNode key={index} levels={levels} pokemon={pokemon.filter(f => f.name === b.species.name)} details={b.evolution_details}>
								{b.evolves_to.map((c, index) => (
									<PokemonEvolutionNode key={index} pokemon={pokemon.filter(f => f.name === c.species.name)} details={c.evolution_details}>

									</PokemonEvolutionNode>
								))}
							</PokemonEvolutionNode>
						))}
					</PokemonEvolutionNode>
				) : (
					<Typography variant="body1">
						{currentPokemon.names.filter(n => n.language.name === "en").map(n => n.name)} does not evolve.
					</Typography>
				) /* end level 1 */
			)}
		</Container>
	)
}

function PokemonEvolutionNode (props) {
	const details = props.details;

	console.log(details)

	return (
		props.pokemon.map(p => (
			<div className="evolutionNode" key={p.id}>
				<div className="current">
					{details.length > 0 ? (
						<p>arrow</p>
					) : null}
					<img src={p.sprites.other.home.front_default} alt={p.name} />
				</div>
				{props.children ? (
					<div className="next">
						{props.children}
					</div>
				) : null}
			</div>
		))
		
	)
}