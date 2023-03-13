import Pokedex from 'pokedex-promise-v2';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Skeleton, Typography } from "@mui/material";

import PokedexCard from "../components/PokedexCard";
import { getPokedexName } from "../utilities/utilities";

const P = new Pokedex();

const PokedexList = () => {
	const dex = getPokedexName(useParams().dex);

	const [loading, setLoading] = useState(true);
	const [loadMore, setLoadMore] = useState({
		limit: 20,
		offset: 0
	});
	const [allPokemon, setAllPokemon] = useState([]);

	const createAllPokemon = res => {
		res.forEach(poke => {
			let id;

			if (poke.url) {
				id = poke.url.match(/\/\d+\//gm);
			} else {
				id = poke.pokemon_species.url.match(/\/\d+\//gm);
			}

			id = id[0].slice(1, -1);

			P.getResource([`/api/v2/pokemon/${id}`, `/api/v2/pokemon-species/${id}`])
				.then(res => {
					setAllPokemon(currentList => [...currentList, {...res[0], ...res[1]}]);
					allPokemon.sort((a, b) => a.order - b.order)
				})
				.catch(error => {
					console.log(error)
				})
		});
	};

	const getAllPokemon = (dex, load) => {
		if (dex === 1) {
			P.getPokemonsList(load)
				.then(res => {
					setLoadMore({...loadMore, offset: loadMore.offset + loadMore.limit})
					createAllPokemon(res.results)
				})
				.catch((error) => {
					console.log('There was an ERROR:', error);
				});
		} else {
			P.getPokedexByName(dex)
				.then(res => {
					createAllPokemon(res.pokemon_entries);
				})
		}
	}

	useEffect(() => {
		setLoading(true);
		getAllPokemon(dex.id, loadMore);
		setLoading(false);
	}, [])

	return (
		<Container component="main" sx={{ p: 0, pt: "100px" }}>
			<Container component="header">
				{loading ? (
					<Skeleton width="100%">
						<Typography variant="h2" component="h1">.</Typography>
					</Skeleton>
				) : (
					<Typography variant="h2" component="h1" sx={{ textTransform: "capitalize" }}>{dex.name} Pokedex</Typography>
				)}
			</Container>

			<Container id="Pokedex">
				{allPokemon.map(p => (
					<PokedexCard
						key={p.order}
						loading={loading}
						{...p}
					/>
				))}
			</Container>
			
			<Container sx={{ pt: 5, pb: 10, textAlign: 'center' }}>
				{loading ? (
					<Skeleton width="50%" height="40px" />
				) : (
					<Button variant="contained" onClick={() => getAllPokemon(dex.id, loadMore)}>Load More</Button>
				)}
			</Container>

		</Container>
	)
}

export default PokedexList;