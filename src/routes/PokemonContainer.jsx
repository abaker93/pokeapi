import { useEffect, useReducer } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import Abilities from '../components/pokemon/Abilities'
import Breeding from '../components/pokemon/Breeding'
import Defense from '../components/pokemon/Defense'
import Evolution from '../components/pokemon/Evolution'
import FlavorText from '../components/pokemon/FlavorText'
import Encounters from '../components/pokemon/Encounters'
import Gender from '../components/pokemon/Gender'
import Header from '../components/pokemon/Header'
import Size from '../components/pokemon/Size'
import Stats from '../components/pokemon/Stats'
import Training from '../components/pokemon/Training'

import { getIdFromURL } from '../utilities/utilities'
import Moves from '../components/pokemon/Moves'

const P = new Pokedex()


const createInitialState = props => {
	const { id, dex, lang } = props

	return {
		dex:				dex,
		encounters:	null,
		evolution: {
			chain:		null,
			level:		null,
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
		case 'evolution.level': {
			return {
				...state,
				evolution: {
					...state.evolution,
					level: value,
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
			id:		parseInt(useParams().id),
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
				dispatch({ type: 'pokemon', value: { ...data[0], ...data[1] } })
				dispatch({
					type: 'types',
					value: [
						data[0].types[0].type.name,
						data[0].types[1] ? data[0].types[1].type.name : data[0].types[0].type.name,
					]
				})
				return data
			})
			.then(data => {
				//~~	Get Evolution Chain									//
				//~~	Get Evolution Pokemon by chain IDs	//
				//--	set evolution.chain									//
				//--	set evolution.pokemon								//
				P.getResource(data[1].evolution_chain.url)
					.then(data => {
						let lvl = 1
						let arr = []

						if (data.chain.species.url) {
							arr.push(getIdFromURL(data.chain.species.url))
							data.chain.evolves_to.map(x => {
								if (x.species.url) {
									arr.push(getIdFromURL(x.species.url))
									if (lvl < 2) { lvl = 2 }
									
									x.evolves_to.map(y => {
										if (y.species.url) {
											arr.push(getIdFromURL(y.species.url))
											if (lvl < 3) { lvl = 3 }
										}
									})
								}
							})
						}
						dispatch({ type: 'evolution.chain', value: data })
						dispatch({ type: 'evolution.level', value: lvl })
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
				let arr = []

				data[1].egg_groups.map(m => {
					P.getResource(m.url)
						.then(data => {
							arr = [...arr, {
								id:			data.id,
								name:		data.name,
								names:	data.names,
							}]
							dispatch({ type: 'eggGroups', value: arr })
						})
						.catch(console.error)
				})

				return data
			})
			.then(data => {
				//~~	Get Stats		//
				//--	set evYield	//
				let arr = []

				data[0].stats.filter(f => f.effort > 0).map(m => {
					P.getResource(m.stat.url)
						.then(data => {
							arr = [...arr, {
								id:			data.id,
								effort:	m.effort,
								names:	data.names,
							}]
							dispatch({ type: 'evYield', value: arr })
						})
						.catch(console.error)
				})

				return data
			})
			.then(data => {
				//~~	Get Growth Rate		//
				//--	set growthRate		//
				P.getGrowthRateByName(data[1].growth_rate.name)
					.then(data => dispatch({ type: 'growthRate', value: data }))

				return data
			})
			.then(data => {
				//~~	Get Encounter Locations		//
				//--	set encounters		//
				P.getResource(data[0].location_area_encounters)
					.then(data => {
						let arr = []

						data.map(m => {
							P.getLocationAreaByName(m.location_area.name)
								.then(area => {
									P.getLocationByName(area.location.name)
										.then(location => {
											arr = [...arr, {
												id: location.id,
												name: location.name,
												names: location.names,
												version_details: m.version_details,
											}]

											arr = arr.filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)

											dispatch({ type: 'encounters', value: arr })
										})
								})
						})
						return data
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
					
					{state.evolution.chain && <Evolution state={state} />}
					
					<Defense state={state} />
					
					<Grid container spacing={{ xs: 5, sm: 2 }} columns={{ xs: 1, sm: 2 }} sx={{ mb: 5 }}>
						<Grid xs={1} sm={1}>
							{state.abilities ? <Abilities state={state} /> : null}
						</Grid>
						<Grid xs={1} sm={1}>
							{state.evYield && state.growthRate ? <Training state={state} /> : null}
						</Grid>
						<Grid container spacing={2} xs={1}>
							<Grid xs>
								<Gender state={state} />
							</Grid>
							<Grid xs>
								<Size state={state} />
							</Grid>
						</Grid>
						<Grid xs={1}>
							{state.eggGroups ? <Breeding state={state} /> : null}
						</Grid>
					</Grid>

					<FlavorText state={state} />

					{state.encounters && <Encounters state={state} />}

					<Moves state={state} />

				</Container>
			</>
		)
	}
}

export default PokemonContainer