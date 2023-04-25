import { Container, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import React from "react";
import { formatDexId } from "../../utilities/utilities";

const PokemonSprites = props => {
	const pokeName = props.names.filter(f => f.language.name === "en").map(m => m.name)[0];

	console.log(props.sprites)

	const sprites = [
		{
			id: 1,
			name: "I",
			gray: true,
			sprites: props.sprites.versions["generation-i"]["red-blue"],
			bool: props.sprites.versions["generation-i"]["red-blue"].front_gray ? true : false,
		},
		{
			id: 2,
			name: "II",
			gray: false,
			sprites: props.sprites.versions["generation-ii"].gold,
			bool: props.sprites.versions["generation-ii"].gold.front_default ? true : false,
		},
		{
			id: 3,
			name: "III",
			gray: false,
			sprites: props.sprites.versions["generation-iii"]["ruby-sapphire"],
			bool: props.sprites.versions["generation-iii"]["ruby-sapphire"].front_default ? true : false,
		},
		{
			id: 4,
			name: "IV",
			gray: false,
			sprites: props.sprites.versions["generation-iv"]["diamond-pearl"],
			bool: props.sprites.versions["generation-iv"]["diamond-pearl"].front_default ? true : false,
		},
		{
			id: 5,
			name: "V",
			gray: false,
			sprites: props.sprites.versions["generation-v"]["black-white"],
			bool: props.sprites.versions["generation-v"]["black-white"].front_default ? true : false,
		},
		{
			id: 6,
			name: "VI",
			gray: false,
			sprites: props.sprites.versions["generation-vi"]["x-y"],
			bool: props.sprites.versions["generation-vi"]["x-y"].front_default ? true : false,
		},
		{
			id: 7,
			name: "VII",
			gray: false,
			sprites: props.sprites.versions["generation-vii"].icons,
			bool: props.sprites.versions["generation-vii"].icons.front_default ? true : false,
		},
		{
			id: 8,
			name: "VIII",
			gray: false,
			sprites: props.sprites.versions["generation-viii"].icons,
			bool: props.sprites.versions["generation-viii"].icons.front_default ? true : false,
		},
	]

	console.log(props.sprites)

	return (
		<Container id="PokemonSprites">
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Generation</TableCell>
							{sprites.map(m => (
								m.bool ? (<TableCell key={m.id}>{m.name}</TableCell>) : null
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Normal</TableCell>
							{sprites.map(m => (
								m.bool ? (
									m.gray ? (
										<TableCell key={m.id}>
											{m.sprites.front_gray ? (
												<img
													src={m.sprites.front_gray}
													alt={`${pokeName} generation ${m.name} front sprite`}
													className="sprite sprite-normal sprite-front sprite-gray"
												/>
											) : null}
											{m.sprites.back_gray ? (
												<img
													src={m.sprites.back_gray}
													alt={`${pokeName} generation ${m.name} back sprite`}
													className="sprite sprite-normal sprite-back sprite-gray"
												/>
											) : null}
										</TableCell>
									) : (
										<TableCell key={m.id}>
											{m.sprites.front_default ? (
												<img
													src={m.sprites.front_default}
													alt={`${pokeName} generation ${m.name} front sprite`}
													className="sprite sprite-normal sprite-front sprite-gray"
												/>
											) : null}
											{m.sprites.back_default ? (
												<img
													src={m.sprites.back_default}
													alt={`${pokeName} generation ${m.name} back sprite`}
													className="sprite sprite-normal sprite-back sprite-gray"
												/>
											) : null}
										</TableCell>
									)
								) : null
							))}
						</TableRow>
						<TableRow>
							<TableCell>Shiny</TableCell>
							{sprites.map(m => (
								m.bool ? (
									<TableCell key={m.id}>
										{m.sprites.front_shiny ? (
											<img
												src={m.sprites.front_shiny}
												alt={`${pokeName} generation ${m.name} shiny front sprite`}
												className="sprite sprite-normal sprite-front sprite-shiny"
											/>
										) : <>&mdash;</>}
										{m.sprites.back_shiny ? (
											<img
												src={m.sprites.back_shiny}
												alt={`${pokeName} generation ${m.name} shiny back sprite`}
												className="sprite sprite-normal sprite-back sprite-shiny"
											/>
										) : null}
									</TableCell>
								) : null
							))}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Link href={`/pokemon/${formatDexId(props.id)}/sprites`} underline="hover">
				<Typography variant="h6">See all {pokeName} sprites <ArrowForwardSharp /></Typography>
			</Link>
		</Container>
	)
}

export default PokemonSprites;