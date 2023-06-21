import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { matchSorter } from 'match-sorter'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { formatDexId } from '../utilities/utilities'

const Search = props => {
	const { searchOptions, searchInput, setSearchInput, searchValue, setSearchValue, dexLength } = props

	const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue, {keys: ['id', 'name'], baseSort: (a, b) => (a.id - b.id)})

	return (
		<Autocomplete
			id="pokedex-search"
			freeSolo
			options={searchOptions}
			getOptionLabel={option => option.name}
			filterOptions={filterOptions}
			inputValue={searchInput ? searchInput : ''}
			onInputChange={(e, newValue) => setSearchInput(newValue)}
			value={searchValue ? searchValue : null}
			onChange={(e, newValue) => setSearchValue(newValue)}
			isOptionEqualToValue={(option, value) => option.name === value.name || option.id === value.id}
			renderInput={params => (
				<TextField
					label="Search for Pokémon by name or Pokedéx number"
					variant="outlined"
					{...params}
				/>
			)}
			renderOption={(props, option, { inputValue }) => {
				const id = formatDexId(option.id, dexLength)
				const nameMatches = match(option.name, inputValue, { insideWords: true, findAllOccurrences: true })
				const nameParts = parse(option.name, nameMatches)
				const idMatches = match(id, inputValue, { insideWords: true, findAllOccurrences: true })
				const idParts = parse(id, idMatches)

				return (
					<Box component="li" {...props}>
						<Grid xs={12} container justifyContent="space-between" alignItems="center">
							<Grid>
								{nameParts.map((part, index) => (
									<Typography key={index} component="span" style={{ fontWeight: part.highlight ? 700 : 400 }}>
										{part.text}
									</Typography>
								))}
							</Grid>
							<Grid>
								{idParts.map((part, index) => (
									<Typography key={index} component="span" variant="caption" style={{ fontWeight: part.highlight ? 700 : 400 }}>
										{part.text}
									</Typography>
								))}
							</Grid>
						</Grid>
					</Box>
				)
			}}
		/>
	)
}

export default Search