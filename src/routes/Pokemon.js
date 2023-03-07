import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PokemonHeader from "../components/Pokemon/PokemonHeader";
import PokemonTitle from '../components/Pokemon/PokemonTitle';
import PokemonStats from '../components/Pokemon/PokemonStats';
import PokemonEvolution from "../components/Pokemon/PokemonEvolution";
import PokemonDefense from "../components/Pokemon/PokemonDefense";
import PokemonAbilities from "../components/Pokemon/PokemonAbilities";
import PokemonBreeding from "../components/Pokemon/PokemonBreeding";
import { baseURL } from '../utilities/utilities';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState([]);
	// const [evolution, setEvolution] = useState([]);
	// const [evolutionChain, setEvolutionChain] = useState([{chain: [],}]);

	const getPokemon = id => {
		Promise.all([
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

			/*const getEvolution = async evoURL => {
				let evoLevel = 1;
				let nextId = 1;

				const checkIfEvolves = evo => {
					if (evo !== null) {
						setEvolutionChain([
							...evolutionChain,
							{
								evoLevel: evoLevel,
								id: nextId,
							},
						])
						nextId++;
						evo.evolves_to.map(b => checkIfEvolves(b))
						evoLevel++;

					} else {
						console.log("doesn't evolve")
					}
				}

				await fetch(evoURL)
					.then(res => res.ok ? res.json() : null)
					.then(data => {
						console.log(data)

						checkIfEvolves(data.chain)

						setEvolution([{
							evolution: {
								baby_trigger_item: data.baby_trigger_item,
								chain: evolutionChain,
								id: data.id,
							}
						}])
					});
			}
			getEvolution(response[1].evolution_chain.url);*/
		}).catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		setLoading(true);
			getPokemon(pokemonId);
		setTimeout(() => { setLoading(false); }, 2000)
	}, [pokemonId]);

	// console.log(pokemon)
	// console.log(evolutionChain)

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
					<PokemonEvolution loading={loading} {...pokemon} />
					<PokemonDefense loading={loading} {...pokemon} />
					<PokemonAbilities loading={loading} {...pokemon} />
					<PokemonBreeding loading={loading} {...pokemon} />
				</Container>
			))}
		</>
	);
};

export default Pokemon;