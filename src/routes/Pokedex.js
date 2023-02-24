import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokedexCard from "../components/PokedexCard";
import { baseURL } from "../utilities/utilities";

import { Box, Skeleton, Typography } from "@mui/material";

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
						await Promise.all([
							fetch(`${baseURL}/pokemon/${pokemon.name}`).then(res => res.ok ? res.json() : null),
							fetch(`${baseURL}/pokemon-species/${pokemon.name}`).then(res => res.ok ? res.json() : null)
						]).then(response => {
							setAllPokemon(currentList => [...currentList, {...response[0], ...response[1]}]);
							allPokemon.sort((a, b) => a.id - b.id);
						})
					});
				};
				createPokemonObject(data.results);

				setTimeout(() => {
					setLoading(false)
				}, 2000)
			});
	};

	useEffect(() => {
		getAllPokemon(pokedex, loadMore)
	}, [pokedex]);

	return (
		<main style={{ paddingTop: 120 }}>
			<Box component="header">
				{loading ? (
					<Skeleton width="100%">
						<Typography variant="h2" component="h1">.</Typography>
					</Skeleton>
				) : (
					<Typography variant="h2" component="h1" sx={{ textTransform: "capitalize" }}>{pokedex} Pokedex</Typography>
				)}
			</Box>

			<section id="pokedex">
				{allPokemon.map((p, i) => (
					<PokedexCard
						key={i}
						loading={loading}
						{...p}
					/>
				))}

				<button onClick={() => getAllPokemon()}>Load More</button>
			</section>
		</main>
	)
}

export default Pokedex;