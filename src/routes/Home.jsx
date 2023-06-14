import { Button, Typography } from "@mui/material"

const Home = () => {
	return (
		<>
			<Typography variant="h1">Home</Typography>
			<Button href='/pokedex'>National Dex</Button>
			<Button href='/pokemon/0025'>Pikachu</Button>
			<Button href='/pokemon/0133'>Eevee</Button>
			<Button href='/pokemon/0425'>Drifloon</Button>
			<Button href='/pokemon/0666'>Vivillon</Button>
		</>
	)
}

export default Home