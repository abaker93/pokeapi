import { useState } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';

import SettingsDrawer from './SettingsDrawer';
import Pokeball from '../assets/Pokeball';

const Nav = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }

    setOpenDrawer(open);
  };

	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					aria-label="pokeball"
					href="/"
					disableRipple={true}
				>
					<Pokeball fill="#9754B1" />
				</IconButton>
				<Link
					href="/"
					color="inherit"
					underline="none"
					mr={2}
					flexGrow={1}
				>
					<Typography variant="h6" component="p" fontWeight="bold">Drifloon Database</Typography>
				</Link>
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