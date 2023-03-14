import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { eggCycleSteps } from "../../utilities/data";

export default function PokemonBreeding(props) {
	const p = props;

	const [breeding, setBreeding] = useState([]);

	const getBreeding = async url => {
		await fetch(url)
			.then(res => res.json())
			.then(data => {
				setBreeding(currentList => [...currentList, { ...data }])
			})
	}

	useEffect(() => {
		p.egg_groups.map(g => getBreeding(g.url))
	}, [])

	return (
		<Container id="PokemonBreeding" className="grid">
			<Typography variant="h2">Breeding</Typography>
			<div className="col grid">
				<Typography variant="h3">Egg Group{breeding.length > 1 ? `s` : null}</Typography>
				{breeding.map((b, index) => (
					b.names
						.filter(f => f.language.name === "en")
						.map(m => (
							<Card key={index} variant="type" type={p.types[0].type.name}>
								<CardActionArea>
									<CardContent href={`./egg-group/${m.name}`}>
										<Typography variant="body1">{m.name}</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						))
				))}
			</div>
			<div className="col">
				<Typography variant="h3" sx={{ mb: 0.8 }}>Egg Cycles</Typography>
				<Typography variant="body1">{p.hatch_counter}</Typography>
				<Typography variant="caption">{((p.hatch_counter / 2) * eggCycleSteps).toLocaleString('en', {useGrouping: true})} - {(p.hatch_counter * eggCycleSteps).toLocaleString('en', {useGrouping: true})} steps</Typography>
			</div>
		</Container>
	)
}