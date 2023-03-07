import { useEffect, useState } from "react";
import { Container } from "@mui/material";

export default function PokemonEvolution(props) {
	const p = props[0];

	const [evolution, setEvolution] = useState();
	const [evoLvl1, setEvoLvl1] = useState();
	const [evoLvl2, setEvoLvl2] = useState();
	const [evoLvl3, setEvoLvl3] = useState();
	const [evoLvl4, setEvoLvl4] = useState();

	const getEvolution = url => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setEvolution(data);

				const level1 = data.chain;
				const level2 = data.chain.evolves_to.map(a => a);
				const level3 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b))
				const level4 = data.chain.evolves_to.map(a => a.evolves_to.map(b => b.evolves_to.map(c => c)))
				
				setEvoLvl1(level1);
				setEvoLvl2(level2);
				setEvoLvl3(level3);
				setEvoLvl4(level4);
			})
	}

	useEffect(() => {
		getEvolution(p.evolution_chain.url)
	}, [])

	console.log(evolution)
	console.log(evoLvl1)
	console.log(evoLvl2)
	console.log(evoLvl3)
	console.log(evoLvl4)
	
	return (
		<Container id="PokemonEvolution" className="grid">
			
		</Container>
	)
}