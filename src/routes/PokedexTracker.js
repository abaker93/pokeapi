import Pokedex from 'pokedex-promise-v2';
import { useParams } from 'react-router-dom';
import { Box, Checkbox, Container, FormControlLabel, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import { formatDexId, getPokedexName, round2Decimal } from '../utilities/utilities';
import { useEffect, useState } from 'react';

const P = new Pokedex();

const PokedexTracker = () => {
	const paramDex = useParams().dex;
	const trackerDex = useParams().dex ? getPokedexName(paramDex) : "national";

	const [dex, setDex] = useState([]);
	const [progress, setProgress] = useState({
		total: 1010,
		caught: 151,
	});

	const getDex = dex => {
		P.getPokedexByName(dex)
			.then(res => {
				setDex(res.pokemon_entries)
			})
	}

	useEffect(() => {
		getDex(trackerDex)
	}, [])

	console.log(dex)

	return (
		<Container>
			<Typography variant="h1" textTransform="capitalize">{trackerDex} Tracker</Typography>
			<Settings progress={progress} />
			<ChecklistContainer>
				{dex.map(poke => (
					<ChecklistItem key={poke.entry_number} {...poke} />
				))}
			</ChecklistContainer>
		</Container>
	)
}

const Settings = p => {
	const total = p.progress.total;
	const caught = p.progress.caught;
	const toGo = total - caught;
	const percentage = round2Decimal((caught / total) * 100);

	return (
		<Paper variant="outlined" sx={{ py: 2, px: 3 }}>
			<Box mb={3}>
				<Typography><strong>Game:</strong> Pokémon Home</Typography>
				<LinearProgress variant="determinate" value={10} />
				<Typography variant="caption">{percentage}% done! ({caught} caught, {toGo} to go)</Typography>
			</Box>
			<Box mt={3}>
				<TextField label="Search by name or #" />
				<FormControlLabel control={<Checkbox />} label="Hide Caught Pokémon" />
			</Box>
		</Paper>
	)
}

const ChecklistContainer = p => {
	return (
		<Box>
			{p.children}
		</Box>
	)
}

const ChecklistItem = p => {
	console.log(p)

	return (
		<Box>
			{formatDexId(p.entry_number)} {p.pokemon_species.name}
		</Box>
	)
}

export default PokedexTracker;