import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';

const Nav = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography
					variant="body1"
					component="div"
					sx={{
						flexGrow: 1,
						mr: 2
					}}
				>
					<Link href="/" color="inherit" underline="none">
						Drifloon Database
					</Link>
				</Typography>
				<IconButton
					size="large"
					edge="end"
					color="black"
					aria-label="customization"
				>
					<Settings />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Nav;