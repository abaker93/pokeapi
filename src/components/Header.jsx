import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

const Header = props => {
	return (
		<AppBar position="sticky" color="transparent" enableColorOnDark>
			<Container>
				<Toolbar>
					<Box sx={{ mr: 'auto' }}>
						<Button variant="outlined" size="small" sx={{ minWidth: "auto", px: 0.5, mr: 1 }}>
							<MenuSharpIcon />
						</Button>
						<IconButton aria-label="logo" color="error">
							<AdjustSharpIcon />
						</IconButton>
					</Box>
					<Box>
						<Button variant="outlined" size="small" sx={{ minWidth: "auto", px: 0.5, mr: 1 }}>
							<SearchSharpIcon />
						</Button>
						<Button variant="outlined" size="small" sx={{ minWidth: "auto", px: 0.5, mr: 1 }}>
							<DarkModeSharpIcon />
						</Button>
						<Button variant="outlined" size="small" sx={{ minWidth: "auto", px: 0.5, mr: 1 }}>
							<SettingsSharpIcon />
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header