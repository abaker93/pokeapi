import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

export default function PokemonEvolution(props) {
	const [evolution, loading, pokemon] = [props.evolutionChain, props.loading, props.pokemon];

	console.log(evolution)
	console.log(pokemon)

	return (
		<Container id="PokemonEvolution" className="grid">
			{loading ? (
				<p>Loading</p>
			) : (
				evolution.chain.evolves_to.length > 0 ? (
					<PokemonEvolutionNode loading={loading} evolution={evolution.chain}>
						<p>{evolution.chain.species.name}</p>
					</PokemonEvolutionNode>
				) : (
					<Typography variant="body1">
						{pokemon.names.filter(n => n.language.name === "en").map(n => n.name)} does not evolve.
					</Typography>
				) /* end level 1 */
			)}
		</Container>
	)
}

function PokemonEvolutionNode (props) {
	const evolution = props.evolution;
	const speciesURL = evolution.species.url;
	
	const [pokemon, setPokemon] = useState([]);

	const getPokemon = async url => {
		await fetch(url)
			.then(res => res.json())
			.then(data => {
				const varieties = data.varieties.filter(f => f.is_default).map(m => m.pokemon.url)

				const getVariety = async (url, species)  => {
					await fetch(url)
						.then(res => res.json())
						.then(data => {
							setPokemon(Object.assign(species, data))
						});
				}
				getVariety(varieties, data);
				
			});
	};

	useEffect(() => {
		getPokemon(speciesURL)
	}, [speciesURL]);

	// console.log(pokemon)

	return (
		props.loading ? (
			<p>Loading...</p>
		) : (
			<div>
				{/* <p>{pokemon.names.filter(n => n.language.name === 'en').map(n => n.name)}</p> */}
				{props.children}
			</div>
		)
	)
}