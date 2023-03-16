import { Button, Typography } from "@mui/material";

const Home = () => {
	return (
		<>
			<Typography variant="h1" style={{ marginTop: 70 }}>Home</Typography>
			<Button href="/pokedex/national">National Dex</Button>
			<Button href="/pokemon/0025">Pikachu</Button>
			<Button href="/pokemon/0425">Drifloon</Button>
			<Button href="/pokemon/0666">Vivillon</Button>
		</>
	)
}

export default Home;