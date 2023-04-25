import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react";

const PokemonSprites = props => {
	const pokeName = props.names.filter(f => f.language.name === "en").map(m => m.name)[0];

	console.log(props.sprites)

	const sprites = [
		{
			id: 1,
			name: "I",
			gray: true,
			normal: props.sprites.versions["generation-i"]["red-blue"].front_gray ? true : false,
			shiny: null,
			sprites: props.sprites.versions["generation-i"]["red-blue"],
		},
		{
			id: 2,
			name: "II",
			gray: false,
			normal: props.sprites.versions["generation-ii"].gold.front_default ? true : false,
			shiny: props.sprites.versions["generation-ii"].gold.front_shiny ? true : false,
			sprites: props.sprites.versions["generation-ii"].gold,
		},
		{
			id: 3,
			name: "III",
			gray: false,
			normal: props.sprites.versions["generation-iii"]["ruby-sapphire"].front_default ? true : false,
			shiny: props.sprites.versions["generation-iii"]["ruby-sapphire"].front_shiny ? true : false,
			sprites: props.sprites.versions["generation-iii"]["ruby-sapphire"],
		},
		{
			id: 4,
			name: "IV",
			gray: false,
			normal: props.sprites.versions["generation-iv"]["diamond-pearl"].front_default ? true : false,
			shiny: props.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny ? true : false,
			sprites: props.sprites.versions["generation-iv"]["diamond-pearl"],
		},
		{
			id: 5,
			name: "V",
			gray: false,
			normal: props.sprites.versions["generation-v"]["black-white"].front_default ? true : false,
			shiny: props.sprites.versions["generation-v"]["black-white"].front_shiny ? true : false,
			sprites: props.sprites.versions["generation-v"]["black-white"],
		},
		{
			id: 6,
			name: "VI",
			gray: false,
			normal: props.sprites.versions["generation-vi"]["x-y"].front_default ? true : false,
			shiny: props.sprites.versions["generation-vi"]["x-y"].front_shiny ? true : false,
			sprites: props.sprites.versions["generation-vi"]["x-y"],
		},
		{
			id: 7,
			name: "VII",
			gray: false,
			normal: props.sprites.versions["generation-vii"].icons.front_default ? true : false,
			shiny: props.sprites.versions["generation-vii"].icons.front_shiny ? true : false,
			sprites: props.sprites.versions["generation-vii"].icons,
		},
		{
			id: 8,
			name: "VIII",
			gray: false,
			normal: props.sprites.versions["generation-viii"].icons.front_default ? true : false,
			shiny: props.sprites.versions["generation-viii"].icons.front_shiny ? true : false,
			sprites: props.sprites.versions["generation-viii"].icons,
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
								m.normal ? (<TableCell key={m.id}>{m.name}</TableCell>) : null
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Normal</TableCell>
							{sprites.map(m => (
								m.normal ? (
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
							
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default PokemonSprites;