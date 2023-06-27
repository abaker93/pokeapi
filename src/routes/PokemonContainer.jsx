import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import Pokedex from 'pokedex-promise-v2'
import Header from "../components/pokemon/Header"
import Stats from "../components/pokemon/Stats"
import Evolution from "../components/pokemon/Evolution"
import { getIdFromURL } from "../utilities/utilities"

const P = new Pokedex()


const PokemonContainer = props => {
	const lang = useOutletContext()
	const pokemonId = parseInt(useParams().id)

	const [loading, setLoading] = useState(false)
	const [dex, setDex] = useState('national')
	const [pokemon, setPokemon] = useState('')
	const [evolutionChain, setEvolutionChain] = useState('')
	const [evolutionPokemon, setEvolutionPokemon] = useState('')
	const [prev, setPrev] = useState('')
	const [next, setNext] = useState('')


	const getEvolutionPokemon = id => {
		P.getResource([
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		])
			.then(data => {
				setEvolutionPokemon(val => [...val, {
					...data[0],
					...data[1],
				}])
			})
	}


	const getPokemon = id => {
		const prevId = id - 1
		const nextId = id + 1

		P.getResource([
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		])
			.then(data => {
				setPokemon({ ...data[0], ...data[1] })
				return getIdFromURL(data[1].evolution_chain.url)
			})
			.then(id => {
				P.getEvolutionChainById(id)
					.then(data => {
						if (data.chain.species.url) {
							getEvolutionPokemon(getIdFromURL(data.chain.species.url))
							
							data.chain.evolves_to.map(x => {
								if (x.species.url) {
									getEvolutionPokemon(getIdFromURL(x.species.url))
									
									x.evolves_to.map(y => {
										if (y.species.url) {
											getEvolutionPokemon(getIdFromURL(y.species.url))
										}
									})
								}
							})
						}
						setEvolutionChain(data)
					})
			})
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
		setDex(props.dex)
		getPokemon(pokemonId)
	}, [props.dex])


	if (loading) {
		return (
			<p>Loading...</p>
		)
	}


	if (pokemon !== '') {
		return (
			<>
				<Header lang={lang} pokemon={pokemon} next={next} prev={prev} />
				<Stats stats={pokemon.stats} />
				{evolutionChain !== '' ? (
					<Evolution
						evolutionChain={evolutionChain}
						evolutionPokemon={evolutionPokemon}
						lang={lang}
						pokemon={pokemon}
					/>
				) : null}
				
			</>
		)
	}
}

export default PokemonContainer