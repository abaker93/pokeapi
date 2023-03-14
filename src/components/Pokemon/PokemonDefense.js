import { Chip, Container } from "@mui/material";
import TypeIcon from "../../assets/TypeIcons";
import { typesArray } from "../../utilities/data";
import { calcDefense } from "../../utilities/utilities";

export default function PokemonDefense(props) {
	const p = props;

	return (
		<Container id="PokemonDefense" className="grid">
			{typesArray.map((type, index) => {
				return (
					<PokemonDefenseChip
						key={index}
						defense={[
							p.types[0].type.name,
							p.types[1] ? p.types[1].type.name : null
						]}
						offense={type}
					/>
				)
			})}
		</Container>
	)
}

function PokemonDefenseChip(props) {
	return (
		<Chip
			variant="type"
			type={props.offense}
			orientation="vertical"
			icon={<TypeIcon type={props.offense} />}
			label={calcDefense(props.defense[0], props.defense[1], props.offense)}
		/>
	)
}