import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDexId, lowerCaseNoSpaces } from "../../utilities/utilities";

const PokemonLocations = props => {
	const p = props;
	console.log(p.locations)

	const [value, setValue] = useState(7);

	const handleChange = (event, newValue) => { setValue(newValue); }

	const filterVersions = (locations, games) => {
		let filter = false;

		for (let i = 0; i < games.length; i++) {
			if (locations.filter(f1 => {
				f1.version_details.filter(f2 => {
					f2.version.name === games[i]
					console.log(f2)
				})
			}).length > 0) {
				filter = true;
			}
		};

		return filter;
	}

	const genI = filterVersions(p.locations, ["red", "blue", "yellow"]);

	console.log(genI);
}

export default PokemonLocations;