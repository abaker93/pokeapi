import { Link } from "react-router-dom";
import { formatDexId } from '../utilities';

const PokemonHeader = (params) => {
	const prevId = params.id - 1;
	const nextId = params.id + 1;

	return (
		<header>
			<div className="top">
				<span className="japanese">{params.japanese}</span>
				<img className="poke-img" src={params.image} alt={params.name} />
				<Link to={`/pokemon/${formatDexId(prevId)}`}>
					<img
						className="prev-poke-img"
						src={params.prevImg}
						alt={params.prevName}
					/>
				</Link>
				<Link to={`/pokemon/${formatDexId(nextId)}`}>
					<img
						className="next-poke-img"
						src={params.nextImg}
						alt={params.nextName}
					/>
				</Link>
			</div>
		</header>
	)
}

export default PokemonHeader;