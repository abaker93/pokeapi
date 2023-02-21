import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokedexCard from "../components/PokedexCard";
import { baseURL } from "../utilities";

const Pokedex = () => {
	const pokedex = useParams().dex

	const [allPokemon, setAllPokemon] = useState([]);
	const [loadMore, setLoadMore] = useState(`${baseURL}/pokemon-species?limit=20`);

	const getAllPokemon = async (dex, url) => {
		const res = await fetch(url);
		const data = await res.json();
		console.log(dex);
		setLoadMore(data.next);

		const createPokemonObject = results => {
			results.forEach(async pokemon => {
				const res = await fetch(`${baseURL}/pokemon/${pokemon.name}`);
				const data = await res.json();
				setAllPokemon(currentList => [...currentList, data]);
				await allPokemon.sort((a, b) => a.id - b.id)
			})
		}
		createPokemonObject(data.results);
	}

	useEffect(() => {
		getAllPokemon(pokedex, loadMore)
	}, [pokedex]);

	console.log(loadMore)
	return (
		<>
			<h1>Pokedex</h1>
			<div>
				<div>
					{allPokemon.map((p, index) => (
						<PokedexCard
							key={index}
							id={p.id}
							image={p.sprites.other["official-artwork"].front_default}
							name={p.name}
							type={p.types.map(t => t.type.name)}
							hp={p.stats.filter(s => s.stat.name === 'hp')}
						/>
					))}
				</div>

				<button onClick={() => getAllPokemon()}>Load More</button>

			</div>
		</>
	)
}

export default Pokedex;