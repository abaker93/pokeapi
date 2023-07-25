import { Tabs, alpha, styled } from '@mui/material'

const PokemonTabs = styled(Tabs, {
	shouldForwardProp: prop => prop !== 'color'
})(({ color }) => ({
	position: 'relative',
	
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: '0.5px',
		width: '100%',
		backgroundColor: color[600],
	}
}))

PokemonTabs.defaultProps = {
	variant: 'scrollable',
	scrollButtons: 'auto',
	TabIndicatorProps: { style: { display: 'none' } },
}

export default PokemonTabs