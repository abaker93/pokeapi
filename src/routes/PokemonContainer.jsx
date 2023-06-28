import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import Pokedex from 'pokedex-promise-v2'
import { Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

import Abilities from "../components/pokemon/Abilities"
import Defense from "../components/pokemon/Defense"
import Evolution from "../components/pokemon/Evolution"
import Header from "../components/pokemon/Header"
import Stats from "../components/pokemon/Stats"

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
	const [abilities, setAbilities] = useState([])
	const [prev, setPrev] = useState(null)
	const [next, setNext] = useState(null)


	const getPokemon = id => {
		const prevId = id - 1
		const nextId = id + 1

		P.getResource([
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		])
			.then(data => {
				//~~	setPokemon	//
				setPokemon({ ...data[0], ...data[1] })
				return data
			})
			.then(data => {
				//~~	Get evolutionChain								//
				//~~	Get evolutionPokemon by chain IDs	//
				//~~	setEvolutionChain									//
				//~~	setEvolutionPokemon								//
				const id = getIdFromURL(data[1].evolution_chain.url)

				P.getEvolutionChainById(id)
					.then(data => {
						let arr = []

						if (data.chain.species.url) {
							arr.push(getIdFromURL(data.chain.species.url))
							data.chain.evolves_to.map(x => {
								if (x.species.url) {
									arr.push(getIdFromURL(x.species.url))
									
									x.evolves_to.map(y => {
										if (y.species.url) {
											arr.push(getIdFromURL(y.species.url))
										}
									})
								}
							})
						}
						setEvolutionChain(data)
						return arr
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
					.catch(console.error)
				
				return data
			})
			.then(data => {
				//~~	Get abilities	//
				//~~	setAbilities	//
				let arr = []

				data[0].abilities.map(m => {
					P.getAbilityByName(getIdFromURL(m.ability.url))
						.then(data => {
							arr = [...arr, {
								ability: {
									id:			data.id,
									name:		data.name,
									names:	data.names,
								},
								is_hidden:	m.is_hidden,
								slot:				m.slot,
							}]
							setAbilities(arr)
						})
						.catch(console.error)
				})
			})
			.catch(console.error)

		//~~	Get Prev Pokemon							//
		//~~	setPrev												//
		//~~	catch error & setPrev to null	//
		P.getPokemonByName(prevId)
			.then(data => setPrev(data))
			.catch(setPrev(null))
		
		//~~	Get Next Pokemon							//
		//~~	setNext												//
		//~~	catch error & setNext to null	//
		P.getPokemonByName(nextId)
			.then(data => setNext(data))
			.catch(setNext(null))
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
				<Container>
					<Stats stats={pokemon.stats} />
					{evolutionChain !== '' && evolutionPokemon.length > 0 ? (
						<Evolution
							evolutionChain={evolutionChain}
							evolutionPokemon={evolutionPokemon}
							lang={lang}
							pokemon={pokemon}
						/>
					) : null}
					<Defense
						lang={lang}
						pokemon={pokemon}
						type1={pokemon.types[0].type.name}
						type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
					/>
					<Grid container>
						<Grid xs={6}>
							{abilities.length > 0 ? (
								<Abilities abilities={abilities} lang={lang} pokemon={pokemon} />
							) : null}
						</Grid>
					</Grid>
					
				</Container>
			</>
		)
	}
}

export default PokemonContainer