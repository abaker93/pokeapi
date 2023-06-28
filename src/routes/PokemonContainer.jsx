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
	const [evolutionPokemon, setEvolutionPokemon] = useState([])
	const [prev, setPrev] = useState('')
	const [next, setNext] = useState('')


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
						let idArr = []
						if (data.chain.species.url) {
							idArr.push(getIdFromURL(data.chain.species.url))
							
							data.chain.evolves_to.map(x => {
								if (x.species.url) {
									idArr.push(getIdFromURL(x.species.url))
									
									x.evolves_to.map(y => {
										if (y.species.url) {
											idArr.push(getIdFromURL(y.species.url))
										}
									})
								}
							})
						}

						setEvolutionChain(data)

						return idArr
					})
					.then(arr => {
						let evoArr = []

						arr.forEach(id => {
							P.getResource([
								`/api/v2/pokemon/${id}`,
								`/api/v2/pokemon-species/${id}`,
							])
								.then(data => {
									evoArr = [...evoArr, {
										...data[0],
										...data[1],
									}]

									setEvolutionPokemon(evoArr)
								})
						})
					})
			})


		P.getPokemonByName(prevId)
			.then(data => setPrev(data))
			.catch(setPrev(''))
		P.getPokemonByName(nextId)
			.then(data => setNext(data))
			.catch(setNext(''))
	}


	useEffect(() => {
		setDex(props.dex)
		getPokemon(pokemonId)
	}, [props.dex])

	// console.log(prev, next)


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
				{evolutionChain !== '' && evolutionPokemon.length > 0 ? (
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