import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokedexCard from "../components/PokedexCard";
import { baseURL } from "../utilities";

import { Skeleton, Typography } from "@mui/material";

const Pokedex = () => {
	const pokedex = useParams().dex

	const [loading, setLoading] = useState(false);
	const [allPokemon, setAllPokemon] = useState([]);
	const [loadMore, setLoadMore] = useState(`${baseURL}/pokemon-species?limit=20`);

	const getAllPokemon = async (dex, url) => {
		setLoading(true);

		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setLoadMore(data.next);

				const createPokemonObject = results => {
					results.forEach(async pokemon => {
						await fetch(`${baseURL}/pokemon/${pokemon.name}`)
							.then((res) => res.json())
							.then((data) => {
								setAllPokemon(currentList => [...currentList, data]);
								allPokemon.sort((a, b) => a.id - b.id);
							});
					});
				};
				createPokemonObject(data.results);
				setLoading(false);
			});
	};

	useEffect(() => {
		getAllPokemon(pokedex, loadMore)
	}, [pokedex]);

	return (
		<>
			{loading ? (
				<Skeleton width="80%">
					<Typography variant="h1" component="h1">.</Typography>
				</Skeleton>
			) : (
				<h1>Pokedex</h1>
			)}
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