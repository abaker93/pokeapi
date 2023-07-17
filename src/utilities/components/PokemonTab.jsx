import { Tab, alpha, styled } from '@mui/material'
import { gray, text, white } from '../colors'

const PokemonTab = styled(Tab)(({ theme, color }) => ({
	minWidth: '48px',
	backgroundColor: alpha(color[100], 0.3),
	borderTop: `1px solid ${color[500]}`,
	borderLeft: `1px solid ${color[500]}`,
	borderRight: `1px solid ${color[500]}`,
	borderBottom: `1px solid ${theme.palette.background.default}`,
	color: color[700],
	padding: '0 13px',
	margin: '0 3px',
	borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
	transition: 'all ease-in-out 0.25s',
	
	'&.Mui-selected': {
		backgroundColor: theme.palette.background.default,
		color: color[900],
		borderTop: `1px solid ${color[700]}`,
		borderLeft: `1px solid ${color[700]}`,
		borderRight: `1px solid ${color[700]}`,
		borderBottom: `1px solid ${theme.palette.background.default}`,
		zIndex: 1,
	},
}))

export default PokemonTab