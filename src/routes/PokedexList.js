import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { useParams } from "react-router-dom";
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, Chip, Container, Paper, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { formatDexId, getPokeName, getPokedexName } from "../utilities/utilities";
import { grass, poison } from "../utilities/colors";

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
		<>
			<Box id="PokedexList" component="main">
				<Container>
					<Box component="header" mt={3} mb={5}>
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
				</Container>
				<Box
					position="sticky" bottom={0} py={2}
					display="flex" justifyContent="center"
					sx={{
						background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
						backdropFilter: 'blur(3px)',
						borderTop: '0.5px solid rgba(38, 50, 56, 0.2)',
					}}
				>
					<Button variant="contained" onClick={() => getAllPokemon(dex.id)}>Load More</Button>
				</Box>
			</Box>
			
		</>
	)
}

const PokedexCard = p => {
	const pokeImg = p.sprites.other["official-artwork"].front_default;

	return (
		<Card
			className="pokedex-card"
			type1={p.types[0].type.name}
			type2={p.types[1] ? p.types[1].type.name : p.types[0].type.name}
			elevation={16}
			sx={{
				overflow: "visible",
				mt: 3,
			}}
		>
			<CardActionArea href={`/pokemon/${formatDexId(p.id)}`}>
				<CardContent>
					<Grid container columnSpacing={2}>
						<Grid xs={4} sx={{ position: "relative" }}>
							<img src={pokeImg} alt={p.name} />
						</Grid>
						<Grid xs={8}>
							<Box mb={0}>
								<Typography variant="h6" component="h2" fontWeight="medium">
									<Typography component="span" mr={0.5} color="gray-300" fontSize="0.75em">
										<Typography component="span" mr={0.25} fontSize="0.75em" textTransform="uppercase">No.</Typography>
										{formatDexId(p.dex_id)}
									</Typography>
									{getPokeName(p.names, "en")}
								</Typography>
							</Box>
							<Box>
								<Chip variant="type" size="xsmall" type={p.types[0].type.name} label={p.types[0].type.name} />
								{p.types[1] ? <Chip variant="type" size="xsmall" type={p.types[1].type.name} label={p.types[1].type.name} sx={{ ml: 1 }} /> : null}
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default PokedexList;