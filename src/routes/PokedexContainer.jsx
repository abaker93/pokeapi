import { useEffect, useReducer, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Box, Container, Paper, Typography } from '@mui/material'
import Search from '../components/Search'
import { formatDexId, getNameByLang } from '../utilities'

const P = new Pokedex()

const reducer = (state, action) => {
	const { type, value } = action
	return { ...state, [type]: value }
}

const PokedexContainer = () => {
	const initState = {
		loading: true,
		dex: 'national',
		name: '',
		loadPokemon: {
			limit: 20,
			offset: 0
		},
		searchValues: [],
		searchInputValue: ''
	}

	const [state, dispatch] = useReducer(reducer, initState)

	const getPokemon = entries => {
		entries.map(m => {
			P.getResource(m.pokemon_species.url)
				.then(data => {
					dispatch({
						type: 'searchValue',
						value: (searchValue => [
							...searchValue,
							{
								id: formatDexId(2),
								name: getNameByLang(data.names, 'en')
							}
						])
					})
				})
		})
	}

	const getPokedex = dex => {
		P.getPokedexByName(dex)
			.then(data => {
				const name = data.names.filter(f => f.language.name === 'en')
				dispatch({ type: 'name', value:  name[0].name })

				// console.log(data)
				getPokemon(data.pokemon_entries,)
			})
			.catch(e => console.log('ERROR:', e))
	}

	useEffect(() => {
		dispatch({ type: 'loading', value: true })
		getPokedex(state.dex)
	}, [state.dex])

	console.log(state.searchValues)

	// console.log(state.name)
	// console.log(state.loading)

	// if (state.loading) {
	// 	return (
	// 		<p>Loading... replace this later</p>
	// 	)
	// }

	return (
		<Container maxWidth="xl" sx={{ mt: 2 }}>
			<Header name={state.name}>
				<Search state={state} dispatch={dispatch} />
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

export default PokedexContainer