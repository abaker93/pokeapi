import { useColorMode } from '../utilities/context';
import { Box, Divider, Drawer, IconButton, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import { CloseSharp, DarkModeSharp, LightModeSharp, SettingsBrightnessSharp } from '@mui/icons-material';

export default function SettingsDrawer(props) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Drawer
			anchor="right"
			open={props.openDrawer}
			onClose={props.toggleDrawer}
			elevation={0}
		>
			<Box
				sx={{ width: 300 }}
				role="presentation"
				onKeyDown={props.toggleDrawer}
			>
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>Settings</Typography>
					<IconButton
						size="small"
						color="black"
						aria-label="customization"
						onClick={props.toggleDrawer}
						disableRipple={true}
					>
						<CloseSharp fontSize="inherit" />
					</IconButton>
				</Toolbar>
				<Divider />

				<Box
					sx={{ padding: 3 }}
				>

					<Typography variant="caption" component="p" sx={{ mb: 1, textTransform: "uppercase", fontWeight: "bold" }}>Mode</Typography>

					<ToggleButtonGroup
						value={colorMode}
						exclusive
						onClick={toggleColorMode}
						aria-label="toggle color mode"
						size="small"
						color="primary"
						fullWidth={true}
					>
						<ToggleButton value="light" aria-label="light color mode" size="medium">
							<LightModeSharp fontSize="small" sx={{ mr: 1 }} />
							<Typography variant="caption" component="span">Light</Typography>
						</ToggleButton>
						{/* <ToggleButton value="system" aria-label="system color mode">
							<SettingsBrightnessSharp fontSize="inherit" />
							<Typography>System</Typography>
						</ToggleButton> */}
						<ToggleButton value="dark" aria-label="dark color mode" size="medium">
							<DarkModeSharp fontSize="small" sx={{ mr: 1 }} />
							<Typography variant="caption" component="span">Dark</Typography>
						</ToggleButton>
					</ToggleButtonGroup>
				</Box>
			</Box>
		</Drawer>
	);
};