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

	const getPokemonSpecies = urls => {
		P.getResource(urls)
			.then(data => {
				data.forEach(poke => {
					setSearchOptions(opt => [...opt, {
						id: getNumByDex(poke.pokedex_numbers, dex),
						name: getNameByLang(poke.names, lang)
					}])
					setDexLength(getNumByDex(poke.pokedex_numbers, dex))
				})
			})
			.catch(console.error)
	}

	const getPokedex = dex => {
		setLoading(true)
		P.getPokedexByName(dex)
			.then(data => {
				setDexName(getNameByLang(data.names, lang))
				
				let urlArr = []
				data.pokemon_entries.map(p => urlArr.push(p.pokemon_species.url))
				getPokemonSpecies(urlArr)
			})
			.catch(console.error)
	}

	useEffect(() => {
		getPokedex(dex)
		
		setTimeout(() => {
			searchOptions.sort((a,b) => a.id - b.id)

			setLoading(false)
		}, 300)
	}, [dex])
	
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