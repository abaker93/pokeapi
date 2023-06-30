import { LinearProgress, styled } from "@mui/material"
import { gray } from "../colors"

const StatBar = styled(LinearProgress)(({ type }) => ({
	backgroundColor: gray[100],
	borderRadius: 50,
	height: 7,
	'& .MuiLinearProgress-bar': {
		backgroundColor: type[500],
		borderRadius: 50,
	}
}))

export default StatBar