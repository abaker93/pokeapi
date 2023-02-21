import { Link } from "react-router-dom";
import { formatDexId } from "../utilities";

const PokedexCard = (props) => {
	return (
		<Link to={`/pokemon/${formatDexId(props.id)}`}>
			<div>
				<div><small>{formatDexId(props.id)}</small></div>
				<img src={props.image} alt={props.name} width="100" />
				<div>
					<h3>{props.name}</h3>
					<small>Type: {props.type[0]} &bull; {props.type[1]}</small>
				</div>
			</div>
		</Link>
	)
}

export default PokedexCard;