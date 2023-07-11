import { Tab, styled } from '@mui/material'

const PokemonTab = styled(Tab)(() => ({
	color: 'blue',
	'&.Mui-selected': {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}))

export default PokemonTab