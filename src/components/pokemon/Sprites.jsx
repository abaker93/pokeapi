import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, alpha } from "@mui/material"
import { filterByLang } from "../../utilities/utilities"
import { gray } from "../../utilities/colors"

const Sprites = props => {
	const { lang, pokemon } = props.state
	const pokemonName = filterByLang('name', pokemon.names, lang)

	const sprites = pokemon.sprites
	const versionSprites = pokemon.sprites.versions

	const genArr = [
		{
			name: 'generation-i',
			label: 'Gen I',
			games: [ 'red-blue', 'yellow' ]
		},
		{
			name: 'generation-ii',
			label: 'Gen II',
			games: [ 'gold', 'silver', 'crystal' ]
		},
		{
			name: 'generation-iii',
			label: 'Gen III',
			games: [ 'ruby-sapphire', 'emerald', 'firered-leafgreen' ]
		},
		{
			name: 'generation-iv',
			label: 'Gen IV',
			games: [ 'diamond-pearl', 'platinum', 'heartgold-soulsilver' ]
		},
		{
			name: 'generation-v',
			label: 'Gen V',
			games: [ 'black-white', 'black-2-white-2' ]
		},
		{
			name: 'generation-vi',
			label: 'Gen VI',
			games: [ 'x-y', 'omegaruby-alphasapphire' ]
		},
		{
			name: 'generation-vii',
			label: 'Gen VII',
			games: [ 'icons', 'ultra-sun-ultra-moon' ]
		},
		{
			name: 'generation-viii',
			label: 'Gen VIII',
			games: [ 'icons' ]
		},
		// {
		// 	name: 'generation-ix',
		// 	label: 'Gen IX',
		// 	games: [ 'icons' ]
		// },
	]

	const headerStyle = {
		padding: 1,
		textAlign: 'center',
		backgroundColor: alpha(gray[100], 0.4),
	}

	const spriteStyle = {
		'td': { textAlign: 'center' },
		'img': { height: 64, width: 64, objectFit: 'contain' },
	}

	return (
		<Box sx={{ mb: 5 }}>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h2">{pokemonName} Sprites</Typography>
			</Box>

			<TableContainer>
				<Table stickyHeader aria-label={`${pokemonName} Sprites`}>
					<TableHead>
						<TableRow>
							<TableCell sx={headerStyle} />
							<TableCell sx={headerStyle}>Normal</TableCell>
							<TableCell sx={headerStyle}>Shiny</TableCell>
						</TableRow>

					</TableHead>

					<TableBody sx={spriteStyle}>
						<SpriteRow data={sprites} pokemonName={pokemonName} title="Default" />
						{genArr.map(gen => (
							versionSprites[gen.name][gen.games[0]] ? (
								<SpriteRow data={versionSprites[gen.name][gen.games[0]]} pokemonName={pokemonName} title={gen.label} />
							) : versionSprites[gen.name][gen.games[1]] ? (
								<SpriteRow data={versionSprites[gen.name][gen.games[1]]} pokemonName={pokemonName} title={gen.label} />
							) : versionSprites[gen.name][gen.games[2]] ? (
								<SpriteRow data={versionSprites[gen.name][gen.games[2]]} pokemonName={pokemonName} title={gen.label} />
							) : (
								null
							)
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

const SpriteRow = props => {
	const { data, title, pokemonName } = props

	const headerStyle = {
		padding: 1,
		textAlign: 'right',
		fontWeight: 'medium',
		backgroundColor: alpha(gray[100], 0.4),
	}

	return (
		<TableRow>
			<TableCell component="th" scope="row" sx={headerStyle}>{title}</TableCell>
			<TableCell>
				{data.front_default ? (
					<img src={data.front_default} alt={`${pokemonName} front normal sprite`} />
				) : <>&mdash;</>}
			</TableCell>
			<TableCell>
				{data.front_shiny ? (
					<img src={data.front_shiny} alt={`${pokemonName} front shiny sprite`} />
				) : <>&mdash;</>}
			</TableCell>
		</TableRow>
	)
}

export default Sprites