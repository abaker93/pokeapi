import Pokedex from 'pokedex-promise-v2';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "../components/Pokemon/Header";
import Stats from '../components/Pokemon/Stats';
import Evolution from "../components/Pokemon/Evolution";
import Defense from "../components/Pokemon/Defense";
import Abilities from "../components/Pokemon/Abilities";
import Breeding from "../components/Pokemon/Breeding";
import Info from "../components/Pokemon/Info";
import FlavorText from '../components/Pokemon/FlavorText';
import Encounters from '../components/Pokemon/Encounters';
import Moves from '../components/Pokemon/Moves';
import Sprites from '../components/Pokemon/Sprites';

const P = new Pokedex();

const Pokemon = () => {
	const pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(true);
	const [pageData, setPageData] = useState([]);
	const [eggGroups, setEggGroups] = useState([]);
	const [evoChain, setEvoChain] = useState([]);
	const [evoPokemon, setEvoPokemon] = useState([]);
	const [locations, setLocations] = useState([]);

	//~		get pokemon's egg groups
	const getEggGroups = eggGroups => {
		eggGroups.forEach(group => {
			P.getResource(group.url)
				.then(res => {
					setEggGroups(currentList => [...currentList, {...res}])
				})
				.catch(error => {
					console.log(error)
				})
		})
	}

	//~		get pokemon in evolution chain
	const getEvoPokemon = id => {
		P.getResource([
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		])
			.then(res => {
				setEvoPokemon(currentList => [...currentList, {
					...res[0],
					...res[1]
				}])
			})
			.catch(error => {
				console.log(error)
			})
	}

	//~		get pokemon's evolution chain
	const getEvoChain = url => {
		P.getResource(url)
			.then(res => {
				if (res.chain.species.url) {
					let id = res.chain.species.url.match(/[\/][0-9]+/g);
					id = id[0].substring(1)
					getEvoPokemon(id);

					res.chain.evolves_to.map(x => {
						if (x.species.url) {
							let id = x.species.url.match(/[\/][0-9]+/g);
							id = id[0].substring(1)
							getEvoPokemon(id);
						}

						x.evolves_to.map(y => {
							if (y.species.url) {
								let id = y.species.url.match(/[\/][0-9]+/g);
								id = id[0].substring(1)
								getEvoPokemon(id);
							}
						})
					})
				}

				setEvoChain(res);
			})
			.catch(error => {
				console.log(error)
			})
	}

	//~		get pokemon data, pokemon-species data + optional prev/next pokemon data
	const getPageData = id => {
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
						setPageData({
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
						setPageData({
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
					setPageData({
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

				//~		get egg groups from pokemon
				//~		to pass to PokemonBreeding component
				getEggGroups(res[1].egg_groups)

				//~		get evolution chain from pokemon
				//~		to pass to PokemonEvolution component
				getEvoChain(res[1].evolution_chain.url)

				//~		get encounter locations from pokemon
				//~		to pass to PokemonLocation component
				P.getResource(res[0].location_area_encounters)
					.then(loc => setLocations(loc))
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		setLoading(true);
		getPageData(pokemonId);
		setTimeout(() => { setLoading(false); }, 2000)
	}, [pokemonId])

	return (
		loading ? (
			<p>loading</p>
		) : (
		<Container
			key={pageData.id}
			id="Pokemon"
			component="main"
			maxWidth="false"
			data-type-one={pageData.types[0].type.name}
			data-type-two={pageData.types[1] ? pageData.types[1].type.name : pageData.types[0].type.name}
			sx={{ px: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }}
		>
			<Header loading={loading} {...pageData} />
			<Stats loading={loading} {...pageData} />
			<Evolution
				loading={loading}
				evolution={{
					chain: evoChain,
					pokemon: evoPokemon
				}}
				pokemon={pageData}
			/>
			<Defense loading={loading} {...pageData} />
			<Abilities loading={loading} {...pageData} />
			<Breeding loading={loading} eggGroups={eggGroups} pokemon={pageData} />
			<Info loading={loading} {...pageData} />
			<FlavorText loading={loading} {...pageData} />
			<Encounters loading={loading} locations={locations} {...pageData} />
			<Moves loading={loading} {...pageData} />
			<Sprites loading={loading} {...pageData} />
		</Container>
		)
	);
};

export default Pokemon;