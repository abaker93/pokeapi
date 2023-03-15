import Pokedex from 'pokedex-promise-v2';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import PokemonHeader from "../components/Pokemon/PokemonHeader";
import PokemonTitle from '../components/Pokemon/PokemonTitle';
import PokemonStats from '../components/Pokemon/PokemonStats';
import PokemonEvolution from "../components/Pokemon/PokemonEvolution";
import PokemonDefense from "../components/Pokemon/PokemonDefense";
import PokemonAbilities from "../components/Pokemon/PokemonAbilities";
import PokemonBreeding from "../components/Pokemon/PokemonBreeding";
import PokemonAdditionalInfo from "../components/Pokemon/PokemonAdditionalInfo";

const P = new Pokedex();

const Pokemon = () => {
	const pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [eggGroups, setEggGroups] = useState([]);

	const getEggGroups = eggGroups => {
		eggGroups.forEach(group => {
			P.getResource(group.url)
				.then(res => {
					setEggGroups(currentList => [...currentList, {...res}])
				})
		})
	}

	//*		get pokemon data, pokemon-species data + optional prev/next pokemon data
	const getPokemon = id => {
		let urls = [
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		];

		if (id-1 >= 1) {
			urls.push(`/api/v2/pokemon/${id-1}`)
		}

		// TODO:		replace this with a dynamic number instead of a manually input max
		// TODO:		get number from national pokedex
		if (id+1 <= 1010) {
			urls.push(`/api/v2/pokemon/${id+1}`)
		}

		P.getResource(urls)
			.then(res => {
				if (res.length === 3) {
					if (id-1 >= 1) {
						setPokemon({
							...res[0],
							...res[1],
							prev: {
								name: res[2].name,
								artwork: res[2].sprites.other["official-artwork"].front_default,
							},
							next: null,
						})
					}
			
					if (id+1 <= 1010) {
						setPokemon({
							...res[0],
							...res[1],
							prev: null,
							next: {
								name: res[2].name,
								artwork: res[2].sprites.other["official-artwork"].front_default,
							}
						})
					}
				} else if (res.length === 4) {
					setPokemon({
						...res[0],
						...res[1],
						prev: {
							name: res[2].name,
							artwork: res[2].sprites.other["official-artwork"].front_default,
						},
						next: {
							name: res[3].name,
							artwork: res[3].sprites.other["official-artwork"].front_default,
						}
					})
				}

				//*		get egg groups from pokemon
				//*		to pass to PokemonBreeding component
				getEggGroups(res[1].egg_groups)
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		setLoading(true);
		getPokemon(pokemonId);
		setTimeout(() => { setLoading(false); }, 2000)
	}, [pokemonId])

	return (
		loading ? (
			<p>loading</p>
		) : (
		<Container
			key={pokemon.id}
			id="Pokemon"
			component="main"
			maxWidth="false"
			data-type-one={pokemon.types[0].type.name}
			data-type-two={pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name}
			sx={{ px: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }}
		>
			<PokemonHeader loading={loading} {...pokemon} />
			<PokemonTitle loading={loading} {...pokemon} />
			<PokemonStats loading={loading} {...pokemon} />
			{/*
			// TODO: come back to evolution later... working on logic for evolution conditions (arrows)
			<PokemonEvolution
				loading={loading}
				evolution={{
					chain: evolutionChain,
					pokemon: evolutionPokemon,
				}}
				pokemon={evolutionPokemon}
			/>*/}
			<PokemonDefense loading={loading} {...pokemon} />
			<PokemonAbilities loading={loading} {...pokemon} />
			<PokemonBreeding loading={loading} eggGroups={eggGroups} pokemon={pokemon} />
			<PokemonAdditionalInfo loading={loading} {...pokemon} />
		</Container>
		)
	);
};

export default Pokemon;