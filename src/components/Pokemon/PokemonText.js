import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDexId, lowerCaseNoSpaces, romanize } from "../../utilities/utilities";

const PokemonText = props => {
	const p = props;
	const flavorTextFilter = p.flavor_text_entries.filter(f => f.language.name === "en");
	const pokedexNumbers = p.pokedex_numbers;
	const flavorTextEntries = {
		gen_i: [
			{
				game: "red",
				kanto: {
					num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
					text: flavorTextFilter.filter(f => f.version.name === "red").map(m => m.flavor_text)[0]
				}
			},
			{
				game: "blue",
				kanto: {
					num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
					text: flavorTextFilter.filter(f => f.version.name === "blue").map(m => m.flavor_text)[0]
				}
			},
			{
				game: "yellow",
				kanto: {
					num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
					text: flavorTextFilter.filter(f => f.version.name === "yellow").map(m => m.flavor_text)[0]
				}
			},
		],
		gen_v: [
			{
				game: "black",
				original_unova: {
					num: pokedexNumbers.filter(f => f.pokedex.name === "original-unova").map(m => m.entry_number)[0],
					text: flavorTextFilter.filter(f => f.version.name === "black").map(m => m.flavor_text)[0]
				}
			},
			{
				game: "white",
				original_unova: {
					num: pokedexNumbers.filter(f => f.pokedex.name === "original-unova").map(m => m.entry_number)[0],
					text: flavorTextFilter.filter(f => f.version.name === "white").map(m => m.flavor_text)[0]
				}
			},
		],
	}

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => { setValue(newValue); }

	const filterVersions = (flavorText, games) => {
		let filter = [];
		
		for (let i = 0; i < games.length; i++) {
			filter.push(flavorText.filter(f => f.version.name === games[i]))
		};
		
		return filter[0].length > 0 ? true : false;
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
					{filterVersions(flavorTextFilter, ["red", "blue", "yellow"]) ? (
						<Tab label="Gen I" id="genTabI" aria-controls="panelGenI" />
					) : null}

					{filterVersions(flavorTextFilter, ["gold", "silver", "crystal"]) ? (
						<Tab label="Gen II" id="genTabII" aria-controls="panelGenII" />
					) : null}

					{filterVersions(flavorTextFilter, ["ruby", "sapphire", "emerald", "firered", "leafgreen", "colosseum", "xd"]) ? (
						<Tab label="Gen III" id="genTabIII" aria-controls="panelGenIII" />
					) : null}

					{filterVersions(flavorTextFilter, ["diamond", "pearl", "platinum", "heartgold", "soulsilver"]) ? (
						<Tab label="Gen IV" id="genTabIV" aria-controls="panelGenIV" />
					) : null}

					{filterVersions(flavorTextFilter, ["black", "white", "black-2", "white-2"]) ? (
						<Tab label="Gen V" id="genTabV" aria-controls="panelGenV" />
					) : null}

					{filterVersions(flavorTextFilter, ["x", "y", "omega-ruby", "alpha-sapphire"]) ? (
						<Tab label="Gen VI" id="genTabVI" aria-controls="panelGenVI" />
					) : null}

					{filterVersions(flavorTextFilter, ["sun", "moon", "ultra-sun", "ultra-moon", "lets-go-pikachu", "lets-go-eevee"]) ? (
						<Tab label="Gen VII" id="genTabVII" aria-controls="panelGenVII" />
					) : null}

					{filterVersions(flavorTextFilter, ["sword", "shield", "the-isle-of-armor", "the-crown-tundra", "brilliant-diamond", "shining-pearl", "legends-arceus"]) ? (
						<Tab label="Gen VIII" id="genTabVIII" aria-controls="panelGenVIII" />
					) : null}

					{filterVersions(flavorTextFilter, ["scarlet", "violet", "the-teal-mask", "the-indigo-disk"]) ? (
						<Tab label="Gen IX" id="genTabIX" aria-controls="panelGenIX" />
					) : null}

				</Tabs>
			</Box>
			{filterVersions(flavorTextFilter, ["red", "blue", "yellow"]) ? (
				<GenerationPanel value={0} index={0} gen="I">
					{flavorTextEntries.gen_i.map(m => (
						m.kanto.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.kanto.num}
								text={m.kanto.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["black", "white", "black-2", "white-2"]) ? (
				<GenerationPanel value={4} index={4} gen="V">
					{flavorTextEntries.gen_v.map(m => (
						m.original_unova.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.original_unova.num}
								text={m.original_unova.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}
		</Container>
	)
}



const GenerationPanel = props => {
	return (
		<Container
			role="tabpanel"
			hidden={props.value !== props.index}
			id={`panelGen${props.gen}`}
			aria-labelledby={`genTab${props.gen}`}
		>
			{props.value === props.index && (
				props.children
			)}
		</Container>
	)
}



const FlavorText = props => {
	const game = props.game;
	const num = props.num ? props.num : null;
	const text = props.text ? props.text : null;

	if (text) {
		return (
			<Grid mt={2}>
				<Typography component="h3" variant="h6" className={`game__${game}`} sx={{ textTransform: "capitalize" }}>{game}</Typography>
				<Typography variant="body1">
					<Typography component="span" variant="caption" mr={0.5}>
						<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
						{formatDexId(num)}
					</Typography>
					{text.replace(/\s/g, " ")}
				</Typography>
			</Grid>
		)
	}
}

export default PokemonText;