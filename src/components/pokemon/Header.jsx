import { Box, Link } from "@mui/material"
import { formatDexId, getNameByLang } from "../../utilities/utilities"

const Header = props => {
	const { children, pokemon, species, prev, next } = props

	console.log(pokemon, species, prev, next)

	return (
		<>
			<Box
				type1={pokemon.types[0].type.name}
				type2={pokemon.types[1]
					? pokemon.types[1].type.name
					: pokemon.types[0].type.name}
			>
				{getNameByLang(species.names, 'ja')}
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={getNameByLang(species.names, 'en')}
					style={{ width: '200px', }}
				/>
				<Box>
					{prev !== '' ? <Nav pokemon={prev} /> : null}
				</Box>
				<Box>
					{next !== '' ? <Nav pokemon={next} /> : null}
				</Box>
			</Box>
			<Title />
		</>
	)
}

const Nav = props => {
	const { pokemon } = props

	return (
		<Link href={`${formatDexId(pokemon.id)}`}>
			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				alt={pokemon.name}
				style={{ width: '200px', }}
			/>
		</Link>
	)
}

const Title = props => {
	return ( <>title</> )
}

export default Header