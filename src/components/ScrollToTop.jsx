import { Box, Fab, Fade, useScrollTrigger } from "@mui/material"
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

const ScrollToTop = props => {
	const { window } = props

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
	})

	const handleClick = e => {
		const anchor = (e.target.ownerDocument || document).querySelector('#top')

		if (anchor) {
			anchor.scrollIntoView({ block: 'center' })
		}
	}

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				<Fab size="small" aria-label="scroll back to top">
					<KeyboardArrowUpSharpIcon />
				</Fab>
			</Box>
		</Fade>
	)
}

export default ScrollToTop