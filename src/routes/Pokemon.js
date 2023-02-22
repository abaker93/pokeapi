import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL, formatDexId } from '../utilities';
import { Skeleton, Typography, Button } from '@mui/material';

const Pokemon = () => {
	let pokemonId = parseInt(useParams().pokeId);

	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState([]);

	const getPokemon = id => {
		setLoading(true);

		Promise.all([
			fetch(`${baseURL}/pokemon/${id}`).then(value => value.json()),
			fetch(`${baseURL}/pokemon-species/${id}`).then(value => value.json()),
			fetch(`${baseURL}/pokemon/${id-1}`).then(value => value.json()),
			fetch(`${baseURL}/pokemon/${id+1}`).then(value => value.json())
		]).then(response => {
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
		})

		setTimeout(() => {
			setLoading(false)
		}, 0)
	}

	useEffect(() => {
		getPokemon(pokemonId);
	}, [pokemonId]);

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
								<img
									className="prev-poke-img"
									src={p.prev.artwork}
									alt={p.prev.name}
								/>
							</Link>
							<Link to={`/pokemon/${p.id + 1}`}>
								<img
									className="next-poke-img"
									src={p.next.artwork}
									alt={p.next.name}
								/>
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