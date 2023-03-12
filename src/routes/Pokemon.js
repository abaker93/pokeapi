import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import PokemonHeader from "../components/Pokemon/PokemonHeader";
import PokemonTitle from '../components/Pokemon/PokemonTitle';
import PokemonStats from '../components/Pokemon/PokemonStats';
import PokemonEvolution from "../components/Pokemon/PokemonEvolution";
import PokemonDefense from "../components/Pokemon/PokemonDefense";
import PokemonAbilities from "../components/Pokemon/PokemonAbilities";
import PokemonBreeding from "../components/Pokemon/PokemonBreeding";
import PokemonAdditionalInfo from "../components/Pokemon/PokemonAdditionalInfo";

import { baseURL } from '../utilities/utilities';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [evolutionChain, setEvolutionChain] = useState([]);
	const [evolutionPokemon, setEvolutionPokemon] = useState([]);

	const getPokemon = async id => {
		await Promise.all([
			fetch(`${baseURL}/pokemon/${id}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon-species/${id}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon/${id-1}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon/${id+1}`).then(res => res.ok ? res.json() : null)
		]).then(response => {
			if (response[2] !== null) {
				if (response[3] !== null) {
					setPokemon([{
						...response[0],
						...response[1],
						"prev": {
							"name": response[2].name,
							"artwork": response[2].sprites.other["official-artwork"].front_default
						},
						"next": {
							"name": response[3].name,
							"artwork": response[3].sprites.other["official-artwork"].front_default
						}
					}])
				} else {
					setPokemon([{
						...response[0],
						...response[1],
						"prev": {
							"name": response[2].name,
							"artwork": response[2].sprites.other["official-artwork"].front_default
						},
						"next": {
							"name": null,
							"artwork": null
						}
					}])
				}
			} else {
				if (response[3] !== null) {
					setPokemon([{
						...response[0],
						...response[1],
						"prev": {
							"name": null,
							"artwork": null
						},
						"next": {
							"name": response[3].name,
							"artwork": response[3].sprites.other["official-artwork"].front_default
						}
					}])
				} else {
					setPokemon([{
						...response[0],
						...response[1],
						"prev": {
							"name": null,
							"artwork": null
						},
						"next": {
							"name": null,
							"artwork": null
						}
					}])
				}
			}

			const evoURL = response[1].evolution_chain.url;

			const getEvolutionChain = async url => {
				await fetch(url)
					.then(res => res.json())
					.then(data => {
						setEvolutionChain(data);

						// TODO:	- add logic for pokemon like lycanrock (regex get ID in pokemonResults and use ID instead of pokemon name for fetch)
						const getEvolutionPokemon = results => {
							results.forEach(async pokemon => {
								await Promise.all([
									fetch(`${baseURL}/pokemon/${pokemon}`).then(res => res.ok ? res.json() : null),
									fetch(`${baseURL}/pokemon-species/${pokemon}`).then(res => res.ok ? res.json() : null)
								]).then(response => {
									if (response[0] !== null || response[1] !== null) {
										setEvolutionPokemon(currentList => [...currentList, {...response[0], ...response[1]}]);
										evolutionPokemon.sort((a, b) => a.id - b.id);
									};
								});
							});
						};
						const lvl1 = [[data.chain.species.name]];
						const lvl2 = data.chain.evolves_to.map(a => [a.species.name]);
						const lvl3 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b.species.name))
						const lvl4 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b.evolves_to.map(c => c.species.name)))
						
						let pokemonResults = [];

						const arrayDivider = (...arr) => {
							arr.forEach(lvl => {
								for (let i = 0; i < lvl.length; i++) {
									for (let j = 0; j < lvl[i].length; j++) {
										if (lvl[i][j].length > 0) {
											pokemonResults.push(lvl[i][j]);
										}
									}
								}
							})
							
						}
						arrayDivider(lvl1, lvl2, lvl3, lvl4)

						getEvolutionPokemon(pokemonResults)
					})
			}
			getEvolutionChain(evoURL);

		}).catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		setLoading(true);
			getPokemon(pokemonId);
		setTimeout(() => { setLoading(false); }, 2000)
	}, [pokemonId]);

	return (
		<>
			{pokemon.map((p, index) => (
				<Container
					key={index}
					id="Pokemon"
					component="main"
					maxWidth="false"
					data-type-one={p.types[0].type.name}
					data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
					sx={{ px: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }}
				>
					<PokemonHeader loading={loading} {...pokemon} />
					<PokemonTitle loading={loading} {...pokemon} />
					<PokemonStats loading={loading} {...pokemon} />
					<PokemonEvolution
						loading={loading}
						evolution={{
							chain: evolutionChain,
							pokemon: evolutionPokemon,
						}}
						pokemon={evolutionPokemon}
					/>
					<PokemonDefense loading={loading} {...pokemon} />
					<PokemonAbilities loading={loading} {...pokemon} />
					<PokemonBreeding loading={loading} {...pokemon} />
					<PokemonAdditionalInfo loading={loading} {...pokemon} />
				</Container>
			))}
		</>
	);
};

export default Pokemon;