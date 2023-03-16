import { useState } from "react";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import generations from "../../data/generations.json";
import { lowerCaseDashes, lowerCaseNoSpaces, romanize } from "../../utilities/utilities";
import { Box } from "@mui/system";

const PokemonText = props => {
	const p = props;
	
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	

	return (
		<Container id="PokemonText" sx={{ mb: 5 }}>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="game flavor text sorted by generation"
				>
					{generations.results.map(g => (
						<Tab key={g.id} label={g.shortName} id={g.id} aria-controls={`panel${g.shortName.replace(/\s/g, '')}`} />
					))}

				</Tabs>
			</Box>
			{generations.results.map((g, index) => (
				<GenerationPanel key={index} value={value} index={index} generation={g}>
					{g.version.map(v => (
						<FlavorText
							key={v.name}
							game={v.name}
							text={p.flavor_text_entries.filter(f => f.version.name === lowerCaseDashes(v.name) && f.language.name === "en")}
							num={v.pokedex.map(pd => p.pokedex_numbers.filter(f => f.pokedex.name === lowerCaseDashes(pd)))}
						/>
					))}
				</GenerationPanel>
			))}
		</Container>
	)
}



const GenerationPanel = props => {
	const romanNum = romanize(props.index + 1);

	return (
		<Container
			role="tabpanel"
			hidden={props.value !== props.index}
			id={`panelGen${romanNum}`}
			aria-labelledby={`genTab${romanNum}`}
		>
			{props.value === props.index && (
				props.children
			)}
			
		</Container>
	)
}



const FlavorText = props => {
	const game = props.game;
	const num = props.num[0][0] ? props.num[0][0].entry_number : null;
	const text = props.text[0] ? props.text[0].flavor_text : null;

	if (text) {
		return (
			<Grid>
				<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
				<Typography variant="body1">
					<Typography component="span" variant="caption">{num}</Typography>
					{text.replace(/\s/g, " ")}
				</Typography>
			</Grid>
		)
	}
}

export default PokemonText;