import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import Pokedex from 'pokedex-promise-v2'
import Header from "../components/pokemon/Header"
import Stats from "../components/pokemon/Stats"

const P = new Pokedex()


const PokemonContainer = props => {
	const lang = useOutletContext()
	const pokemonId = parseInt(useParams().id)

	const [loading, setLoading] = useState(false)
	const [dex, setDex] = useState('national')
	const [pokemon, setPokemon] = useState('')
	const [species, setSpecies] = useState('')
	const [prev, setPrev] = useState('')
	const [next, setNext] = useState('')


	const getPokemon = id => {
		const prevId = id - 1
		const nextId = id + 1

		P.getPokemonByName(id)
			.then(data => setPokemon(data))
		P.getPokemonSpeciesByName(id)
			.then(data => setSpecies(data))
		if (prevId > 0) {
			P.getPokemonByName(prevId)
				.then(data => setPrev(data))
		}
		if (nextId < 1010) {
			P.getPokemonByName(nextId)
				.then(data => setNext(data))
		}
	}


	useEffect(() => {
		setLoading(true)
		setDex(props.dex)
		getPokemon(pokemonId)
		setLoading(false)
	}, [props.dex])

	console.log(pokemon, species)


	if (loading) {
		return (
			<p>Loading...</p>
		)
	}


	if (pokemon !== '' && species !== '') {
		return (
			<>
				<Header lang={lang} pokemon={pokemon} species={species} next={next} prev={prev} />
				<Stats stats={pokemon.stats} />
			</>
		)
	}
}

export default PokemonContainer