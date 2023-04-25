import { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { Autocomplete, Box, Divider, Drawer, IconButton, TextField, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import { CloseSharp, DarkModeSharp, LightModeSharp } from '@mui/icons-material';
import { useColorMode } from '../utilities/context';
import { getPokeName } from '../utilities/utilities';

const P = new Pokedex();

export default function SettingsDrawer(props) {
	const { colorMode, toggleColorMode } = useColorMode();

	const [pokeList, setPokeList] = useState([]);

	const getPokeList = () => {
		P.getPokemonSpeciesList(10000, 0)
			.then(res => {
				res.results.map(r => {
					P.getResource(r.url)
						.then(res2 => {
							setPokeList(currentList => [...currentList, getPokeName(res2.names, "en")])
						})
				})
			})
	}

	useEffect(() => {
		getPokeList();
	}, [])
	
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

				<Box mt={3} px={3}>
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
						<ToggleButton value="dark" aria-label="dark color mode" size="medium">
							<DarkModeSharp fontSize="small" sx={{ mr: 1 }} />
							<Typography variant="caption" component="span">Dark</Typography>
						</ToggleButton>
					</ToggleButtonGroup>
				</Box>

				<Box mt={3} px={3}>
					<Typography variant="caption" component="p" sx={{ mb: 1, textTransform: "uppercase", fontWeight: "bold" }}>Favorite Pokemon</Typography>
					<Autocomplete
						options={pokeList.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)}
						renderInput={params => <TextField {...params} />}
					/>
				</Box>
			</Box>
		</Drawer>
	);
};