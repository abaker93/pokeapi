import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'
import { matchSorter } from 'match-sorter'

import { Box, Button, Container } from '@mui/material'

import Filter from '../components/Filter'
import Card from '../components/pokedex/Card'
import Header from '../components/pokedex/Header'
import { getNameByLang, getNumByDex } from '../utilities/utilities'


const P = new Pokedex()

const PokedexContainer = () => {
	const lang = useOutletContext()
	const [loading, setLoading] = useState(false)
	const [dex, setDex] = useState('kanto')
	const [dexName, setDexName] = useState('')
	const [dexLength, setDexLength] = useState(3)
	const [searchOptions, setSearchOptions] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [loadMore, setLoadMore] = useState({ limit: 20, offset: 0 })
	const [pokemon, setPokemon] = useState([])

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
			.catch(console.error)
	}

	const getPokedex = dex => {
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
		setLoading(true)
		setLoadMore({ limit: 20, offset: 0 })
		getPokedex(dex)
		setLoading(false)
	}, [dex])

	if (loading) {
		return (
			<p>Loading... change this later</p>
		)
	}

	return (
		<>
			<Filter />
			<Header
				dexLength={dexLength}
				dexName={dexName}
				searchOptions={searchOptions}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			{searchInput
				? (
					<SearchPokedexCards
						arr={matchSorter(searchOptions, searchInput, {keys: ['id', 'name']})}
						dex={dex}
						dexLength={dexLength}
						lang={lang}
					/>
				) : (
					<PokedexCards
						arr={searchOptions}
						dex={dex}
						dexLength={dexLength}
						lang={lang}
						loadMore={loadMore} setLoadMore={setLoadMore}
						pokemon={pokemon} setPokemon={setPokemon}
					/>
				)
			}
		</>
	)
}

const PokedexCards = props => {
	const { arr, dex, dexLength, lang, loadMore, setLoadMore, pokemon, setPokemon } = props

	const getPokemon = arr => {
		const sliceArr = arr.slice(loadMore.offset, (loadMore.offset + loadMore.limit))

		sliceArr.forEach(obj => {
			P.getResource(obj.url)
				.then(species => {

					P.getResource(species.varieties.filter(f => f.is_default)[0].pokemon.url)
						.then(poke => {

							setPokemon(val => [...val, {
								id: getNumByDex(species.pokedex_numbers, dex),
								name: getNameByLang(species.names, lang),
								sprite: poke.sprites.other["official-artwork"].front_default,
								types: [
									{slot: 1, type: poke.types[0].type.name},
									{slot: 2, type: poke.types.length > 1 ? poke.types[1].type.name : null}
								]
							}])

						})

				})
			
		})

		setLoadMore({ limit: loadMore.limit, offset: loadMore.offset + loadMore.limit})
	}

	useEffect(() => {
		if (pokemon.length === 0) {
			setLoadMore({ limit: 20, offset: 0 })
			getPokemon(arr)
		}
	}, [arr])

	return (
		<>
			<Container maxWidth="xl" sx={{ mt: 2 }}>
				<Box>
					{pokemon.sort((a,b) => a.id - b.id).map(m => (
						<Card
							key={m.id}
							id={m.id}
							name={m.name}
							sprite={m.sprite}
							types={m.types}
							dexLength={dexLength}
						/>
					))}
				</Box>
			</Container>
			{pokemon.length < dexLength ? (
				<Box
					sx={{
						position: 'sticky',
						bottom: 0,
						py: 2,
						display: 'flex',
						justifyContent: 'center',
						background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
						backdropFilter: 'blur(3px)',
						borderTop: '0.5px solid rgba(38, 50, 56, 0.2)',
					}}
				>
					<Button variant="contained" onClick={e => getPokemon(arr)}>
						Load More
					</Button>
				</Box>
			) : null}
		</>
	)
}

const SearchPokedexCards = props => {
	const [pokemon, setPokemon] = useState([])

	const getPokemon = arr => {
		setPokemon([])
		
		arr.forEach(obj => {
			P.getResource(obj.url)
				.then(species => {
					
					P.getResource(species.varieties.filter(f => f.is_default)[0].pokemon.url)
						.then(poke => {
							
							setPokemon(pokemon => [...pokemon, {
								id: getNumByDex(species.pokedex_numbers, props.dex),
								name: getNameByLang(species.names, props.lang),
								sprite: poke.sprites.other["official-artwork"].front_default,
								types: [
									{slot: 1, type: poke.types[0].type.name},
									{slot: 2, type: poke.types.length > 1 ? poke.types[1].type.name : null}
								]
							}])
						})
				})
		})
	}

	useEffect(() => {
		const filterPokemon = async () => {
			await setPokemon([])
			getPokemon(props.arr)
		}

		filterPokemon()
	}, [props.arr])

	return (
		<Container maxWidth="xl" sx={{ mt: 2 }}>
			<Box>
				{pokemon.sort((a,b) => a.id - b.id).map(m => (
					<Card
						key={m.id}
						id={m.id}
						name={m.name}
						sprite={m.sprite}
						types={m.types}
						dexLength={props.dexLength}
					/>
				))}
			</Box>
		</Container>
	)
}

export default PokedexContainer