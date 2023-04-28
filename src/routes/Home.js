import { Button, Chip, Container, Typography } from "@mui/material";

const Home = () => {
	return (
		<>
			<Typography variant="h1">Home</Typography>
			<Button href="/pokedex/national">National Dex</Button>
			<Button href="/pokemon/0025">Pikachu</Button>
			<Button href="/pokemon/0133">Eevee</Button>
			<Button href="/pokemon/0425">Drifloon</Button>
			<Button href="/pokemon/0666">Vivillon</Button>

			<Container id="Styles">
				<Typography variant="h1">Styles</Typography>
				<hr />
				<Typography variant="h2">Typography</Typography>
				<hr />
				<Typography variant="h1">Heading 1. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h2">Heading 2. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h3">Heading 3. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h4">Heading 4. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h5">Heading 5. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h6">Heading 6. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="subtitle1">Subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
				<Typography variant="subtitle2">Subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
				<Typography variant="body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
				<Typography variant="body2">Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
				<Typography variant="button" component="p">Button Text. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="caption" component="p">Caption Text. Lorem ipsum dolor sit amet</Typography>
				<Typography variant="overline" component="p">Overline Text. Lorem ipsum dolor sit amet</Typography>
			
				<hr />

				<Typography variant="h2">Chips</Typography>
				<hr />
				<Chip size="medium" label="Medium" />
				<Chip size="small" label="Small" />
				<Chip size="xsmall" label="XSmall" />
				<Chip variant="type" size="medium" label="Type Medium" />
				<Chip variant="type" size="small" label="Type Small" />
				<Chip variant="type" size="xsmall" label="Type XSmall" />
			</Container>
		</>
	)
}

export default Home;