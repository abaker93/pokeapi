import { useEffect, useReducer, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { Box, Container, Paper, Typography } from '@mui/material'
import Search from '../components/_Search'
import { formatDexId, getNameByLang } from '../utilities'

const P = new Pokedex()

const reducer = (state, action) => {
	const { type, value } = action
	return { ...state, [type]: value }
}

const PokedexContainer = () => {
	const [searchValues, setSearchValues] = useState([])

	const initState = {
		language: 'en',
		loading: 'loading',
		dex: 'kanto',
		name: '',
		dexLength: 0,
		loadMore: {
			limit: 20,
			offset: 0
		},
		searchInput: ''
	}

	const [state, dispatch] = useReducer(reducer, initState)

	const getPokemon = entries => {
		entries.map(m => {
			P.getResource(m.pokemon_species.url)
				.then(data => {
					setSearchValues(values => [
						...values,
						{
							id: formatDexId(m.entry_number),
							name: getNameByLang(data.names, state.language)
						}
					])
				})
		})
	}

	const getPokedex = dex => {
		P.getPokedexByName(dex)
			.then(data => {
				dispatch({ type: 'name', value: getNameByLang(data.names, state.language) })
				dispatch({ type: 'dexLength', value: data.pokemon_entries.length })

				getPokemon(data.pokemon_entries)
			})
			.catch(e => console.log('ERROR:', e))
	}

	useEffect(() => {
		// setLoading(true)
		getPokedex(state.dex)
	}, [state.dex])

	console.log(searchValues)
	// console.log(dexLength)

	// if (state.loading) {
	// 	return (
	// 		<p>Loading... replace this later</p>
	// 	)
	// }

	if (searchValues.length >= 151) {
		// console.log(dexLength)
		// console.log(searchValues.length)
		return (
			<Container maxWidth="xl" sx={{ mt: 2 }}>
				<Header name={state.name}>
					<Search state={state} dispatch={dispatch} />
				</Header>
			</Container>
		)
	}
		

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