import { Box, Button, Typography } from "@mui/material"

const Home = () => {
	return (
		<>
			<Typography variant="h1">Home</Typography>
			<Box my={2}>
				<Typography variant="h2">Pokédexes</Typography>
				<Button href='/pokedex'>National Dex</Button>
			</Box>
			<Box my={2}>
				<Typography variant="h2">Pokémon</Typography>
				<Button href='/pokemon/0425'>Drifloon</Button>
				<Button href='/pokemon/0025'>Pikachu</Button>
				<Button href='/pokemon/0133'>Eevee</Button>
				<Button href='/pokemon/0666'>Vivillon</Button>
			</Box>
			<Box my={2}>
				<Typography variant="h2">Info</Typography>
				<Button href='/ability/static'>Static (Ability)</Button>
				<Button href='/egg-group/field'>Field (Egg Group)</Button>
				<Button href='/location/viridian-forest'>Viridian Forest (Location)</Button>
				<Button href='/move/tackle'>Tackle (Move)</Button>
			</Box>
			<Box my={2}>
				<Typography variant="h2">Other</Typography>
				<Button href='/styles'>Styles</Button>
			</Box>
		</>
	)
}

export default Home