import { Card, alpha, styled } from "@mui/material"

const TypeCard = styled(Card)(({ color }) => ({
	backgroundColor: alpha(color[100], 0.3),
	borderColor: color[500],
	color: color[900],
	'& .MuiCardContent-root': {
		padding: 12,
		'&:last-child': {
			paddingBottom:	12,
		}
	}
}))

export default TypeCard