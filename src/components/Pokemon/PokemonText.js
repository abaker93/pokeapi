import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDexId, lowerCaseNoSpaces } from "../../utilities/utilities";

const PokemonText = props => {
	const p = props;
	const flavorTextFilter = p.flavor_text_entries.filter(f => f.language.name === "en");
	const pokedexNumbers = p.pokedex_numbers;
	const flavorTextEntries = {
		gen_i: [
			{
				game: "Red",
				num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "red").map(m => m.flavor_text)[0]
			},
			{
				game: "Blue",
				num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "blue").map(m => m.flavor_text)[0]
			},
			{
				game: "Yellow",
				num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "yellow").map(m => m.flavor_text)[0]
			},
		],
		gen_ii: [
			{
				game: "Gold",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-johto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "gold").map(m => m.flavor_text)[0]
			},
			{
				game: "Silver",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-johto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "silver").map(m => m.flavor_text)[0]
			},
			{
				game: "Crystal",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-johto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "crystal").map(m => m.flavor_text)[0]
			}
		],
		gen_iii: [
			{
				game: "Ruby",
				num: pokedexNumbers.filter(f => f.pokedex.name === "hoenn").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "ruby").map(m => m.flavor_text)[0]
			},
			{
				game: "Sapphire",
				num: pokedexNumbers.filter(f => f.pokedex.name === "hoenn").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "sapphire").map(m => m.flavor_text)[0]
			},
			{
				game: "Emerald",
				num: pokedexNumbers.filter(f => f.pokedex.name === "hoenn").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "emerald").map(m => m.flavor_text)[0]
			},
			{
				game: "FireRed",
				num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "firered").map(m => m.flavor_text)[0]
			},
			{
				game: "LeafGreen",
				num: pokedexNumbers.filter(f => f.pokedex.name === "kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "leafgreen").map(m => m.flavor_text)[0]
			},
		],
		gen_iv: [
			{
				game: "Diamond",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "diamond").map(m => m.flavor_text)[0]
			},
			{
				game: "Pearl",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "pearl").map(m => m.flavor_text)[0]
			},
			{
				game: "Platinum",
				num: pokedexNumbers.filter(f => f.pokedex.name === "extended-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "platinum").map(m => m.flavor_text)[0]
			},
			{
				game: "HeartGold",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-johto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "heartgold").map(m => m.flavor_text)[0]
			},
			{
				game: "SoulSilver",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-johto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "soulsilver").map(m => m.flavor_text)[0]
			},
		],
		gen_v: [
			{
				game: "Black",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-unova").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "black").map(m => m.flavor_text)[0]
			},
			{
				game: "White",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-unova").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "white").map(m => m.flavor_text)[0]
			},
			{
				game: "Black 2",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-unova").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "black-2").map(m => m.flavor_text)[0]
			},
			{
				game: "White 2",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-unova").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "white-2").map(m => m.flavor_text)[0]
			},
		],
		gen_vi: [
			{
				game: "X",
				central_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-central").map(m => m.entry_number)[0],
				coastal_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-coastal").map(m => m.entry_number)[0],
				mountain_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-mountain").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "x").map(m => m.flavor_text)[0]
			},
			{
				game: "Y",
				central_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-central").map(m => m.entry_number)[0],
				coastal_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-coastal").map(m => m.entry_number)[0],
				mountain_num: pokedexNumbers.filter(f => f.pokedex.name === "kalos-mountain").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "y").map(m => m.flavor_text)[0]
			},
			{
				game: "Omega Ruby",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-hoenn").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "omega-ruby").map(m => m.flavor_text)[0]
			},
			{
				game: "Alpha Sapphire",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-hoenn").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "alpha-sapphire").map(m => m.flavor_text)[0]
			},
		],
		gen_vii: [
			{
				game: "Sun",
				alola_num: pokedexNumbers.filter(f => f.pokedex.name === "original-alola").map(m => m.entry_number)[0],
				melemele_num: pokedexNumbers.filter(f => f.pokedex.name === "original-melemele").map(m => m.entry_number)[0],
				akala_num: pokedexNumbers.filter(f => f.pokedex.name === "original-akala").map(m => m.entry_number)[0],
				ulaula_num: pokedexNumbers.filter(f => f.pokedex.name === "original-ulaula").map(m => m.entry_number)[0],
				poni_num: pokedexNumbers.filter(f => f.pokedex.name === "original-poni").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "sun").map(m => m.flavor_text)[0]
			},
			{
				game: "Moon",
				alola_num: pokedexNumbers.filter(f => f.pokedex.name === "original-alola").map(m => m.entry_number)[0],
				melemele_num: pokedexNumbers.filter(f => f.pokedex.name === "original-melemele").map(m => m.entry_number)[0],
				akala_num: pokedexNumbers.filter(f => f.pokedex.name === "original-akala").map(m => m.entry_number)[0],
				ulaula_num: pokedexNumbers.filter(f => f.pokedex.name === "original-ulaula").map(m => m.entry_number)[0],
				poni_num: pokedexNumbers.filter(f => f.pokedex.name === "original-poni").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "moon").map(m => m.flavor_text)[0]
			},
			{
				game: "Ultra Sun",
				alola_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-alola").map(m => m.entry_number)[0],
				melemele_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-melemele").map(m => m.entry_number)[0],
				akala_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-akala").map(m => m.entry_number)[0],
				ulaula_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-ulaula").map(m => m.entry_number)[0],
				poni_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-poni").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "ultra-sun").map(m => m.flavor_text)[0]
			},
			{
				game: "Ultra Moon",
				alola_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-alola").map(m => m.entry_number)[0],
				melemele_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-melemele").map(m => m.entry_number)[0],
				akala_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-akala").map(m => m.entry_number)[0],
				ulaula_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-ulaula").map(m => m.entry_number)[0],
				poni_num: pokedexNumbers.filter(f => f.pokedex.name === "updated-poni").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "ultra-moon").map(m => m.flavor_text)[0]
			},
			{
				game: "Let's Go Pikachu",
				num: pokedexNumbers.filter(f => f.pokedex.name === "letsgo-kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "lets-go-pikachu").map(m => m.flavor_text)[0]
			},
			{
				game: "Let's Go Eevee",
				num: pokedexNumbers.filter(f => f.pokedex.name === "letsgo-kanto").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "lets-go-eevee").map(m => m.flavor_text)[0]
			},
		],
		gen_viii: [
			{
				game: "Sword",
				galar_num: pokedexNumbers.filter(f => f.pokedex.name === "galar").map(m => m.entry_number)[0],
				isle_of_armor_num: pokedexNumbers.filter(f => f.pokedex.name === "isle-of-armor").map(m => m.entry_number)[0],
				crown_tundra_num: pokedexNumbers.filter(f => f.pokedex.name === "crown-tundra").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "sword").map(m => m.flavor_text)[0]
			},
			{
				game: "Shield",
				galar_num: pokedexNumbers.filter(f => f.pokedex.name === "galar").map(m => m.entry_number)[0],
				isle_of_armor_num: pokedexNumbers.filter(f => f.pokedex.name === "isle-of-armor").map(m => m.entry_number)[0],
				crown_tundra_num: pokedexNumbers.filter(f => f.pokedex.name === "crown-tundra").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "shield").map(m => m.flavor_text)[0]
			},
			{
				game: "Brilliant Diamond",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "diamond").map(m => m.flavor_text)[0]
			},
			{
				game: "Shining Pearl",
				num: pokedexNumbers.filter(f => f.pokedex.name === "original-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "pearl").map(m => m.flavor_text)[0]
			},
			{
				game: "Legends Arceus",
				num: pokedexNumbers.filter(f => f.pokedex.name === "hisui").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "legends-arceus").map(m => m.flavor_text)[0]
			}
		],
		gen_ix: [
			{
				game: "Scarlet",
				num: pokedexNumbers.filter(f => f.pokedex.name === "paldea").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "scarlet").map(m => m.flavor_text)[0]
			},
			{
				game: "Violet",
				num: pokedexNumbers.filter(f => f.pokedex.name === "paldea").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "violet").map(m => m.flavor_text)[0]
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
				<GenerationPanel value={value} index={0} gen="I">
					{flavorTextEntries.gen_i.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["gold", "silver", "crystal"]) ? (
				<GenerationPanel value={value} index={1} gen="II">
					{flavorTextEntries.gen_ii.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["ruby", "sapphire", "emerald", "firered", "leafgreen"]) ? (
				<GenerationPanel value={value} index={2} gen="III">
					{flavorTextEntries.gen_iii.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["diamond", "pearl", "platinum", "heartgold", "soulsilver"]) ? (
				<GenerationPanel value={value} index={3} gen="IV">
					{flavorTextEntries.gen_iv.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["black", "white", "black-2", "white-2"]) ? (
				<GenerationPanel value={value} index={4} gen="V">
					{flavorTextEntries.gen_v.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
							/>
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["x", "y", "omega-ruby", "alpha-sapphire"]) ? (
				<GenerationPanel value={value} index={5} gen="VI">
					{flavorTextEntries.gen_vi.map(m => (
						m.text ? (
							m.game === "X" || m.game === "Y" ? (
								<FlavorText
									key={m.game}
									game={m.game}
									num={{
										central: m.central_num,
										coastal: m.coastal_num,
										mountain: m.mountain_num
									}}
									text={m.text}
								/>
							) : (
								<FlavorText
									key={m.game}
									game={m.game}
									num={m.num}
									text={m.text}
								/>
							)
							
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["sun", "moon", "ultra-sun", "ultra-moon", "lets-go-pikachu", "lets-go-eevee"]) ? (
				<GenerationPanel value={value} index={6} gen="VII">
					{flavorTextEntries.gen_vii.map(m => (
						m.text ? (
							m.game === "Sun" || m.game === "Moon" || m.game === "Ultra Sun" || m.game === "Ultra Moon" ? (
								<FlavorText
									key={m.game}
									game={m.game}
									num={{
										alola: m.alola_num,
										melemele: m.melemele_num,
										akala: m.akala_num,
										ulaula: m.ulaula_num,
										poni: m.poni_num
									}}
									text={m.text}
								/>
							) : (
								<FlavorText
									key={m.game}
									game={m.game}
									num={m.num}
									text={m.text}
								/>
							)
							
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["sword", "shield", "brilliant-diamond", "shining-pearl", "legends-arceus"]) ? (
				<GenerationPanel value={value} index={7} gen="VIII">
					{flavorTextEntries.gen_viii.map(m => (
						m.text ? (
							m.game === "Sword" || m.game === "Shield" ? (
								<FlavorText
									key={m.game}
									game={m.game}
									num={{
										galar: m.galar_num,
										isle_of_armor: m.isle_of_armor_num,
										crown_tundra: m.crown_tundra_num
									}}
									text={m.text}
								/>
							) : (
								<FlavorText
									key={m.game}
									game={m.game}
									num={m.num}
									text={m.text}
								/>
							)
							
						) : null
					))}
				</GenerationPanel>
			) : null}

			{filterVersions(flavorTextFilter, ["scarlet", "violet", "the-teal-mask", "the-indigo-disk"]) ? (
				<GenerationPanel value={value} index={8} gen="IX">
					{flavorTextEntries.gen_ix.map(m => (
						m.text ? (
							<FlavorText
								key={m.game}
								game={m.game}
								num={m.num}
								text={m.text}
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
	let num = props.num ? props.num : null;
	const text = props.text ? props.text : null;

	if (text) {

		if (game === "X" || game === "Y") {
			return (
				<Grid mt={2}>
					<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
					
					{num.central ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Central</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.central)}
						</Typography>
					) : null}

					{num.coastal ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Coastal</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.coastal)}
						</Typography>
					) : null}

					{num.mountain ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Mountain</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.mountain)}
						</Typography>
					) : null}
					<Typography variant="body1">{text.replace(/\s/g, " ")}</Typography>
				</Grid>
			)
		}

		if (game === "Sun" || game === "Moon" || game === "Ultra Sun" || game === "Ultra Moon") {
			return (
				<Grid mt={2}>
					<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
					
					{num.alola ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Alola</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.alola)}
						</Typography>
					) : null}

					{num.melemele ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Melemele</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.melemele)}
						</Typography>
					) : null}

					{num.akala ? (
						<Typography component="p" variant="caption" mr={0.5}>
						<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Akala</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.akala)}
						</Typography>
					) : null}

					{num.ulaula ? (
						<Typography component="p" variant="caption" mr={0.5}>
						<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Ulaula</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.ulaula)}
						</Typography>
					) : null}

					{num.poni ? (
						<Typography component="p" variant="caption" mr={0.5}>
						<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Poni</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.poni)}
						</Typography>
					) : null}
					<Typography variant="body1">{text.replace(/\s/g, " ")}</Typography>
				</Grid>
			)
		}

		if (game === "Sword" || game === "Shield") {
			return (
				<Grid mt={2}>
					<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
					
					{num.galar ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Galar</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.galar)}
						</Typography>
					) : null}

					{num.isle_of_armor ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Isle of Armor</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.isle_of_armor)}
						</Typography>
					) : null}

					{num.crown_tundra ? (
						<Typography component="p" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontWeight="medium" mr={0.3}>Crown Tundra</Typography>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num.crown_tundra)}
						</Typography>
					) : null}
					<Typography variant="body1">{text.replace(/\s/g, " ")}</Typography>
				</Grid>
			)
		}

		return (
			<Grid mt={2}>
				<Typography component="h3" variant="h6" className={`game__${lowerCaseNoSpaces(game)}`}>{game}</Typography>
				<Typography variant="body1">

					{num ? (
						<Typography component="span" variant="caption" mr={0.5}>
							<Typography component="span" variant="caption" fontSize="0.7em" mr={0.3}>NO.</Typography>
							{formatDexId(num)}
						</Typography>
					) : null}
					
					{text.replace(/\s/g, " ")}
				</Typography>
			</Grid>
		)

	}


}

export default PokemonText;