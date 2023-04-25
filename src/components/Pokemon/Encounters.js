import { useEffect, useState } from "react";
import Pokedex from 'pokedex-promise-v2';
import { Box, Container, Link, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import TabPanel from "../TabPanel";
import { getPokeName, lowerCaseDashes, lowerCaseNoSpaces } from "../../utilities/utilities";

const P = new Pokedex();

const Encounters = props => {
	const loc = props.locations;

	const [value, setValue] = useState(null);

	const handleChange = (event, newValue) => { setValue(newValue); }

	const filterLocations = (game) => {
		return loc.filter(f => f.version_details.some(s => s.version.name === game))
	}

	const filterVersions = (games) => {
		let filter = false;

		for (let i = 0; i < games.length; i++) {
			if (filterLocations(games[i]).length > 0) {
				filter = true;
			}
		};

		return filter;
	}

	const genI = filterVersions(["red", "blue", "yellow"]);
	const genII = filterVersions(["gold", "silver", "crystal"]);
	const genIII = filterVersions(["ruby", "sapphire", "emerald", "firered", "leafgreen", "colosseum", "xd"]);
	const genIV = filterVersions(["diamond", "pearl", "platinum", "heartgold", "soulsilver"]);
	const genV = filterVersions(["black", "white", "black-2", "white-2"]);
	const genVI = filterVersions(["x", "y", "omega-ruby", "alpha-sapphire"]);
	const genVII = filterVersions(["sun", "moon", "ultra-sun", "ultra-moon", "lets-go-pikachu", "lets-go-eevee"]);
	const genVIII = filterVersions(["sword", "shield", "the-isle-of-armor", "the-crown-tundra", "brilliant-diamond", "shining-pearl", "legends-arceus"]);
	const genIX = filterVersions(["scarlet", "violet", "the-teal-mask", "the-indigo-disk"]);

	const findFirstGen = () => {
		if (genI)	{
			setValue(0)
		} else if (genII) {
			setValue(1)
		} else if (genIII) {
			setValue(2)
		} else if (genIV) {
			setValue(3)
		} else if (genV) {
			setValue(4)
		} else if (genVI) {
			setValue(5)
		} else if (genVII) {
			setValue(6)
		} else if (genVIII) {
			setValue(7)
		} else if (genIX) {
			setValue(8)
		} else {
			setValue(null)
		}
	}

	useEffect(() => {
		findFirstGen();
	}, [])

	if (value === null) {
		return (
			<Container id="PokeEncounters" sx={{ mb: 5 }}>
				<Typography variant="h2" mb={1}>Where to find {getPokeName(props.names, "en")} in the wild</Typography>
				<Typography variant="body1">{getPokeName(props.names, "en")} can't be found in the wild.
					<Tooltip title="... or PokéAPI hasn't been updated with this data. Click this footnote for more information.">
						<sup><Link href="/notes" underline="hover" sx={{ ml: 0.5, fontWeight: "medium" }}>1</Link></sup>
					</Tooltip>
				</Typography>
			</Container>
		)
	}

	return (
		<Container id="PokeEncounters" sx={{ mb: 5 }}>
			<Box>
				<Typography variant="h2" mb={1}>Where to find {getPokeName(props.names, "en")} in the wild</Typography>
			</Box>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="wild encounter locations sorted by generation"
				>
					{genI ? (
						<Tab label="Gen I" id="locGenTabI" aria-controls="locPanelGenI" value={0} />
					) : null}

					{genII ? (
						<Tab label="Gen II" id="locGenTabII" aria-controls="locPanelGenII" value={1} />
					) : null}

					{genIII ? (
						<Tab label="Gen III" id="locGenTabIII" aria-controls="locPanelGenIII" value={2} />
					) : null}

					{genIV ? (
						<Tab label="Gen IV" id="locGenTabIV" aria-controls="locPanelGenIV" value={3} />
					) : null}

					{genV ? (
						<Tab label="Gen V" id="locGenTabV" aria-controls="locPanelGenV" value={4} />
					) : null}

					{genVI ? (
						<Tab label="Gen VI" id="locGenTabVI" aria-controls="locPanelGenVI" value={5} />
					) : null}

					{genVII ? (
						<Tab label="Gen VII" id="locGenTabVII" aria-controls="locPanelGenVII" value={6} />
					) : null}

					{genVIII ? (
						<Tab label="Gen VIII" id="locGenTabVIII" aria-controls="locPanelGenVIII" value={7} />
					) : null}

					{genIX ? (
						<Tab label="Gen IX" id="locGenTabIX" aria-controls="locPanelGenIX" value={8} />
					) : null}
				</Tabs>
			</Box>

			{genI ? (
				<TabPanel value={value} index={0} id="panelGenI" ariaLabelledBy="tabGenI">
					<Encounter
						game="Red"
						locations={filterLocations("red")}
					/>
					<Encounter
						game="Blue"
						locations={filterLocations("blue")}
					/>
					<Encounter
						game="Yellow"
						locations={filterLocations("yellow")}
					/>
				</TabPanel>
			) : null}

			{genII ? (
				<TabPanel value={value} index={1} id="panelGenII" ariaLabelledBy="tabGenII">
					<Encounter
						game="Gold"
						locations={filterLocations("gold")}
					/>
					<Encounter
						game="Silver"
						locations={filterLocations("silver")}
					/>
					<Encounter
						game="Crystal"
						locations={filterLocations("crystal")}
					/>
				</TabPanel>
			) : null}

			{genIII ? (
				<TabPanel value={value} index={2} id="panelGenIII" ariaLabelledBy="tabGenIII">
					<Encounter
						game="Ruby"
						locations={filterLocations("ruby")}
					/>
					<Encounter
						game="Sapphire"
						locations={filterLocations("sapphire")}
					/>
					<Encounter
						game="Emerald"
						locations={filterLocations("emerald")}
					/>
					<Encounter
						game="FireRed"
						locations={filterLocations("firered")}
					/>
					<Encounter
						game="LeafGreen"
						locations={filterLocations("leafgreen")}
					/>
				</TabPanel>
			) : null}

			{genIV ? (
				<TabPanel value={value} index={3} id="panelGenIV" ariaLabelledBy="tabGenIV">
					<Encounter
						game="Diamond"
						locations={filterLocations("diamond")}
					/>
					<Encounter
						game="Pearl"
						locations={filterLocations("pearl")}
					/>
					<Encounter
						game="Platinum"
						locations={filterLocations("platinum")}
					/>
					<Encounter
						game="HeartGold"
						locations={filterLocations("heartgold")}
					/>
					<Encounter
						game="SoulSilver"
						locations={filterLocations("soulsilver")}
					/>
				</TabPanel>
			) : null}

			{genV ? (
				<TabPanel value={value} index={4} id="panelGenV" ariaLabelledBy="tabGenV">
					<Encounter
						game="Black"
						locations={filterLocations("black")}
					/>
					<Encounter
						game="White"
						locations={filterLocations("white")}
					/>
					<Encounter
						game="Black 2"
						locations={filterLocations("black-2")}
					/>
					<Encounter
						game="White 2"
						locations={filterLocations("white-2")}
					/>
				</TabPanel>
			) : null}

			{genVI ? (
				<TabPanel value={value} index={5} id="panelGenVI" ariaLabelledBy="tabGenVI">
					<Encounter
						game="X"
						locations={filterLocations("x")}
					/>
					<Encounter
						game="Y"
						locations={filterLocations("y")}
					/>
					<Encounter
						game="Omega Ruby"
						locations={filterLocations("omega-ruby")}
					/>
					<Encounter
						game="Alpha Sapphire"
						locations={filterLocations("alpha-sapphire")}
					/>
				</TabPanel>
			) : null}

			{genVII ? (
				<TabPanel value={value} index={6} id="panelGenVII" ariaLabelledBy="tabGenVII">
					<Encounter
						game="Sun"
						locations={filterLocations("sun")}
					/>
					<Encounter
						game="Moon"
						locations={filterLocations("moon")}
					/>
					<Encounter
						game="Ultra Sun"
						locations={filterLocations("ultra-sun")}
					/>
					<Encounter
						game="Ultra Moon"
						locations={filterLocations("ultra-moon")}
					/>
					<Encounter
						game="Let's Go Pikachu"
						locations={filterLocations("lets-go-pikachu")}
					/>
					<Encounter
						game="Let's Go Eevee"
						locations={filterLocations("lets-go-eevee")}
					/>
				</TabPanel>
			) : null}

			{genVIII ? (
				<TabPanel value={value} index={7} id="panelGenVIII" ariaLabelledBy="tabGenVIII">
					<Encounter
						game="Sword"
						locations={filterLocations("sword")}
					/>
					<Encounter
						game="Shield"
						locations={filterLocations("shield")}
					/>
					<Encounter
						game="Brilliant Diamond"
						locations={filterLocations("brilliant-diamond")}
					/>
					<Encounter
						game="Shining Pearl"
						locations={filterLocations("shining-pearl")}
					/>
					<Encounter
						game="Legends Arceus"
						locations={filterLocations("legends-arceus")}
					/>
				</TabPanel>
			) : null}

			{genIX ? (
				<TabPanel value={value} index={8} id="panelGenIX" ariaLabelledBy="tabGenIX">
					<Encounter
						game="Scarlet"
						locations={filterLocations("scarlet")}
					/>
					<Encounter
						game="Violet"
						locations={filterLocations("violet")}
					/>
				</TabPanel>
			) : null}
		</Container>
	)
}





const Encounter = props => {
	const game = props.game;
	const locations = props.locations;
	const [locNames, setLocNames] = useState([]);

	// console.log("locations", locations)

	const getLocationArea = locations => {
		locations.forEach(loc => {
			P.getResource(loc.location_area.url)
				.then(res => {
					setLocNames(currentList => [...currentList, {...res}])
				})
				.catch(error => {
					console.log(error)
				})
		})
	}

	useEffect(() => {
		getLocationArea(locations)
	}, [locations])

//	TODO:		Change all references of "Road #" to "Route #."
//	TODO:		But don't change Victory Road (and other Roads) to Route.

	if (locations.length > 0) {
		return (
			<Grid mt={2}>
				<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
				<Typography variant="body1" className="locations">
					{locations.map(m1 => (
							locNames.filter(f1 => f1.name === m1.location_area.name)
								.map(m2 => m2.names.filter(f2 => f2.language.name === "en").map(m3 => (
									<Typography key={m1.location_area.name} component="span">
										<Link underline="hover" href={`/location/${lowerCaseDashes(m3.name)}`}>{m3.name}</Link>
									</Typography>
								))
							)
					))}
				</Typography>
			</Grid>
		)
	}
}

export default Encounters;