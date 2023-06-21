import { AppBar, Box, Button, Slide, Toolbar, useScrollTrigger } from "@mui/material"
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SortSharpIcon from '@mui/icons-material/SortSharp';

const HideOnScroll = props => {
	const { children, window } = props

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

const Filter = () => {
	return (
		<HideOnScroll>
			<AppBar position="sticky" color="transparent" sx={{ top: '56px', background: '#EEEEEE' }}>
				<Toolbar>
					<Box sx={{ ml: 'auto' }}>
						<Button variant="outlined" size="small" sx={{ minWidth: 'auto', px: 0.5, mr: 1 }}>
							<SortSharpIcon />
						</Button>
						<Button variant="outlined" size="small" sx={{ minWidth: 'auto', px: 0.5 }}>
							<FilterListSharpIcon />
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
}

export default Filter