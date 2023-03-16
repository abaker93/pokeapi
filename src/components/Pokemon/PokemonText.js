import { useState } from "react";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import generations from "../../data/generations.json";
import { romanize } from "../../utilities/utilities";

const PokemonText = props => {
	const p = props;
	console.log(p)
	
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	const versionName = (arr) => {
		if (arr) {
			let x = arr.toLowerCase();
			x = x.replace(" ", "-");
			return x;
		} else { return null; }
	}

	return (
		<Container id="PokemonText" sx={{ mb: 5 }}>
			<Grid>
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
			</Grid>
			{generations.results.map((g, index) => (
				<GenerationPanel key={g.id} value={value} index={index}>
					{console.log("g", index, g)}
					{g.version.map((v) => (
						<>
						{console.log("v", index, v)}
						<FlavorText
							key={v.name}
							game={v.name}
							text={p.flavor_text_entries.filter(f => f.version.name === versionName(v.name) && f.language.name === "en")}
							num={v.pokedex.map(pd => p.pokedex_numbers.filter(f => f.pokedex.name === versionName(pd)))}
						/>
						</>
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
		>
			{props.children}
		</Container>
	)
}



const FlavorText = props => {
	const game = props.game;
	const num = props.num[0] ? props.num[0].entry_number : null;
	const text = props.text[0] ? props.text[0].flavor_text : null;
	//console.log("game", game)
	//console.log("num", num)
	//console.log("text", text)

	if (text) {
		return (
			<Grid>
				<Typography component="h3" variant="h6">{game}</Typography>
				<Typography variant="body1">
					<Typography component="span" variant="caption">{num}</Typography>
					{text}
				</Typography>
			</Grid>
		)
	}
}

export default PokemonText;