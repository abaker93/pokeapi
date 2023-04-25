import Nav from "../components/Nav";
import { Alert, AlertTitle, Box, Container, Link, Typography } from "@mui/material";

const Error = () => {
	return (
		<>
			<Nav />
			<Container sx={{ mt: 2 }}>
				<Alert severity="error">
					<AlertTitle mb={3}>Oh no! The wild pokémon fled.</AlertTitle>
					<Box mb={3}>
						<Typography variant="subtitle2">Try these pages instead:</Typography>
						<ul style={{ marginTop: 0 }}>
							<li><Link href="/pokedex/national">National Dex</Link></li>
						</ul>
					</Box>
					<Box>
						<Typography mb={1}><code>Error 404 - page not found.</code></Typography>
						<Typography variant="caption">If you think this page should exist, submit an error report <Link href="#" target="_blank">here</Link>.</Typography>
					</Box>
				</Alert>
			</Container>
		</>
	)
}

export default Error;