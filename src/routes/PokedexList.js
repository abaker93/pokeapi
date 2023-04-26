import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { useParams } from "react-router-dom";
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, Chip, Container, Paper, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { formatDexId, getPokeName, getPokedexName } from "../utilities/utilities";
import { VisibilityRounded } from "@mui/icons-material";

const P = new Pokedex();

const PokedexList = () => {
	const dex = getPokedexName(useParams().dex);

	const [loading, setLoading] = useState(true);
	const [allPokemon, setAllPokemon] = useState([]);
	const [loadMore, setLoadMore] = useState({
		limit: 20,
		offset: 0,
	});
	const [pokeSearch, setPokeSearch] = useState([]);
	const [searchValue, setSearchValue] = useState();
	const [searchInputValue, setSearchInputValue] = useState('');

	const getAllPokemon = dex => {
		P.getPokedexByName(dex)
			.then(res1 => {
				const entries = res1.pokemon_entries
				const loaded = entries.slice(loadMore.offset, (loadMore.offset + loadMore.limit))

				entries.map(m => {
					P.getResource(m.pokemon_species.url)
						.then(res2 => {
							setPokeSearch(currentList => [...currentList, getPokeName(res2.names, "en")])
						})
						.catch((error) => {
							console.log('There was an ERROR:', error);
						});
				})

				loaded.map(m => {
					P.getResource(m.pokemon_species.url)
						.then(res2 => {
							const v = res2.varieties.filter(f => f.is_default).map(m => m.pokemon.url)[0];

							P.getResource(v)
								.then(res3 => {
									setAllPokemon(currentList => [...currentList, {dex_id: m.entry_number, ...res2, ...res3}])
									setLoadMore({
										...loadMore,
										offset: (loadMore.offset + loadMore.limit),
									})
								})
								.catch((error) => {
									console.log('There was an ERROR:', error);
								});
						})
						.catch((error) => {
							console.log('There was an ERROR:', error);
						});
				})
			})
			.catch((error) => {
				console.log('There was an ERROR:', error);
			});
	}

	useEffect(() => {
		setLoading(true);
		getAllPokemon(dex.id);
		setLoading(false);
	}, [dex.id])

	if (loading) {
		return (
			<p>Loading...</p>
		)
	}

	return (
		<Container id="PokedexList" component="main">
			<Box component="header" mt={3}>
				<Typography variant="h1">{dex.name} Pokédex</Typography>
				<Paper variant="outline">
					<Autocomplete
						value={searchValue}
						inputValue={searchInputValue}
						onChange={(e, newValue) => {setSearchValue(newValue)}}
						onInputChange={(e, newInputValue) => {setSearchInputValue(newInputValue)}}
						options={pokeSearch.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)}
						renderInput={params => <TextField {...params} label="Search by Pokémon name" />}
						renderOption={(props, option, { inputValue }) => {
							const matches = match(option, inputValue, { insideWords: true });
							const parts = parse(option, matches);

							return (
								<li {...props}>
									<div>
										{parts.map((part, index) => (
											<span
												key={index}
												style={{
													fontWeight: part.highlight ? 700 : 400,
												}}
											>
												{part.text}
											</span>
										))}
									</div>
								</li>
							);
						}}
					/>
				</Paper>
			</Box>
			{allPokemon.sort((a,b) => a.dex_id < b.dex_id ? -1 : a.dex_id > b.dex_id ? 1 : 0).map(m => (
				<PokedexCard
					key={m.id}
					loading={loading}
					{...m}
				/>
			))}
			<Box position="sticky" bottom={0} py={2} display="flex" justifyContent="center">
				<Button variant="contained" onClick={() => getAllPokemon(dex.id)}>Load More</Button>
			</Box>
		</Container>
	)
}

const PokedexCard = p => {
	const pokeImg = p.sprites.other["official-artwork"].front_default;

	return (
		<Card
			className="pokedex-card"
			data-type-one={p.types[0].type.name}
			data-type-two={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
			elevation={16}
			sx={{ overflow: "visible" }}
		>
			<CardActionArea href={`/pokemon/${formatDexId(p.id)}`}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid xs={4} sx={{ position: "relative" }}>
							<img src={pokeImg} alt={p.name} />
						</Grid>
						<Grid xs={8}>
							<Box>
								<Typography variant="h6" component="h2" fontWeight="medium">
									<Typography component="span" mr={0.25} color="gray-300">
										<Typography component="span" mr={0.25}>No.</Typography>
										{formatDexId(p.dex_id)}
									</Typography>
									{getPokeName(p.names, "en")}
								</Typography>
							</Box>
							<Box>
								<Chip variant="type" size="small" type={p.types[0].type.name} label={p.types[0].type.name} />
								{p.types[1] ? <Chip variant="type" size="small" type={p.types[1].type.name} label={p.types[1].type.name} /> : null}
							</Box>
							<Grid container spacing={1}>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">HP</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[0].base_stat}</Typography>
								</Grid>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">ATT</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[1].base_stat}</Typography>
								</Grid>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">DEF</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[2].base_stat}</Typography>
								</Grid>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">SP ATT</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[3].base_stat}</Typography>
								</Grid>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">SP DEF</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[4].base_stat}</Typography>
								</Grid>
								<Grid textAlign="center" xs>
									<Typography component="h3" fontSize="0.65rem" fontWeight="medium">SPD</Typography>
									<Typography variant="body1" fontSize="0.85rem">{p.stats[5].base_stat}</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default PokedexList;