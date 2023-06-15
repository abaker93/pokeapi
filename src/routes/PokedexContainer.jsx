import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import Search from '../components/Search'
import { getNameByLang, getNumByDex } from '../utilities'
import { Box, Container, Paper, Typography } from '@mui/material'

const P = new Pokedex()

const PokemonContainer = () => {
	const lang = useOutletContext()
	const [loading, setLoading] = useState(true)
	const [dex, setDex] = useState('kanto')
	const [dexName, setDexName] = useState('')
	const [dexLength, setDexLength] = useState(3)
	const [loadMore, setLoadMore] = useState({ limit: 20, offset: 0 })
	const [searchOptions, setSearchOptions] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [pokemon, setPokemon] = useState([])

	const getPokemon = arr => {
		const sliceArr = arr.slice(loadMore.offset, (loadMore.offset + loadMore.limit))
		let pokemon = []

		sliceArr.forEach(obj => {
			P.getResource(obj.url)
				.then(species => {

					P.getResource(species.varieties.filter(f => f.is_default)[0].pokemon.url)
						.then(poke => {

							pokemon = [...pokemon, {
								id: getNumByDex(species.pokedex_numbers, dex),
								name: getNameByLang(species.names, lang),
								sprite: poke.sprites.other["official-artwork"].front_default,
								types: [
									{slot: 1, type: poke.types[0].type.name},
									{slot: 2, type: poke.types.length > 1 ? poke.types[1].type.name : null}
								]
							}]

							console.log(pokemon)
						})
				})
			
		})

		setLoadMore({ limit: loadMore.limit, offset: loadMore.offset + loadMore.limit})
	}

	const getSearchOptions = urls => {
		P.getResource(urls)
			.then(data => {
				let optArr = []

				data.forEach(poke => {
					optArr = [...optArr, {
						id: getNumByDex(poke.pokedex_numbers, dex),
						name: getNameByLang(poke.names, lang),
						url: `/api/v2/pokemon-species/${poke.id}/`
					}]
					setDexLength(getNumByDex(poke.pokedex_numbers, dex))
				})

				return optArr
			})
			.then(data => {
				setSearchOptions(data)
				return data
			})
			.then(data => getPokemon(data))
			.catch(console.error)
	}

	const getPokedex = dex => {
		setLoading(true)
		P.getPokedexByName(dex)
			.then(data => {
				setDexName(getNameByLang(data.names, lang))
				return data
			})
			.then(data => {
				let urlArr = []
				data.pokemon_entries.map(p => urlArr.push(p.pokemon_species.url))
				
				getSearchOptions(urlArr)
			})
			.catch(console.error)
	}

	useEffect(() => {
		getPokedex(dex)
		setTimeout(() => setLoading(false), 300)
	}, [dex])

	console.log(loadMore.limit, loadMore.offset)

	if (loading) {
		return (
			<p>Loading... change this later</p>
		)
	}

	return (
		<Container maxWidth="xl" sx={{ mt: 2 }}>
			<Header name={dexName}>
				{searchOptions.length > 0 ? (
					<Search
						searchOptions={searchOptions}
						searchInput={searchInput}
						setSearchInput={setSearchInput}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						dexLength={dexLength}
					/>
				) : null}
			</Header>
		</Container>
	)
}

const Header = props => {
	return (
		<Paper variant="outlined" sx={{ py: 2, px: 3 }}>
			<Box mb={3}>
				<Typography variant="h3" component="h1">{props.name} Pokedex</Typography>
				{props.children}
			</Box>
		</Paper>
	)
}

export default PokemonContainer