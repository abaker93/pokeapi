import { Box, Link, Typography } from "@mui/material"
import { siteTitle } from "../utilities/utilities"

const Footer = () => {
	return (
		<Box sx={{ borderTop: 1, mt: 4, p: 2 }}>
			<Typography variant="caption" component="p">
				Design &copy; {new Date().getFullYear()} {siteTitle} & <Link href="https://www.annabaker.dev/" target="_blank" rel="noreferrer" underline="hover">Anna Baker</Link>
			</Typography>
			<Typography variant="caption" component="p">Content &copy; 2014-{new Date().getFullYear()} <Link href="https://pokeapi.co/about" target="_blank" rel="noreferrer" underline="hover">PokéAPI</Link></Typography>
			<Typography variant="caption" component="p">Pokémon images & names &copy; 1995-{new Date().getFullYear()} <Link href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" rel="noreferrer" underline="hover">The Pokemon Company/Nintendo/Game Freak/Creatures</Link></Typography>
		</Box>
		
	)
}

export default Footer