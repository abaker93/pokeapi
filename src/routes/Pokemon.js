import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PokemonHeader from "../components/PokemonHeader";
import PokemonTitle from '../components/PokemonTitle';
import PokemonStats from '../components/PokemonStats';
import { baseURL } from '../utilities/utilities';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState([]);

	const getPokemon = id => {
		setLoading(true);

		Promise.all([
			fetch(`${baseURL}/pokemon/${id}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon-species/${id}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon/${id-1}`).then(res => res.ok ? res.json() : null),
			fetch(`${baseURL}/pokemon/${id+1}`).then(res => res.ok ? res.json() : null)
		]).then(response => {
			response[2] !== null
			? response[3] !== null
				? setPokemon([{
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
				: setPokemon([{
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
			: response[3] !== null
				? setPokemon([{
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
				: setPokemon([{
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
		}).catch((err) => {
			console.log(err);
		});

		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}

	useEffect(() => {
		getPokemon(pokemonId);
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
				</Container>
			))}
		</>
	);
};

export default Pokemon;