import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL, formatDexId } from '../utilities';
import { Skeleton, Typography, Button } from '@mui/material';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState([]);
	// const [pokemonSpecies, setPokemonSpecies] = useState([]);
	// const [nextPokemon, setNextPokemon] = useState([]);
	// const [prevPokemon, setPrevPokemon] = useState([]);

	const getPokemon = id => {
		setLoading(true);

		fetch(`${baseURL}/pokemon/${id}`)
			.then((res) => res.json())
			.then((data) => {
				let temp = data;
				
				const getPokemonSpecies = id => {
					fetch(`${baseURL}/pokemon-species/${id}`)
						.then((res) => res.json())
						.then((data) => {
							setPokemon([{...temp, ...data}])
						})
				}
				getPokemonSpecies(id);
				setTimeout(() => {
					setLoading(false)
				}, 2000)
			});

		
	}

	// const getPokemonSpecies = id => {
	// 	setLoading(true);

	// 	fetch(`${baseURL}/pokemon-species/${id}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setPokemon({...pokemon, data});
	// 			setLoading(false);
	// 		});
	// }

	// const getPrevPokemon = id => {
	// 	setLoading(true);

	// 	fetch(`${baseURL}/pokemon-species/${id - 1}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setPrevPokemon([data]);
	// 			setLoading(false);
	// 		});
	// }

	// const getNextPokemon = id => {
	// 	setLoading(true);

	// 	fetch(`${baseURL}/pokemon-species/${id + 1}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setNextPokemon([data]);
	// 			setLoading(false);
	// 		});
	// };

	useEffect(() => {
		getPokemon(pokemonId);
		// getPokemonSpecies(pokemonId);
		// getPrevPokemon(pokemonId);
		// getNextPokemon(pokemonId);
	}, [pokemonId]);

	console.log(pokemon)

	return (
		<>
			{pokemon.map((p, index) => (
				<main
					key={index}
					data-type-one={p.types[0].type.name}
					data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
					style={{ marginTop: 70 }}
				>

					<header>
						<div className="top">
							<span className="japanese">
								{p.names.filter(n => n.language.name === 'ja').map(n => n.name)}
							</span>
							<img
								className="poke-img"
								src={p.sprites.other["official-artwork"].front_default}
								alt={p.name}
							/>
							<Link to={`/pokemon/${p.id - 1}`}>
								Previous
								{/* <img
									className="prev-poke-img"
									src={prevPokemon[0].sprites.other["official-artwork"].front_default}
									alt={prevPokemon[0].name}
								/> */}
							</Link>
							<Link to={`/pokemon/${p.id + 1}`}>
								Next
								{/* <img
									className="next-poke-img"
									src={nextPokemon[0].sprites.other["official-artwork"].front_default}
									alt={nextPokemon[0].name}
								/> */}
							</Link>
						</div>
					</header>

					
					{loading ? (
						<section id="pokemonTitle">
							<Skeleton width="80%">
								<Typography variant="h1" component="h1">.</Typography>
							</Skeleton>
							<Skeleton width="50%">
								<Typography variant="body" component="p">.</Typography>
							</Skeleton>
							<Skeleton width="40%">
								<Button />
							</Skeleton>
							<Skeleton width="40%">
								<Button />
							</Skeleton>
						</section>
					) : (
						<section id="pokemonTitle">
							<Typography variant="h1" component="h1">
								<Typography variant="body2" component="span">
									<Typography variant="caption" component="span">No.</Typography>
									{formatDexId(p.id)}
								</Typography>
								{p.name}
							</Typography>

							<Typography variant="body" component="p">
								{p.genera.filter(g => g.language.name === 'en').map(g => g.genus)}
							</Typography>

							<Button type="button">{p.types[0].type.name}</Button>
							{p.types[1] ? (
								<Button type="button">{p.types[1].type.name}</Button>
							)	: null}
						</section>
					)}
				</main>
			))}
		</>
	);
};

export default Pokemon;