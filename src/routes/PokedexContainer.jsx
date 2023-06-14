import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'
import { getNameByLang, getNumByDex } from '../utilities';

const P = new Pokedex()

const PokemonContainer = () => {
	const lang = useOutletContext()
	const [loading, setLoading] = useState(true)
	const [dex, setDex] = useState('kanto')
	const [dexName, setDexName] = useState('')
	const [loadMore, setLoadMore] = useState({ limit: 20, offset: 0 })
	const [searchOptions, setSearchOptions] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [pokemon, setPokemon] = useState([])

	const getPokemonSpecies = url => {
		P.getResource(url)
			.then(data => {
				setPokemon(poke => [...poke, {
					id: getNumByDex(data.pokedex_numbers, dex),
					name: getNameByLang(data.names, lang)
				}])
			})
			.catch(console.error)
	}

	const getPokedex = dex => {
		setLoading(true)
		P.getPokedexByName(dex)
			.then(data => {
				setDexName(getNameByLang(data.names, lang))

				data.pokemon_entries.map(p => getPokemonSpecies(p.pokemon_species.url))
				setLoading(false)
				// return data
			})
			// .then(data => {
				
			// })
			.catch(console.error)
	}

	useEffect(() => {
		getPokedex(dex)
	}, [dex])

	pokemon.sort((a,b) => a.id - b.id)

	console.log(loading)

	return (
		<>
			<h1>Pokedex Container</h1>
			{console.log(pokemon)}
		</>
	)
}

export default PokemonContainer