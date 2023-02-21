import { Link } from "react-router-dom";

const PokemonHeader = (params) => {
	return (
		<header>
			<div className="top">
				<span className="japanese">{params.japanese}</span>
				<img className="poke-img" src={params.image} alt={params.name} />
				<Link to={`/pokemon/${params.id - 1}`}>
					<img
						className="prev-poke-img"
						src={params.prevImg}
						alt={params.prevName}
					/>
				</Link>
				<Link to={`/pokemon/${params.id + 1}`}>
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