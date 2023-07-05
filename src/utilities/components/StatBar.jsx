import { LinearProgress, styled } from '@mui/material'
import { gray } from '../colors'
import { gradient } from '../gradient'

const StatBar = styled(LinearProgress)(({ types, value }) => ({
	backgroundColor: gray[100],
	borderRadius: 50,
	height: 7,
	'& .MuiLinearProgress-bar': {
		background: `linear-gradient(45deg, ${gradient[types[0]][types[1]]})`,
		borderRadius: 50,
		width: `${value}%`,
		transform: 'translateX(0) !important',
	}
}))

export default StatBar