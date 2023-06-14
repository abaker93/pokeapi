import { useState } from "react"
import { Autocomplete, Box, TextField, Typography, createFilterOptions } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const Search = props => {
	console.log(props)

	// console.log(searchValues)

	const filterOptions = createFilterOptions({
		stringify: ({ id, name }) => `${id} ${name}`
	})

	// const autocompleteOptions = [
	// 	{ id: 1234, name: 'Bulbasaur' },
	// 	{ id: 3456, name: 'Venusaur' },
	// 	{ id: 81, name: 'Ivysaur' }
	// ]

	return (
		<Autocomplete
			autoHighlight
			filterOptions={filterOptions}
			getOptionLabel={({ id, name }) => `${id} ${name}`}
			id="pokedex-search"
			inputValue={props.state.searchInput}
			isOptionEqualToValue={(option, value) => option.name === value.name || option.id === value.id}
			onInputChange={(e, value) => props.dispatch({ type: 'searchInput', value: value })}
			options={props.state.searchValues}
			renderInput={params => (
				<TextField
					label="Search by name or #"
					variant="outlined"
					{...params}
				/>
			)}
			// renderOption={(props, option, { searchInput }) => {
			// 	const nameMatches = match(option.name, searchInput, { insideWords: true, findAllOccurrences: true })
			// 	const nameParts = parse(option.name, nameMatches)
			// 	const idMatches = match(option.id.toString(), searchInput, { insideWords: true, findAllOccurrences: true })
			// 	const idParts = parse(option.id.toString(), idMatches)
				
			// 	return (
			// 		<Box component="li" {...props}>
			// 			<Grid container spacing={2}>
			// 				<Grid>
			// 					{idParts.map((part, index) => (
			// 						<Typography key={index} variant="span" style={{ fontWeight: part.highlight ? 700 : 400 }}>
			// 							{part.text}
			// 						</Typography>
			// 					))}
			// 				</Grid>
			// 				<Grid>
			// 					{nameParts.map((part, index) => (
			// 						<Typography key={index} variant="span" style={{ fontWeight: part.highlight ? 700 : 400 }}>
			// 							{part.text}
			// 						</Typography>
			// 					))}
			// 				</Grid>
			// 			</Grid>
			// 		</Box>
			// 	)
			// }}
		/>
	)
}

export default Search