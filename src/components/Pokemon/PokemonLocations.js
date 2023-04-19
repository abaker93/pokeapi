import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDexId, lowerCaseNoSpaces } from "../../utilities/utilities";

const PokemonText = props => {
	const p = props;
	const flavorTextFilter = p.flavor_text_entries.filter(f => f.language.name === "en");
	const pokedexNumbers = p.pokedex_numbers;
	
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => { setValue(newValue); }
}