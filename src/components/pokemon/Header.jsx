import { Box, Chip, Container, Link, Typography } from "@mui/material"
import { filterByLang, formatDexId } from "../../utilities/utilities"
import TypeIcon from "../../assets/TypeIcon"
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Header = props => {
	const { lang, pokemon, species, prev, next } = props

	// console.log(
		// 'lang', lang,
		// 'pokemon', pokemon,
		// 'species', species,
		// 'prev', prev,
		// 'next', next
	// )

	return (
		<>
			<Box
				type1={pokemon.types[0].type.name}
				type2={pokemon.types[1]
					? pokemon.types[1].type.name
					: pokemon.types[0].type.name}
			>
				{filterByLang('name', species.names, 'ja')}
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={filterByLang('name', species.names, lang)}
					style={{ width: '200px', }}
				/>
				<Box>
					{prev !== '' ? <Nav pokemon={prev} /> : null}
				</Box>
				<Box>
					{next !== '' ? <Nav pokemon={next} /> : null}
				</Box>
			</Box>

			<Title
				genera={filterByLang('genus', species.genera, lang)}
				id={pokemon.id}
				name={filterByLang('name', species.names, lang)}
				types={pokemon.types}
			/>
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
	const { genera, id, name, types } = props

	// console.log(
	// 	'genera', genera,
	// 	'id', id,
	// 	'name', name,
	// 	'types', types,
	// )

	return (
		<Container>
			<Typography variant="h3" component="h1" fontWeight="medium">
				<Typography component="span" fontWeight="medium" sx={{ mr: 0.5, opacity: 0.7 }}>
					<Typography component="span" fontSize={12} fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.25 }}>
						No.
					</Typography>
					{formatDexId(id, 1010)}
				</Typography>
				{name}
			</Typography>
			<Typography variant="subtitle1" component="p" fontWeight="regular" fontStyle="italic">{genera}</Typography>
			<Box>
				<Chip
					variant="type"
					type={types[0].type.name}
					icon={<TypeIcon type={types[0].type.name} />}
					label={types[0].type.name}
				/>
				{types[1] ? (
					<Chip
						variant="type"
						type={types[1].type.name}
						icon={<TypeIcon type={types[1].type.name} />}
						label={types[1].type.name}
						sx={{ ml: 1.5, }}
					/>
				) : null}
			</Box>
		</Container>
	)
}

export default Header