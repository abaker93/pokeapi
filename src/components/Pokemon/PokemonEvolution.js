import { Container, Typography } from "@mui/material";
import { FemaleSharp, MaleSharp } from "@mui/icons-material";

export default function PokemonEvolution(props) {
	const loading = props.loading;
	const currentPokemon = props.pokemon[0];
	const evolutionChain = props.evolution.chain;
	const pokemon = props.evolution.pokemon;

	const a = evolutionChain.chain;
	let levels;

	if (a) {
		if (a.evolves_to.length > 0) {
			a.evolves_to.map(b => {
				if (b.evolves_to.length > 0) {
					b.evolves_to.map(c => {
						if (c.evolves_to.length > 0) {
							levels = 4;
						} else {
							levels = 3;
						}
					})
				} else {
					levels = 2;
				}
			})
		} else {
			levels = 1;
		}
	}

	return (
		<Container id="PokemonEvolution" className="grid" data-level={levels}>
			{loading ? (
				<p>Loading</p>
			) : (
				levels > 1 ? (
					<PokemonEvolutionNode levels={levels} pokemon={pokemon.filter(f => f.name === a.species.name)} details={a.evolution_details}>
						{a.evolves_to.map((b, index) => (
							<PokemonEvolutionNode key={index} levels={levels} pokemon={pokemon.filter(f => f.name === b.species.name)} details={b.evolution_details}>
								{b.evolves_to.map((c, index) => (
									<PokemonEvolutionNode key={index} pokemon={pokemon.filter(f => f.name === c.species.name)} details={c.evolution_details}>
										{c.evolves_to.map((d, index) => (
											<PokemonEvolutionNode key={index} pokemon={pokemon.filter(f => f.name === d.species.name)} details={d.evolution_details} />
										)) /* end level 4 */}
									</PokemonEvolutionNode>
								)) /* end level 3 */}
							</PokemonEvolutionNode>
						)) /* end level 2 */}
					</PokemonEvolutionNode>
				) : (
					<Typography variant="body1">
						{currentPokemon.names.filter(n => n.language.name === "en").map(n => n.name)} does not evolve.
					</Typography>
				) /* end level 1 */
			)}
		</Container>
	)
}

function PokemonEvolutionNode (props) {
	//console.log(props.details)

	const details = d => {
		console.log(d)
		switch (d.trigger.name) {
			case "level-up":
				return (
					<>
						{d.gender !== null ? (
							d.gender === 1 ? (
								<FemaleSharp />
							) : d.gender === 2 ? (
								<MaleSharp />
							) : null
						) : null}
						{d.held_item !== null ? (
							<span>holding {d.held_item}</span>
						) : null}
						{d.item !== null ? (
							<span>{d.item}</span>
						) : null}
						{d.known_move !== null ? (
							<span>{d.known_move}</span>
						) : null}
						{d.known_move_type !== null ? (
							<span>{d.known_move_type}</span>
						) : null}
						{d.location !== null ? (
							<span>{d.location}</span>
						) : null}
						{d.min_affection !== null ? (
							<span>{d.min_affection}</span>
						) : null}
						{d.min_beauty !== null ? (
							<span>{d.min_beauty}</span>
						) : null}
						{d.min_happiness !== null ? (
							<span>{d.min_happiness}</span>
						) : null}
						{d.min_level !== null ? (
							<span>lvl {d.min_level}</span>
						) : null}
						{d.needs_overworld_rain === true ? (
							<span>during rain</span>
						) : null}
						{d.party_species !== null ? (
							<span>{d.party_species}</span>
						) : null}
						{d.party_type !== null ? (
							<span>{d.party_type}</span>
						) : null}
						{d.relative_physical_stats !== null ? (
							<span>{d.relative_physical_stats}</span>
						) : null}
						{d.time_of_day !== null || d.time_of_day !== "" ? (
							<span>{d.time_of_day}</span>
						) : null}
						{d.trade_species !== null ? (
							<span>{d.trade_species}</span>
						) : null}
						{d.turn_upside_down !== null ? (
							<span>{d.turn_upside_down}</span>
						) : null}
					</>
				);
			case "trade":
				return ("trade");
			case "use-item":
				return (
					<>
					{d.gender !== null ? (
						d.gender === 1 ? (
							<FemaleSharp />
						) : d.gender === 2 ? (
							<MaleSharp />
						) : null
					) : null}
					{d.held_item !== null ? (
						<span>holding {d.held_item.name}</span>
					) : null}
					{d.item !== null ? (
						<span>{d.item.name}</span>
					) : null}
					{d.known_move !== null ? (
						<span>{d.known_move}</span>
					) : null}
					{d.known_move_type !== null ? (
						<span>{d.known_move_type}</span>
					) : null}
					{d.location !== null ? (
						<span>{d.location}</span>
					) : null}
					{d.min_affection !== null ? (
						<span>{d.min_affection}</span>
					) : null}
					{d.min_beauty !== null ? (
						<span>{d.min_beauty}</span>
					) : null}
					{d.min_happiness !== null ? (
						<span>{d.min_happiness}</span>
					) : null}
					{d.min_level !== null ? (
						<span>lvl {d.min_level}</span>
					) : null}
					{d.needs_overworld_rain === true ? (
						<span>during rain</span>
					) : null}
					{d.party_species !== null ? (
						<span>{d.party_species}</span>
					) : null}
					{d.party_type !== null ? (
						<span>{d.party_type}</span>
					) : null}
					{d.relative_physical_stats !== null ? (
						<span>{d.relative_physical_stats}</span>
					) : null}
					{d.time_of_day !== null || d.time_of_day !== "" ? (
						<span>{d.time_of_day}</span>
					) : null}
					{d.trade_species !== null ? (
						<span>{d.trade_species}</span>
					) : null}
					{d.turn_upside_down !== null ? (
						<span>{d.turn_upside_down}</span>
					) : null}
				</>
				);
			case "shed":
				return ("shed");
			case "spin":
				return ("spin");
			case "tower-of-darkness":
				return ("tower-of-darkness");
			case "tower-of-waters":
				return ("tower-of-waters");
			case "three-critical-hits":
				return ("three-critical-hits");
			case "take-damage":
				return ("take-damage");
			case "other":
				return ("other");
			case "agile-style-move":
				return ("agile-style-move");
			case "strong-style-move":
				return ("strong-style-move");
			case "recoil-damage":
				return ("recoil-damage");
			default:
				return ("ehh...")
		}
	}

	return (
		props.pokemon.map(p => (
			<div className="evolutionNode" key={p.id}>
				<div className="current">
					{props.details.length > 0 ? (
						props.details.map((d, index) => (
							<p key={index}>{details(d)}</p>
						))
					) : null}
					<img src={p.sprites.other.home.front_default} alt={p.name} />
				</div>
				{props.children.length > 0 ? (
					<div className="next">
						{props.children}
					</div>
				) : null}
			</div>
		))
		
	)
}