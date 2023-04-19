import { useEffect, useState } from "react";
import { Box, Container, Link, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GenerationPanel from "../GenerationPanel";
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
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-sinnoh").map(m => m.entry_number)[0],
				text: flavorTextFilter.filter(f => f.version.name === "diamond").map(m => m.flavor_text)[0]
			},
			{
				game: "Shining Pearl",
				num: pokedexNumbers.filter(f => f.pokedex.name === "updated-sinnoh").map(m => m.entry_number)[0],
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

	const [value, setValue] = useState(null);

	const handleChange = (event, newValue) => { setValue(newValue); }

	const filterVersions = (flavorText, games) => {
		let filter = false;
		
		for (let i = 0; i < games.length; i++) {
			if (flavorText.filter(f => f.version.name === games[i]).length > 0) { filter = true; }
		};

		return filter;
	}

	const genI = filterVersions(flavorTextFilter, ["red", "blue", "yellow"]);
	const genII = filterVersions(flavorTextFilter, ["gold", "silver", "crystal"]);
	const genIII = filterVersions(flavorTextFilter, ["ruby", "sapphire", "emerald", "firered", "leafgreen", "colosseum", "xd"]);
	const genIV = filterVersions(flavorTextFilter, ["diamond", "pearl", "platinum", "heartgold", "soulsilver"]);
	const genV = filterVersions(flavorTextFilter, ["black", "white", "black-2", "white-2"]);
	const genVI = filterVersions(flavorTextFilter, ["x", "y", "omega-ruby", "alpha-sapphire"]);
	const genVII = filterVersions(flavorTextFilter, ["sun", "moon", "ultra-sun", "ultra-moon", "lets-go-pikachu", "lets-go-eevee"]);
	const genVIII = filterVersions(flavorTextFilter, ["sword", "shield", "the-isle-of-armor", "the-crown-tundra", "brilliant-diamond", "shining-pearl", "legends-arceus"]);
	const genIX = filterVersions(flavorTextFilter, ["scarlet", "violet", "the-teal-mask", "the-indigo-disk"]);

	//console.log("pokedex entries", genI, genII, genIII, genIV, genV, genVI, genVII, genVIII, genIX);

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
			<Container id="PokemonText" sx={{ mb: 5 }}>
				<Typography variant="h2" mb={1}>Pokédex entries</Typography>
				<Typography variant="body1">
					No Pokédex entries available for {p.names.filter(f => f.language.name === "en").map(m => m.name)}.
					<Tooltip title="... or PokéAPI hasn't been updated with this data. Click this footnote for more information.">
						<sup><Link href="/notes" underline="hover" sx={{ ml: 0.5, fontWeight: "medium" }}>1</Link></sup>
					</Tooltip>
				</Typography>
			</Container>
		)
	}

	return (
		<Container id="PokemonText" sx={{ mb: 5 }}>
			<Box>
				<Typography variant="h2" mb={1}>Pokédex entries</Typography>
			</Box>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="game flavor text sorted by generation"
				>
					{genI ? (
						<Tab label="Gen I" id="genTabI" aria-controls="panelGenI" value={0} />
					) : null}

					{genII ? (
						<Tab label="Gen II" id="genTabII" aria-controls="panelGenII" value={1} />
					) : null}

					{genIII ? (
						<Tab label="Gen III" id="genTabIII" aria-controls="panelGenIII" value={2} />
					) : null}

					{genIV ? (
						<Tab label="Gen IV" id="genTabIV" aria-controls="panelGenIV" value={3} />
					) : null}

					{genV ? (
						<Tab label="Gen V" id="genTabV" aria-controls="panelGenV" value={4} />
					) : null}

					{genVI ? (
						<Tab label="Gen VI" id="genTabVI" aria-controls="panelGenVI" value={5} />
					) : null}

					{genVII ? (
						<Tab label="Gen VII" id="genTabVII" aria-controls="panelGenVII" value={6} />
					) : null}

					{genVIII ? (
						<Tab label="Gen VIII" id="genTabVIII" aria-controls="panelGenVIII" value={7} />
					) : null}

					{genIX ? (
						<Tab label="Gen IX" id="genTabIX" aria-controls="panelGenIX" value={8} />
					) : null}
				</Tabs>
			</Box>

			{genI ? (
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

			{genII ? (
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

			{genIII ? (
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

			{genIV ? (
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

			{genV ? (
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

			{genVI ? (
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

			{genVII ? (
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

			{genVIII ? (
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

			{genIX ? (
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