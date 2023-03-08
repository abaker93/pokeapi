import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

export default function PokemonEvolution(props) {
	const p = props[0];

	const [evolution, setEvolution] = useState();
	// const [evoLvl1, setEvoLvl1] = useState();
	// const [evoLvl2, setEvoLvl2] = useState();
	// const [evoLvl3, setEvoLvl3] = useState();
	// const [evoLvl4, setEvoLvl4] = useState();

	const getEvolution = url => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setEvolution(data);

				// const level1 = data.chain;
				// const level2 = data.chain.evolves_to.map(a => a);
				// const level3 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b))
				// const level4 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b.evolves_to.map(c => c)))
				
				// setEvoLvl1(level1);
				// setEvoLvl2(level2);
				// setEvoLvl3(level3);
				// setEvoLvl4(level4);
			})
	}

	useEffect(() => {
		getEvolution(p.evolution_chain.url)
	}, [p.evolution_chain.url])

	console.log(evolution)
	// console.log('evoLvl1:', evoLvl1)
	// console.log('evoLvl2:', evoLvl2)
	//console.log('evoLvl3:', evoLvl3)
	//console.log('evoLvl4:', evoLvl4)

	return (
		evolution ? (
			<Container id="PokemonEvolution" className="grid">
				{evolution.chain.evolves_to.length > 0 ? (
					<PokemonEvolutionNode {...evolution.chain}>
						<p>{evolution.chain.species.name}</p>
					
						{evolution.chain.evolves_to.length > 0 ? evolution.chain.evolves_to.map(a => (
							<PokemonEvolutionNode {...a}>
								<p>{a.species.name}</p>

								{a.evolves_to.length > 0 ? a.evolves_to.map(b => (
									<PokemonEvolutionNode {...b}>
										<p>{b.species.name}</p>

										{b.evolves_to.length > 0 ? b.evolves_to.map(c => (
											<PokemonEvolutionNode {...c}>
												<p>{c.species.name}</p>

												{c.evolves_to.length > 0 ? c.evolves_to.map(d => (
													<PokemonEvolutionNode {...d}>
														<p>{d.species.name}</p>
													</PokemonEvolutionNode>
												)) : null /* end level 4 */}
											</PokemonEvolutionNode>
										)) : null /* end level 4 */}
									</PokemonEvolutionNode>
								)) : null /* end level 3 */}
							</PokemonEvolutionNode>
						)) : null /* end level 2 */}
					</PokemonEvolutionNode>
				) : (
					<Typography variant="body1">{p.names.filter(n => n.language.name === "en").map(n => n.name)} does not evolve.</Typography>
				) /* end level 1 */}
				
			</Container>
		) : null
	)
}

function PokemonEvolutionNode (props) {
	
	const speciesURL = props.species.url;

	const [pokemon, setPokemon] = useState([]);

	const getPokemon = url => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setPokemon([data])

				const varieties = data.varieties.filter(f => f.is_default).map(m => m.pokemon.url)
				console.log(varieties)

				varieties.map(varietyURL => {
					fetch(varietyURL)
						.then(res => res.json())
						.then(data => {
							setPokemon(current => [...current, data])
						})
				})
			});
	};

	useEffect(() => {
		getPokemon(speciesURL)
	}, []);

	console.log('pokemon', pokemon)

	return (
		pokemon ? (
			<div>
				<img
					src="img.png"
				/>
				{props.children}
			</div>
		) : null
		
		// pokemon.length > 0 ? (
		// 	pokemon.map(p => (
		// 		p.varieties_info.filter(v => v).map(v => (
		// 			<img
		// 				src={v.sprites.other["official-artwork"].front_default}
		// 				alt={v.name}
		// 			/>
		// 		))
		// 	))
		// ) : null
	)
}