import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

export default function PokemonEvolution(props) {
	const loading = props.loading;
	const currentPokemon = props.pokemon[0];
	const evolutionChain = props.evolution.chain;
	const pokemon = props.evolution.pokemon;

	console.log(currentPokemon)

	return (
		<Container id="PokemonEvolution" className="grid">
			{loading ? (
				<p>Loading</p>
			) : (
				evolutionChain.chain.evolves_to.length > 0 ? (
					pokemon.map(p => (
						<p key={p.id}>{p.name}</p>
					))
				) : (
					<Typography variant="body1">
						{currentPokemon.names.filter(n => n.language.name === "en").map(n => n.name)} does not evolve.
					</Typography>
				)
				
				/*evolution.chain.evolves_to.length > 0 ? (
					<PokemonEvolutionNode loading={loading} evolution={evolution.chain}>
						<p>{evolution.chain.species.name}</p>
					</PokemonEvolutionNode>
				) : (
					
				)*/ /* end level 1 */
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