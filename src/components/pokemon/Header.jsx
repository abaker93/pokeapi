import { Box, Chip, Container, Link, Typography } from "@mui/material"
import { gradient } from "../../utilities/gradient"
import { filterByLang, formatDexId, getColorFromType } from "../../utilities/utilities"
import TypeIcon from "../../assets/TypeIcon"
import { Wave1, Wave2, Wave3, Wave4 } from "../../assets/Waves"


const Header = props => {
	const { lang, pokemon, prev, next, types } = props.state

	const japaneseName = filterByLang('name', pokemon.names, 'ja')
	const calcJapaneseSize = 75 / japaneseName.length

	const prevNextStyles = {
		position:	'absolute',
		bottom:		'-60px',
		height:		'120px',
		zIndex:		1,
		filter:		'grayscale(1) contrast(0) brightness(0) opacity(0.12)',
		'&:hover': {
			filter:		'none',
			transition: 'ease-in-out 0.2s',
		},
	}

	const waveStyles = o => {
		return {
			position:	'absolute',
			bottom:		'-1px',
			opacity:	o,
		}
	}

	return (
		<Box component="header" sx={{ mb: 5, overflow: 'hidden' }}>
			<Box sx={{
				position:				'relative',
				display:				'flex',
				alignItems:			'center',
				justifyContent:	'center',
				background:			`linear-gradient(45deg, ${gradient[types[0]][types[1]]})`,
				height:					'clamp(350px, 30vh, 400px)',
			}}>
				<Typography
					variant="japanese"
					component="span"
					sx={{
						position:		'absolute',
						textAlign:	'center',
						fontSize:		`${calcJapaneseSize}vw`,
						pb:					'20%',
						color:			getColorFromType(types[0])[500],
						opacity:		0.6,
						mixBlendMode: 'multiply',
					}}
				>
					{filterByLang('name', pokemon.names, 'ja')}
				</Typography>
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={filterByLang('name', pokemon.names, lang)}
					style={{ height: '100%', zIndex: 1, marginTop: '50px' }}
				/>
				<Box sx={[prevNextStyles, { left: '-15vw', '&:hover': { left: 0 } }]}>
					{prev ? <Nav pokemon={prev} /> : null}
				</Box>
				<Box sx={[prevNextStyles, { right: '-15vw', '&:hover': { right: 0 } }]}>
					{next ? <Nav pokemon={next} /> : null}
				</Box>
				<Box sx={{
					position:	'absolute',
					height:		'100%',
					width:		'100%',
				}}>
					<Wave1 style={waveStyles(1)} color="#F9F9F9" />
					<Wave2 style={waveStyles(0.7)} color="#F9F9F9" />
					<Wave3 style={waveStyles(0.7)} color="#F9F9F9" />
					<Wave4 style={waveStyles(0.7)} color="#F9F9F9" />
				</Box>
			</Box>

			<Title
				genera={filterByLang('genus', pokemon.genera, lang)}
				id={pokemon.id}
				name={filterByLang('name', pokemon.names, lang)}
				types={pokemon.types}
			/>
		</Box>
	)
}

const Nav = props => {
	const { pokemon } = props

	return (
		<Link href={`./${formatDexId(pokemon.id)}`} sx={{ display: 'block', height: '100%' }}>
			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				alt={pokemon.name}
				style={{ height: '30vw', }}
			/>
		</Link>
	)
}

const Title = props => {
	const { genera, id, name, types } = props

	return (
		<Container sx={{ mt: 5, textAlign: 'center' }}>
			<Typography variant="h1" fontWeight="medium">
				<Typography component="span" fontWeight="medium" sx={{ mr: 0.5, opacity: 0.7 }}>
					<Typography component="span" fontSize={12} fontWeight="medium" textTransform="uppercase" sx={{ mr: 0.25 }}>
						No.
					</Typography>
					{formatDexId(id)}
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
				{types[1] && (
					<Chip
						variant="type"
						type={types[1].type.name}
						icon={<TypeIcon type={types[1].type.name} />}
						label={types[1].type.name}
						sx={{ ml: 1.5, }}
					/>
				)}
			</Box>
		</Container>
	)
}

export default Header