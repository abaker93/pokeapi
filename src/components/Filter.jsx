import { AppBar, Box, Button, IconButton, Slide, Toolbar, useScrollTrigger } from "@mui/material"
import styled from "@emotion/styled";
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SortSharpIcon from '@mui/icons-material/SortSharp';
import { grey } from "@mui/material/colors";

const FilterHeader = styled(AppBar)(() => ({
	backgroundColor: grey[100],
	position: 'sticky',
	top: 56,
	transition: 'all ease-in-out 0.25s',
	'&.scroll': {
		backgroundColor: 'rgba(243, 243, 243, 0.9)',
		backdropFilter: 'blur(3px)',
	},
}))

const HideOnScroll = props => {
	const { children, window } = props

	const triggerHide = useScrollTrigger({
		target: window ? window() : undefined,
	})

	const triggerBackground = useScrollTrigger({
		disableHysteresis: true,
		target: window ? window() : undefined,
		threshold: 100,
	})

	return (
		<Slide appear={false} direction="down" in={!triggerHide}>
			<FilterHeader elevation={0} className={triggerBackground ? 'scroll' : undefined}>
				{children}
			</FilterHeader>
		</Slide>
	)
}

const Filter = () => {
	return (
		<HideOnScroll>
			<Toolbar>
				<Box sx={{ ml: 'auto' }}>
					<IconButton variant="outlined" size="small" sx={{ minWidth: 'auto', px: 0.5, mr: 1 }}>
						<SortSharpIcon fontSize="small" />
					</IconButton>
					<IconButton variant="outlined" size="small" sx={{ minWidth: 'auto', px: 0.5 }}>
						<FilterListSharpIcon fontSize="small" />
					</IconButton>
				</Box>
			</Toolbar>
		</HideOnScroll>
	)
}

export default Filter