import { useState } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';

import SettingsDrawer from './SettingsDrawer';
import Pokeball from '../assets/Pokeball';

const Nav = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

	return (
		<AppBar
			position="fixed"
			elevation={0}
			sx={{
				px: 2,
				borderBottom: "1px solid ",
			}}
		>
			<Toolbar sx={{ p: 0 }}>
				<IconButton
					size="large"
					edge="start"
					aria-label="pokeball"
					href="/"
					disableRipple={true}
				>
					<Pokeball color="#9754B1" style={{ height: "2rem" }} />
				</IconButton>
				<Typography
					variant="h5"
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
					onClick={toggleDrawer(true)}
				>
					<Settings />
				</IconButton>
				<SettingsDrawer
					openDrawer={openDrawer}
					toggleDrawer={toggleDrawer(false)}
				/>
			</Toolbar>
		</AppBar>
	)
}

export default Nav;