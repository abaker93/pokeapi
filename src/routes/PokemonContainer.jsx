import { useEffect, useReducer, useState } from "react"
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
import Breeding from "../components/pokemon/Breeding";

const P = new Pokedex()


const createInitialState = props => {
	const { id, dex, lang } = props

	return {
		dex:				dex,
		evolution: {
			chain:		null,
			pokemon:	null,
		},
		id:					id,
		lang:				lang,
		types:			null,
	}
}


const reducer = (state, action) => {
	const { type, value } = action

	switch (type) {
		case 'evolution.chain': {
			return {
				...state,
				evolution: {
					...state.evolution,
					chain: value,
				}
			}
		}
		case 'evolution.pokemon': {
			return {
				...state,
				evolution: {
					...state.evolution,
					pokemon: value,
				}
			}
		}
		default: {
			return { ...state, [type]: value}
		}
	}
}


const PokemonContainer = props => {
	const [state, dispatch] = useReducer(
		reducer,
		({
			id: parseInt(useParams().id),
			dex:	props.dex,
			lang:	useOutletContext(),
		}),
		createInitialState,
	)


	const getPokemon = id => {
		const prevId = id - 1
		const nextId = id + 1

		P.getResource([
			`/api/v2/pokemon/${id}`,
			`/api/v2/pokemon-species/${id}`,
		])
			.then(data => {
				//~~	set pokemon	//
				// console.log(data[0].types[0].type.name)
				dispatch({ type: 'pokemon', value: { ...data[0], ...data[1] } })
				dispatch({ type: 'types', value: data[0].types[0].type.name })
				return data
			})
			.then(data => {
				//~~	Get Evolution Chain									//
				//~~	Get Evolution Pokemon by chain IDs	//
				//--	set evolution.chain									//
				//--	set evolution.pokemon								//
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
						dispatch({ type: 'evolution.chain', value: data })
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
									dispatch({ type: 'evolution.pokemon', value: evoArr })
								})
						})
					})
					.catch(console.error)
				
				return data
			})
			.then(data => {
				//~~	Get abilities	//
				//--	set abilities	//
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
							dispatch({ type: 'abilities', value: arr })
						})
						.catch(console.error)
				})
				return data
			})
			.then(data => {
				//~~	Get Egg Groups	//
				//--	set eggGroups		//
				// console.log(data)
				let arr = []

				data[1].egg_groups.map(m => {
					P.getEggGroupByName(getIdFromURL(m.url))
						.then(data => {
							// console.log(data)
							arr = [...arr, {
								id:			data.id,
								name:		data.name,
								names:	data.names,
							}]
							dispatch({ type: 'eggGroups', value: arr })
						})
						.catch(console.error)
				})
			})
			.catch(console.error)

		//~~	Get Prev Pokemon								//
		//--	set prev												//
		//--	catch error & set prev to null	//
		P.getPokemonByName(prevId)
			.then(data => dispatch({ type: 'prev', value: data }))
			.catch(dispatch({ type: 'prev', value: null }))
		
		//~~	Get Next Pokemon								//
		//--	set next												//
		//--	catch error & set next to null	//
		P.getPokemonByName(nextId)
			.then(data => dispatch({ type: 'next', value: data }))
			.catch(dispatch({ type: 'next', value: null }))
	}


	useEffect(() => {
		getPokemon(state.id)
	}, [state.id])

	// console.log(state)


	if (state.loading) {
		return (
			<p>Loading...</p>
		)
	}


	if (state.pokemon) {
		return (
			<>
				<Header state={state} />

				<Container>
					<Stats state={state} />
					
					{state.evolution.chain ? <Evolution state={state} /> : null}
					
					<Defense state={state} />
					
					<Grid container spacing={2}>
						<Grid xs={6}>
							{state.abilities ? <Abilities state={state} /> : null}
						</Grid>
						<Grid xs={6}>
							{state.eggGroups ? <Breeding state={state} /> : null}
						</Grid>
					</Grid>
					
				</Container>
			</>
		)
	}
}

export default PokemonContainer