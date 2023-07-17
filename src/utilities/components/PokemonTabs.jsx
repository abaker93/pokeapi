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
		height: '1px',
		width: '100%',
		backgroundColor: color[700],
	}
}))

PokemonTabs.defaultProps = {
	variant: 'scrollable',
	scrollButtons: 'auto',
	TabIndicatorProps: { style: { display: 'none' } },
}

export default PokemonTabs