import { useEffect, useState } from "react";
import Pokedex from 'pokedex-promise-v2';
import { Box, Chip, Container, Link, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import TabPanel from "../TabPanel";
import TypeIcon from "../../assets/TypeIcons";
import { useNavigate } from "react-router-dom";
import { Physical, Special, Status } from "../../assets/MoveIcons";

const P = new Pokedex();

const PokemonMoves = props => {
	const pokeName = props.names.filter(f => f.language.name === "en").map(m => m.name)[0];
	const moves = props.moves;

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

	const moveData = [
		{
			index: 0,
			id: "GenI",
			name: "Gen I",
			version: "genI",
			games: [
				{
					id: "RedBlue",
					name: "Red & Blue",
					version: "red-blue",
					moves: filterMoves("red-blue"),
					moveMethods: ["level-up", "hm", "tm"]
				},
				{
					id: "Yellow",
					name: "Yellow",
					version: "yellow",
					moves: filterMoves("yellow"),
					moveMethods: ["level-up", "hm", "tm"]
				}
			]
		},
		{
			index: 1,
			id: "GenII",
			name: "Gen II",
			version: "genII",
			games: [
				{
					id: "GoldSilver",
					name: "Gold & Silver",
					version: "gold-silver",
					moves: filterMoves("gold-silver"),
					moveMethods: ["level-up", "egg", "hm", "tm"]
				},
				{
					id: "Crystal",
					name: "Crystal",
					version: "crystal",
					moves: filterMoves("crystal"),
					moveMethods: ["level-up", "egg", "hm", "tm"]
				}
			]
		},
		{
			index: 2,
			id: "GenIII",
			name: "Gen III",
			version: "genIII",
			games: [
				{
					id: "RubySapphire",
					name: "Ruby & Sapphire",
					version: "ruby-sapphire",
					moves: filterMoves("ruby-sapphire"),
					moveMethods: ["level-up", "egg", "hm", "tm"]
				},
				{
					id: "Emerald",
					name: "Emerald",
					version: "emerald",
					moves: filterMoves("emerald"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				},
				{
					id: "FireRedLeafGreen",
					name: "FireRed & LeafGreen",
					version: "firered-leafgreen",
					moves: filterMoves("firered-leafgreen"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				}
			]
		},
		{
			index: 3,
			id: "GenIV",
			name: "Gen IV",
			version: "genIV",
			games: [
				{
					id: "DiamondPearl",
					name: "Diamond & Pearl",
					version: "diamond-pearl",
					moves: filterMoves("diamond-pearl"),
					moveMethods: ["level-up", "egg", "hm", "tm"]
				},
				{
					id: "Platinum",
					name: "Platinum",
					version: "platinum",
					moves: filterMoves("platinum"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				},
				{
					id: "HeartGoldSoulSilver",
					name: "HeartGold & SoulSilver",
					version: "heartgold-soulsilver",
					moves: filterMoves("heartgold-soulsilver"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				}
			]
		},
		{
			index: 4,
			id: "GenV",
			name: "Gen V",
			version: "genV",
			games: [
				{
					id: "BlackWhite",
					name: "Black & White",
					version: "black-white",
					moves: filterMoves("black-white"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				},
				{
					id: "Black2White2",
					name: "Black 2 & White 2",
					version: "black-2-white-2",
					moves: filterMoves("black-2-white-2"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				}
			]
		},
		{
			index: 5,
			id: "GenVI",
			name: "Gen VI",
			version: "genVI",
			games: [
				{
					id: "XY",
					name: "X & Y",
					version: "x-y",
					moves: filterMoves("x-y"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				},
				{
					id: "OmegaRubyAlphaSapphire",
					name: "Omega Ruby & Alpha Sapphire",
					version: "omega-ruby-alpha-sapphire",
					moves: filterMoves("omega-ruby-alpha-sapphire"),
					moveMethods: ["level-up", "egg", "tutor", "hm", "tm"]
				}
			]
		},
		{
			index: 6,
			id: "GenVII",
			name: "Gen VII",
			version: "genVII",
			games: [
				{
					id: "SunMoon",
					name: "Sun & Moon",
					version: "sun-moon",
					moves: filterMoves("sun-moon"),
					moveMethods: ["level-up", "egg", "tutor", "tm"]
				},
				{
					id: "UltraSunUltraMoon",
					name: "Ultra Sun & Ultra Moon",
					version: "ultra-sun-ultra-moon",
					moves: filterMoves("ultra-sun-ultra-moon"),
					moveMethods: ["level-up", "egg", "tutor", "tm"]
				},
				{
					id: "LetsGoPikachuLetsGoEevee",
					name: "Let's Go Pikachu & Let's Go Eevee",
					version: "lets-go-pikachu-lets-go-eevee",
					moves: filterMoves("lets-go-pikachu-lets-go-eevee"),
					moveMethods: ["level-up", "tm"]
				}
			]
		},
		{
			index: 7,
			id: "GenVIII",
			name: "Gen VIII",
			version: "genVIII",
			games: [
				{
					id: "SwordShield",
					name: "Sword & Shield",
					version: "sword-shield",
					moves: filterMoves("sword-shield"),
					moveMethods: ["level-up", "egg", "tutor", "tm", "tr"]
				},
				{
					id: "BrilliantDiamondShiningPearl",
					name: "Brilliant Diamond & Shining Pearl",
					version: "brilliant-diamond-shining-pearl",
					moves: filterMoves("brilliant-diamond-shining-pearl"),
					moveMethods: ["level-up", "egg", "tm"]
				},
				{
					id: "LegendsAcreus",
					name: "Legends: Arceus",
					version: "legends-arceus",
					moves: filterMoves("legends-arceus"),
					moveMethods: ["level-up", "tutor"]
				}
			]
		},
		{
			index: 8,
			id: "GenIX",
			name: "Gen IX",
			version: "genIX",
			games: [
				{
					id: "ScarletViolet",
					name: "Scarlet & Violet",
					version: "scarlet-violet",
					moves: filterMoves("scarlet-violet"),
					moveMethods: ["level-up", "egg", "tm"]
				},
			]
		},
	]

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

			{moveData.map((m1, index) => (
				<TabPanel key={index} value={value.gen} index={index} id={`panel${m1.id}`} ariaLabelledBy={`tab${m1.id}`}>
					<Tabs
						value={value[m1.version]}
						onChange={(e, newValue) => setValue(prev => ({ ...prev, [m1.version]: newValue }))}
						variant="scrollable"
						scrollButtons="auto"
						aria-label="learned moves sorted by game"
					>
						{m1.games.map((m2, index) => (
							m2.moves.length > 0 ? (
								<Tab key={index} label={m2.name} id={`tab${m2.id}`} aria-controls={`panel${m2.id}`} value={index} />
							) : null
						))}
					</Tabs>

					{m1.games.map((m2, index) => (
						m2.moves.length > 0 ? (
							<TabPanel key={index} value={value[m1.version]} index={index} id={`panel${m2.id}`} ariaLabelledBy={`tab${m2.id}`}>
								{m2.moveMethods.map((m3, index) => (
									m3 === "level-up" ? (
										<LevelMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === m3))}
											pokemon={pokeName}
										/>
									) : m3 === "egg" || m3 === "tutor" ? (
										<MiscMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === m3))}
											pokemon={pokeName}
										/>
									) : m3 === "hm" ? (
										<MachineMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
											pokemon={pokeName}
										/>
									) : m3 === "tm" ? (
										<MachineMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
											pokemon={pokeName}
										/>
									) : m3 === "tr" ? (
										<MachineMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === "machine"))}
											pokemon={pokeName}
										/>
									) : (
										<MiscMoves
											key={index}
											game={m2.name}
											version={m2.version}
											method={m3}
											moves={m2.moves.filter(f => f.version_group_details.some(s => s.move_learn_method.name === m3))}
											pokemon={pokeName}
										/>
									)
								))}
							</TabPanel>
						) : null
					))}
				</TabPanel>
			))}
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
								<TableCell>
									{move.damage_class.name === "physical" ? (
										<Physical />
									) : move.damage_class.name === "special" ? (
										<Special />
									) : move.damage_class.name === "status" ? (
										<Status />
									) : null}
								</TableCell>
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
											<TableCell>
												{move.damage_class.name === "physical" ? (
													<Physical />
												) : move.damage_class.name === "special" ? (
													<Special />
												) : move.damage_class.name === "status" ? (
													<Status />
												) : null}
											</TableCell>
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

const MiscMoves = props => {
	let navigate = useNavigate();
	const [moves, setMoves] = useState([]);

	const getMoves = arr => {
		arr.map(m1 => (
			m1.version_group_details.filter(f => f.version_group.name === props.version && f.move_learn_method.name === props.method).map(m2 => (
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
				<Typography variant="h3">Moves learnt by {props.method}</Typography>
				<Typography variant="body1">{props.pokemon} does not learn any moves by {props.method} in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link>.</Typography>
			</>
		)
	}

	return (
		<>
			<Typography variant="h3">Moves learnt by {props.method}</Typography>
			<Typography variant="body1">{props.pokemon} learns the following moves by {props.method} in <Link href={`/game/${props.version}`} underline="hover">Pokémon {props.game}</Link>.</Typography>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Move</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Category</TableCell>
							<TableCell>Pow.</TableCell>
							<TableCell>Acc.</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{moves.sort((a,b) => a.name < b.name ? -1 : 0).map(move => (
							<TableRow key={move.id} onClick={() => navigate(`/move/${move.name}`)} hover style={{ cursor: "pointer" }}>
								<TableCell>{move.names.filter(f => f.language.name === "en").map(m => m.name)}</TableCell>
								<TableCell><Chip variant="type" type={move.type.name} label={move.type.name} /></TableCell>
								<TableCell>
									{move.damage_class.name === "physical" ? (
										<Physical />
									) : move.damage_class.name === "special" ? (
										<Special />
									) : move.damage_class.name === "status" ? (
										<Status />
									) : null}
								</TableCell>
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

export default PokemonMoves;