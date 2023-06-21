import { Box, Container, Typography } from '@mui/material'
import Search from '../../components/Search'

const Header = props => {
	const { dexLength, dexName, searchOptions, searchInput, setSearchInput, searchValue, setSearchValue } = props
	
	return (
		<Container maxWidth="xl" sx={{ mt: 2 }}>
			<Box my={4}>
				<Typography variant="h3" component="h1" sx={{ mb: 1.75 }}>{dexName} Pokédex</Typography>
				{searchOptions.length > 0 ? (
					<Search
						searchOptions={searchOptions}
						searchInput={searchInput}
						setSearchInput={setSearchInput}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						dexLength={dexLength}
					/>
				) : null}
			</Box>
		</Container>
	)
}

export default Header