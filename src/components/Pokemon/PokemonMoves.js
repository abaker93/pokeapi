import { useEffect, useState } from "react";
import Pokedex from 'pokedex-promise-v2';
import { Box, Chip, Container, Link, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import TabPanel from "../TabPanel";
import TypeIcon from "../../assets/TypeIcons";
import { useNavigate } from "react-router-dom";

const P = new Pokedex();

const PokemonMoves = props => {
	const pokeName = props.names.filter(f => f.language.name === "en").map(m => m.name)[0];
	const moves = props.moves;
	console.log(moves)

	const [value, setValue] = useState({
		gen:			null,
		genI:			null,
		genII:		null,
		genIII:		null,
		genIV:		null,
		genV:			null,
		genVI:		null,
		genVII:		null,
		genVIII:	null,
		genIX:		null,
	});

	const filterMoves = (version) => {
		return moves.filter(f => f.version_group_details.some(s => s.version_group.name === version))
	}

	const filterVersions = (version) => {
		let filter = false;

		for (let i = 0; i < version.length; i++) {
			if (filterMoves(version[i]).length > 0) {
				filter = true;
			}
		};

		return filter;
	}

	const v = {
		redBlue:											filterVersions(["red-blue"]),
		yellow:												filterVersions(["yellow"]),
		goldSilver:										filterVersions(["gold-silver"]),
		crystal:											filterVersions(["crystal"]),
		rubySapphire:									filterVersions(["ruby-sapphire"]),
		emerald:											filterVersions(["emerald"]),
		fireRedLeafGreen:							filterVersions(["firered-leafgreen"]),
		diamondPearl:									filterVersions(["diamond-pearl"]),
		platinum:											filterVersions(["platinum"]),
		heartGoldSoulSilver:					filterVersions(["heartgold-soulsilver"]),
		blackWhite:										filterVersions(["black-white"]),
		black2White2:									filterVersions(["black-2-white-2"]),
		xY:														filterVersions(["x-y"]),
		omegaRubyAlphaSapphire:				filterVersions(["omega-ruby-alpha-sapphire"]),
		sunMoon:											filterVersions(["sun-moon"]),
		ultraSunUltraMoon:						filterVersions(["ultra-sun-ultra-moon"]),
		letsGoPikachuLetsGoEevee:			filterVersions(["lets-go-pikachu-lets-go-eevee"]),
		swordShield:									filterVersions(["sword-shield"]),
		theIsleOfArmor:								filterVersions(["the-isle-of-armor"]),
		theCrownTundra:								filterVersions(["the-crown-tundra"]),
		brilliantDiamondShiningPearl:	filterVersions(["brilliant-diamond-shining-pearl"]),
		legendsArceus:								filterVersions(["legends-arceus"]),
		scarletViolet:								filterVersions(["scarlet-violet"]),
		theTealMask:									filterVersions(["the-teal-mask"]),
		theIndigoDisk:								filterVersions(["the-indigo-disk"])
	}

	const g = {
		1:	v.redBlue || v.yellow ? true : false,
		2:	v.goldSilver || v.crystal ? true : false,
		3:	v.rubySapphire || v.emerald || v.fireRedLeafGreen ? true : false,
		4:	v.diamondPearl || v.platinum || v.heartGoldSoulSilver ? true : false,
		5:	v.blackWhite || v.black2White2 ? true : false,
		6:	v.xY || v.omegaRubyAlphaSapphire ? true : false,
		7:	v.sunMoon || v.ultraSunUltraMoon || v.letsGoPikachuLetsGoEevee ? true : false,
		8:	v.swordShield || v.theIsleOfArmor || v.theCrownTundra || v.brilliantDiamondShiningPearl || v.legendsArceus ? true : false,
		9:	v.scarletViolet || v.theTealMask || v.theIndigoDisk ? true : false,
	}

	const findFirst = () => {
		if(g[1]) { setValue(prev => ({ ...prev, gen: 0 })) }
			else if (g[2]) { setValue(prev => ({ ...prev, gen: 1 })) }
			else if (g[3]) { setValue(prev => ({ ...prev, gen: 2 })) }
			else if (g[4]) { setValue(prev => ({ ...prev, gen: 3 })) }
			else if (g[5]) { setValue(prev => ({ ...prev, gen: 4 })) }
			else if (g[6]) { setValue(prev => ({ ...prev, gen: 5 })) }
			else if (g[7]) { setValue(prev => ({ ...prev, gen: 6 })) }
			else if (g[8]) { setValue(prev => ({ ...prev, gen: 7 })) }
			else if (g[9]) { setValue(prev => ({ ...prev, gen: 8 })) }
			else { setValue(prev => ({ ...prev, gen: null })) }

		if (v.redBlue) { setValue(prev => ({ ...prev, genI: 0 })) }
			else if (v.yellow) { setValue(prev => ({ ...prev, genI: 1 })) }
			else { setValue(prev => ({ ...prev, genI: null })) }
		
		if (v.goldSilver) { setValue(prev => ({ ...prev, genII: 0 })) }
			else if (v.crystal) { setValue(prev => ({ ...prev, genII: 1 })) }
			else { setValue(prev => ({ ...prev, genII: null })) }

		if (v.rubySapphire) { setValue(prev => ({ ...prev, genIII: 0 })) }
			else if (v.emerald) { setValue(prev => ({ ...prev, genIII: 1 })) }
			else if (v.fireRedLeafGreen) { setValue(prev => ({ ...prev, genIII: 2 })) }
			else { setValue(prev => ({ ...prev, genIII: null })) }

		if (v.diamondPearl) { setValue(prev => ({ ...prev, genIV: 0 })) }
			else if (v.platinum) { setValue(prev => ({ ...prev, genIV: 1 })) }
			else if (v.heartGoldSoulSilver) { setValue(prev => ({ ...prev, genIV: 2 })) }
			else { setValue(prev => ({ ...prev, genIV: null })) }

		if (v.blackWhite) { setValue(prev => ({ ...prev, genV: 0 })) }
			else if (v.black2White2) { setValue(prev => ({ ...prev, genV: 1 })) }
			else { setValue(prev => ({ ...prev, genV: null })) }

		if (v.xY) { setValue(prev => ({ ...prev, genVI: 0 })) }
			else if (v.omegaRubyAlphaSapphire) { setValue(prev => ({ ...prev, genVI: 1 })) }
			else { setValue(prev => ({ ...prev, genVI: null })) }

		if (v.sunMoon) { setValue(prev => ({ ...prev, genVII: 0 })) }
			else if (v.ultraSunUltraMoon) { setValue(prev => ({ ...prev, genVII: 1 })) }
			else if (v.letsGoPikachuLetsGoEevee) { setValue(prev => ({ ...prev, genVII: 2 })) }
			else { setValue(prev => ({ ...prev, genVII: null })) }

		if (v.swordShield) { setValue(prev => ({ ...prev, genVIII: 0 })) }
			else if (v.theIsleOfArmor) { setValue(prev => ({ ...prev, genVIII: 1 })) }
			else if (v.theCrownTundra) { setValue(prev => ({ ...prev, genVIII: 2 })) }
			else if (v.brilliantDiamondShiningPearl) { setValue(prev => ({ ...prev, genVIII: 3 })) }
			else if (v.legendsArceus) { setValue(prev => ({ ...prev, genVIII: 4 })) }
			else { setValue(prev => ({ ...prev, genVIII: null })) }

		if (v.scarletViolet) { setValue(prev => ({ ...prev, genIX: 0 })) }
			else if (v.theTealMask) { setValue(prev => ({ ...prev, genIX: 1 })) }
			else if (v.theIndigoDisk) { setValue(prev => ({ ...prev, genIX: 2 })) }
			else { setValue(prev => ({ ...prev, genIX: null })) }
	}

	useEffect(() => {
		findFirst();
	}, [])

	if (value.gen === null) { return }

	return (
		<Container id="PokemonMoves" sx={{ mb: 5 }}>
			<Box>
				<Typography variant="h2" mb={1}>Moves Learned by {pokeName}</Typography>
			</Box>
			<Box>
				<Tabs
					value={value.gen}
					onChange={(e, newValue) => setValue(prev => ({...prev, gen: newValue}))}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="learned moves sorted by generation"
				>
					{g[1] ? (
						<Tab label="Gen I" id="movesTabGenI" aria-controls="movesPanelGenI" value={0} />
					) : null}

					{g[2] ? (
						<Tab label="Gen II" id="movesTabGenII" aria-controls="movesPanelGenII" value={1} />
					) : null}

					{g[3] ? (
						<Tab label="Gen III" id="movesTabGenIII" aria-controls="movesPanelGenIII" value={2} />
					) : null}

					{g[4] ? (
						<Tab label="Gen IV" id="movesTabGenIV" aria-controls="movesPanelGenIV" value={3} />
					) : null}

					{g[5] ? (
						<Tab label="Gen V" id="movesTabGenV" aria-controls="movesPanelGenV" value={4} />
					) : null}

					{g[6] ? (
						<Tab label="Gen VI" id="movesTabGenVI" aria-controls="movesPanelGenVI" value={5} />
					) : null}

					{g[7] ? (
						<Tab label="Gen VII" id="movesTabGenVII" aria-controls="movesPanelGenVII" value={6} />
					) : null}

					{g[8] ? (
						<Tab label="Gen VIII" id="movesTabGenVIII" aria-controls="movesPanelGenVIII" value={7} />
					) : null}

					{g[9] ? (
						<Tab label="Gen IX" id="movesTabGenIX" aria-controls="movesPanelGenIX" value={8} />
					) : null}
				</Tabs>
			</Box>

			{g[1] ? (
				<TabPanel value={value.gen} index={0} id="panelGenI" ariaLabelledBy="tabGenI">
					<Tabs
						value={value.genI}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genI: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.redBlue ? (
							<Tab label="Red/Blue" id="tabRedBlue" aria-controls="panelRedBlue" value={0} />
						) : null}

						{v.yellow ? (
							<Tab label="Yellow" id="tabYellow" aria-controls="panelYellow" value={1} />
						) : null}
					</Tabs>

					{v.redBlue ? (
						<TabPanel value={value.genI} index={0} id="panelRedBlue" ariaLabelledBy="tabRedBlue">
							<LevelMoves
								game="Red & Blue"
								version="red-blue"
								moves={filterMoves("red-blue").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Red & Blue"
								version="red-blue"
								method="hm"
								moves={filterMoves("red-blue").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Red & Blue"
								version="red-blue"
								method="tm"
								moves={filterMoves("red-blue").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
					
					{v.yellow ? (
						<TabPanel value={value.genI} index={1} id="panelYellow" ariaLabelledBy="tabYellow">
							<LevelMoves
								game="Yellow"
								version="yellow"
								moves={filterMoves("yellow").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Yellow"
								version="yellow"
								method="hm"
								moves={filterMoves("yellow").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Yellow"
								version="yellow"
								method="tm"
								moves={filterMoves("yellow").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[2] ? (
				<TabPanel value={value.gen} index={1} id="panelGenII" ariaLabelledBy="tabGenII">
					<Tabs
						value={value.genII}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genII: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.goldSilver ? (
							<Tab label="Gold/Silver" id="goldSilverTab" aria-controls="goldSilverPanel" value={0} />
						) : null}

						{v.crystal ? (
							<Tab label="Crystal" id="crystalTab" aria-controls="crystalPanel" value={1} />
						) : null}
					</Tabs>

					{v.goldSilver ? (
						<TabPanel value={value.genII} index={0} id="panelGoldSilver" ariaLabelledBy="tabGoldSilver">
							<LevelMoves
								game="Gold & Silver"
								version="gold-silver"
								moves={filterMoves("gold-silver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Gold & Silver"
								version="gold-silver"
								method="hm"
								moves={filterMoves("gold-silver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Gold & Silver"
								version="gold-silver"
								method="tm"
								moves={filterMoves("gold-silver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.crystal ? (
						<TabPanel value={value.genII} index={1} id="panelCrystal" ariaLabelledBy="tabCrystal">
							<LevelMoves
								game="Crystal"
								version="crystal"
								moves={filterMoves("crystal").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Crystal"
								version="crystal"
								method="hm"
								moves={filterMoves("crystal").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Crystal"
								version="crystal"
								method="tm"
								moves={filterMoves("crystal").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[3] ? (
				<TabPanel value={value.gen} index={2} id="panelGenIII" ariaLabelledBy="tabGenIII">
					<Tabs
						value={value.genIII}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genIII: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.rubySapphire ? (
							<Tab label="Ruby/Sapphire" id="rubySapphireTab" aria-controls="rubySapphirePanel" value={0} />
						) : null}

						{v.emerald ? (
							<Tab label="Emerald" id="emeraldTab" aria-controls="emeraldPanel" value={1} />
						) : null}

						{v.fireRedLeafGreen ? (
							<Tab label="FireRed/LeafGreen" id="fireRedLeafGreenTab" aria-controls="fireRedLeafGreenPanel" value={2} />
						) : null}
					</Tabs>

					{v.rubySapphire ? (
						<TabPanel value={value.genIII} index={0} id="panelRubySapphire" ariaLabelledBy="tabRubySapphire">
							<LevelMoves
								game="Ruby & Sapphire"
								version="ruby-sapphire"
								moves={filterMoves("ruby-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Ruby & Sapphire"
								version="ruby-sapphire"
								method="hm"
								moves={filterMoves("ruby-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Ruby & Sapphire"
								version="ruby-sapphire"
								method="tm"
								moves={filterMoves("ruby-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.emerald ? (
						<TabPanel value={value.genIII} index={1} id="panelEmerald" ariaLabelledBy="tabEmerald">
							<LevelMoves
								game="Emerald"
								version="emerald"
								moves={filterMoves("emerald").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Emerald"
								version="emerald"
								method="hm"
								moves={filterMoves("emerald").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Emerald"
								version="emerald"
								method="tm"
								moves={filterMoves("emerald").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.fireRedLeafGreen ? (
						<TabPanel value={value.genIII} index={2} id="panelFireRedLeafGreen" ariaLabelledBy="tabFireRedLeafGreen">
							<LevelMoves
								game="FireRed & LeafGreen"
								version="firered-leafgreen"
								moves={filterMoves("firered-leafgreen").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="FireRed & LeafGreen"
								version="firered-leafgreen"
								method="hm"
								moves={filterMoves("firered-leafgreen").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="FireRed & LeafGreen"
								version="firered-leafgreen"
								method="tm"
								moves={filterMoves("firered-leafgreen").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[4] ? (
				<TabPanel value={value.gen} index={3} id="panelGenIV" ariaLabelledBy="tabGenIV">
					<Tabs
						value={value.genIV}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genIV: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.diamondPearl ? (
							<Tab label="Diamond/Pearl" id="diamondPearlTab" aria-controls="diamondPearlPanel" value={0} />
						) : null}

						{v.platinum ? (
							<Tab label="Platinum" id="platinumTab" aria-controls="platinumPanel" value={1} />
						) : null}

						{v.heartGoldSoulSilver ? (
							<Tab label="HeartGold/SoulSilver" id="heartGoldSoulSilverTab" aria-controls="heartGoldSoulSilverPanel" value={2} />
						) : null}
					</Tabs>

					{v.diamondPearl ? (
						<TabPanel value={value.genIV} index={0} id="panelDiamondPearl" ariaLabelledBy="tabDiamondPearl">
							<LevelMoves
								game="Diamond & Pearl"
								version="diamond-pearl"
								moves={filterMoves("diamond-pearl").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Diamond & Pearl"
								version="diamond-pearl"
								method="hm"
								moves={filterMoves("diamond-pearl").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Diamond & Pearl"
								version="diamond-pearl"
								method="tm"
								moves={filterMoves("diamond-pearl").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.platinum ? (
						<TabPanel value={value.genIV} index={1} id="panelPlatinum" ariaLabelledBy="tabPlatinum">
							<LevelMoves
								game="Platinum"
								version="platinum"
								moves={filterMoves("platinum").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Platinum"
								version="platinum"
								method="hm"
								moves={filterMoves("platinum").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Platinum"
								version="platinum"
								method="tm"
								moves={filterMoves("platinum").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.heartGoldSoulSilver ? (
						<TabPanel value={value.genIV} index={2} id="panelHeartGoldSoulSilver" ariaLabelledBy="tabHeartGoldSoulSilver">
							<LevelMoves
								game="HeartGold & SoulSilver"
								version="heartgold-soulsilver"
								moves={filterMoves("heartgold-soulsilver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="HeartGold & SoulSilver"
								version="heartgold-soulsilver"
								method="hm"
								moves={filterMoves("heartgold-soulsilver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="HeartGold & SoulSilver"
								version="heartgold-soulsilver"
								method="tm"
								moves={filterMoves("heartgold-soulsilver").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[5] ? (
				<TabPanel value={value.gen} index={4} id="panelGenV" ariaLabelledBy="tabGenV">
					<Tabs
						value={value.genV}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genV: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.blackWhite ? (
							<Tab label="Black/White" id="blackWhiteTab" aria-controls="blackWhitePanel" value={0} />
						) : null}

						{v.black2White2 ? (
							<Tab label="Black 2 / White 2" id="black2White2Tab" aria-controls="black2White2Panel" value={1} />
						) : null}
					</Tabs>

					{v.blackWhite ? (
						<TabPanel value={value.genV} index={0} id="panelBlackWhite" ariaLabelledBy="tabBlackWhite">
							<LevelMoves
								game="Black & White"
								version="black-white"
								moves={filterMoves("black-white").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Black & White"
								version="black-white"
								method="hm"
								moves={filterMoves("black-white").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Black & White"
								version="black-white"
								method="tm"
								moves={filterMoves("black-white").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.black2White2 ? (
						<TabPanel value={value.genV} index={1} id="panelBlack2White2" ariaLabelledBy="tabBlack2White2">
							<LevelMoves
								game="Black 2 & White 2"
								version="black-2-white-2"
								moves={filterMoves("black-2-white-2").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Black 2 & White 2"
								version="black-2-white-2"
								method="hm"
								moves={filterMoves("black-2-white-2").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Black 2 & White 2"
								version="black-2-white-2"
								method="tm"
								moves={filterMoves("black-2-white-2").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[6] ? (
				<TabPanel value={value.gen} index={5} id="panelGenVI" ariaLabelledBy="tabGenVI">
					<Tabs
						value={value.genVI}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genVI: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.xY ? (
							<Tab label="X / Y" id="xYTab" aria-controls="xYPanel" value={0} />
						) : null}

						{v.omegaRubyAlphaSapphire ? (
							<Tab label="Omega Ruby / Alpha Sapphire" id="omegaRubyAlphaSapphireTab" aria-controls="omegaRubyAlphaSapphirePanel" value={1} />
						) : null}
					</Tabs>

					{v.xY ? (
						<TabPanel value={value.genVI} index={0} id="panelXY" ariaLabelledBy="tabXY">
							<LevelMoves
								game="X & Y"
								version="x-y"
								moves={filterMoves("x-y").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="X & Y"
								version="x-y"
								method="hm"
								moves={filterMoves("x-y").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="X & Y"
								version="x-y"
								method="tm"
								moves={filterMoves("x-y").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}

					{v.omegaRubyAlphaSapphire ? (
						<TabPanel value={value.genVI} index={1} id="panelOmegaRubyAlphaSapphire" ariaLabelledBy="tabOmegaRubyAlphaSapphire">
							<LevelMoves
								game="Omega Ruby & Alpha Sapphire"
								version="omega-ruby-alpha-sapphire"
								moves={filterMoves("omega-ruby-alpha-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "level-up"))}
								pokemon={pokeName}
							/>

							<MachineMoves
								game="Omega Ruby & Alpha Sapphire"
								version="omega-ruby-alpha-sapphire"
								method="hm"
								moves={filterMoves("omega-ruby-alpha-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
							
							<MachineMoves
								game="Omega Ruby & Alpha Sapphire"
								version="omega-ruby-alpha-sapphire"
								method="tm"
								moves={filterMoves("omega-ruby-alpha-sapphire").filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
								pokemon={pokeName}
							/>
						</TabPanel>
					) : null}
				</TabPanel>
			) : null }

			{g[7] ? (
				<TabPanel value={value.gen} index={6} id="panelGenVII" ariaLabelledBy="tabGenVII">
					<Tabs
						value={value.genVII}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genVII: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.sunMoon ? (
							<Tab label="Sun/Moon" id="sunMoonTab" aria-controls="sunMoonPanel" value={0} />
						) : null}

						{v.ultraSunUltraMoon ? (
							<Tab label="Ultra Sun/Ultra Moon" id="ultraSunUltraMoonTab" aria-controls="ultraSunUltraMoonPanel" value={1} />
						) : null}

						{v.letsGoPikachuLetsGoEevee ? (
							<Tab label="Let's Go Pikachu/Let's Go Eevee" id="letsGoPikachuLetsGoEeveeTab" aria-controls="letsGoPikachuLetsGoEeveePanel" value={2} />
						) : null}
					</Tabs>

					
				</TabPanel>
			) : null }

			{g[8] ? (
				<TabPanel value={value.gen} index={7} id="panelGenVIII" ariaLabelledBy="tabGenVIII">
					<Tabs
						value={value.genVIII}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genVIII: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.swordShield ? (
							<Tab label="Sword/Shield" id="swordShieldTab" aria-controls="swordShieldPanel" value={0} />
						) : null}

						{v.theIsleOfArmor ? (
							<Tab label="Isle of Armor" id="theIsleOfArmorTab" aria-controls="theIsleOfArmorPanel" value={1} />
						) : null}

						{v.theCrownTundra ? (
							<Tab label="Crown Tundra" id="theCrownTundraTab" aria-controls="theCrownTundraPanel" value={2} />
						) : null}

						{v.brilliantDiamondShiningPearl ? (
							<Tab label="Brilliant Diamond/Shining Pearl" id="brilliantDiamondShiningPearlTab" aria-controls="brilliantDiamondShiningPearlPanel" value={3} />
						) : null}

						{v.legendsArceus ? (
							<Tab label="Legends Arceus" id="legendsArceusTab" aria-controls="legendsArceusPanel" value={4} />
						) : null}
					</Tabs>
				</TabPanel>
			) : null }

			{g[9] ? (
				<TabPanel value={value.gen} index={8} id="panelGenIX" ariaLabelledBy="tabGenIX">
					<Tabs
						value={value.genIX}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, genIX: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{v.scarletViolet ? (
							<Tab label="Scarlet/Violet" id="scarletVioletTab" aria-controls="scarletVioletPanel" value={0} />
						) : null}

						{v.theTealMask ? (
							<Tab label="Teal Mask" id="theTealMaskTab" aria-controls="theTealMaskPanel" value={1} />
						) : null}

						{v.theIndigoDisk ? (
							<Tab label="Indigo Disk" id="theIndigoDiskTab" aria-controls="theIndigoDiskPanel" value={2} />
						) : null}
					</Tabs>
				</TabPanel>
			) : null }
		</Container>
	)
}

const LevelMoves = props => {
	let navigate = useNavigate();
	const [moves, setMoves] = useState([]);

	const getMoves = arr => {
		arr.map(m1 => (
			m1.version_group_details.filter(f => f.version_group.name === props.version && f.move_learn_method.name === "level-up").map(m2 => (
				P.getMoveByName(m1.move.name)
					.then(res => {
						setMoves(currentList => [...currentList, {...res, ...m2} ])
					})
					.catch(error => {
						console.log(error)
					})
			))
		))
	}

	useEffect(() => {
		getMoves(props.moves);
	}, [props.moves]);

	if (moves.length < 1) {
		return (
			<>
				<Typography variant="h3">Moves learnt by level up</Typography>
				<Typography variant="body1">{props.pokemon} does not learn any moves by level up in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link>.</Typography>
			</>
		)
	}

	return (
		<>
			<Typography variant="h3">Moves learnt by level up</Typography>
			<Typography variant="body1">{props.pokemon} learns the following moves in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link> at the specified levels.</Typography>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Level</TableCell>
							<TableCell>Move</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Category</TableCell>
							<TableCell>Pow.</TableCell>
							<TableCell>Acc.</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{moves.sort((a, b) => a.level_learned_at - b.level_learned_at).map(move => (
							<TableRow key={move.id} onClick={() => navigate(`/move/${move.name}`)} hover style={{ cursor: "pointer" }}>
								<TableCell>{move.level_learned_at}</TableCell>
								<TableCell>{move.names.filter(f => f.language.name === "en").map(m => m.name)}</TableCell>
								<TableCell><Chip variant="type" type={move.type.name} label={move.type.name} /></TableCell>
								<TableCell>{move.damage_class.name}</TableCell>
								<TableCell>{move.power ? move.power : <>&mdash;</>}</TableCell>
								<TableCell>{move.accuracy ? `${move.accuracy}%` : <>&mdash;</>}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

const MachineMoves = props => {
	let navigate = useNavigate();
	const [moves, setMoves] = useState([]);
	const filteredMoves = moves.filter(f => f.machine.name.includes(props.method));

	const getMoves = arr => {
		arr.map(m1 => (
			m1.version_group_details.filter(f => f.version_group.name === props.version && f.move_learn_method.name === "machine").map(m2 => (
				P.getMoveByName(m1.move.name)
					.then(res1 => {
						P.getResource(res1.machines.filter(f => f.version_group.name === props.version).map(m => m.machine.url)[0])
							.then(res2 => {
								P.getResource(res2.item.url)
									.then(res3 => {
										setMoves(currentList => [...currentList, {...m2, ...res1, machine: res3} ])
									})
							})
						
					})
					.catch(error => {
						console.log(error)
					})
			))
		))

		
	}

	useEffect(() => {
		getMoves(props.moves);
	}, [props.moves]);

	// console.log("props", props.moves)
	// console.log("moves", moves)
	// console.log("filteredMoves", filteredMoves)

	return (
		<>
			<Typography variant="h3">Moves learnt by {props.method.toUpperCase()}</Typography>
			{filteredMoves.length < 1 ? (
				<Typography variant="body1">{props.pokemon} does not learn any moves by {props.method === "hm" ? <>hidden machine (HM)</> : <>technical machine (TM)</>} in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link>.</Typography>
			) : (
				<>
					<Typography variant="body1">{props.pokemon} can learn the following moves by {props.method === "hm" ? <>hidden machine (HM)</> : <>technical machine (TM)</>} in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link>.</Typography>
						<TableContainer>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell>{props.method.toUpperCase()}</TableCell>
										<TableCell>Move</TableCell>
										<TableCell>Type</TableCell>
										<TableCell>Category</TableCell>
										<TableCell>Pow.</TableCell>
										<TableCell>Acc.</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{filteredMoves.sort((a,b) => a.machine.name < b.machine.name ? -1 : a.name > b.name ? 1 : 0).map(move => (
										<TableRow key={move.id} onClick={() => navigate(`/move/${move.name}`)} hover style={{ cursor: "pointer" }}>
											<TableCell>{move.machine.names.filter(f => f.language.name === "en").map(m => m.name)}</TableCell>
											<TableCell>{move.names.filter(f => f.language.name === "en").map(m => m.name)}</TableCell>
											<TableCell><Chip variant="type" type={move.type.name} label={move.type.name} /></TableCell>
											<TableCell>{move.damage_class.name}</TableCell>
											<TableCell>{move.power ? move.power : <>&mdash;</>}</TableCell>
											<TableCell>{move.accuracy ? `${move.accuracy}%` : <>&mdash;</>}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				)
			}
			
		</>
	)
}

export default PokemonMoves;