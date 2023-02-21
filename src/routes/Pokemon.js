import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL, formatDexId } from '../utilities';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [pokemon, setPokemon] = useState([]);
	const [pokemonSpecies, setPokemonSpecies] = useState([]);
	const [nextPokemon, setNextPokemon] = useState([]);
	const [prevPokemon, setPrevPokemon] = useState([]);

	const getPokemon = async (id) => {
		const res = await fetch(`${baseURL}/pokemon/${id}`);
		const data = await res.json();

		setPokemon([data]);
	}

	const getPokemonSpecies = async (id) => {
		const res = await fetch(`${baseURL}/pokemon-species/${id}`);
		const data = await res.json();

		setPokemonSpecies([data]);
	}

	const getNextPokemon = async (id) => {
		const res = await fetch(`${baseURL}/pokemon/${id + 1}`);
		const data = await res.json();

		setNextPokemon([data]);
	}

	const getPrevPokemon = async (id) => {
		const res = await fetch(`${baseURL}/pokemon/${id - 1}`);
		const data = await res.json();

		setPrevPokemon([data]);
	}

	useEffect(() => {
		getPokemon(pokemonId);
		getPokemonSpecies(pokemonId);
		getNextPokemon(pokemonId);
		getPrevPokemon(pokemonId);
	}, [pokemonId]);

	// console.log(nextPokemon)

	return pokemon.map((p, index) => (
		<main
			key={index}
			data-type-one={p.types[0].type.name}
			data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
		>

			<header>
				<div className="top">
					<span className="japanese">
						{pokemonSpecies[0].names.filter(n => n.language.name === 'ja').map(n => n.name)}
					</span>
					<img
						className="poke-img"
						src={p.sprites.other["official-artwork"].front_default}
						alt={p.name}
					/>
					<Link to={`/pokemon/${p.id - 1}`}>
						<img
							className="prev-poke-img"
							src={prevPokemon[0].sprites.other["official-artwork"].front_default}
							alt={prevPokemon[0].name}
						/>
					</Link>
					<Link to={`/pokemon/${p.id + 1}`}>
						<img
							className="next-poke-img"
							src={nextPokemon[0].sprites.other["official-artwork"].front_default}
							alt={nextPokemon[0].name}
						/>
					</Link>
				</div>
			</header>
		
			<section id="pokemonTitle">
				<h1>
					<span>
						<span>No.</span>
						{formatDexId(p.id)}
					</span>
					{p.name}
				</h1>

				<p>
					{pokemonSpecies[0].genera.filter(g => g.language.name === 'en').map(g => g.genus)}
				</p>

				<button type="button">{p.types[0].type.name}</button>
				{p.types[1]
					? <button type="button">{p.types[1].type.name}</button>
					: null}
			</section>

		</main>
	))
}

export default Pokemon;