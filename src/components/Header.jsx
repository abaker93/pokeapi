import { AppBar, Box, IconButton, Toolbar, useScrollTrigger } from '@mui/material';
import styled from '@emotion/styled';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { white } from '../utilities/colors';

const MainHeader = styled(AppBar)(() => ({
	backgroundColor: white,
	zIndex: 2000,
	position: 'sticky',
	boxShadow: '0px 1px 0 0 rgba(38, 50, 56, 0.1)',
	transition: 'all ease-in-out 0.25s',
	'&.scroll': {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		backdropFilter: 'blur(3px)',
	},
}))

const BlurOnScroll = props => {
	const { children, window } = props

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		target: window ? window() : undefined,
		threshold: 100,
	})

	return (
		<MainHeader elevation={0} className={trigger ? 'scroll' : undefined}>
			{children}
		</MainHeader>
	)
}

const Header = props => {
	return (
		<BlurOnScroll>
			<Toolbar>
				<Box sx={{ mr: 'auto' }}>
					<IconButton variant="outlined" size="small" sx={{ mr: 1 }}>
						<MenuSharpIcon fontSize="small" />
					</IconButton>
					<IconButton aria-label="logo" color="error">
						<AdjustSharpIcon />
					</IconButton>
				</Box>
				<Box>
					<IconButton variant="outlined" size="small" sx={{ mr: 1 }}>
						<SearchSharpIcon fontSize="small" />
					</IconButton>
					<IconButton variant="outlined" size="small" sx={{ mr: 1 }}>
						<DarkModeSharpIcon fontSize="small" />
					</IconButton>
					<IconButton variant="outlined" size="small">
						<SettingsSharpIcon fontSize="small" />
					</IconButton>
				</Box>
			</Toolbar>
		</BlurOnScroll>
	)
}

export default Header