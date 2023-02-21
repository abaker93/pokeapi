import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

const Nav = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						mr: 2
					}}
				>
					<Link to="/">
						Drifloon Database
					</Link>
				</Typography>
				<IconButton
					size="large"
					edge="end"
					color="inherit"
					aria-label="customization"
				>
					<Settings />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Nav;