import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang, formatDexId, getColorFromGame, getIdFromURL, getNumByDex, siteTitle } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'

const P = new Pokedex()


const ItemContainer = () => {
	const item = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [itemData, setItemData] = useState()
	const [itemName, setItemName] = useState()

	const getItemData = ability => {
		P.getItemByName(ability)
			.then(data => {
				setItemData(data)
				return data
			})
			.catch(console.error)
	}

	useEffect(() => {
		if (!itemData) {
			setLoading(true)
			getItemData(item)
		} else {
			setItemName(filterByLang('name', itemData.names, lang))
			setLoading(false)
		}
	}, [item, itemData])

	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}

	return (
		<>
			<Header img={itemData.sprites.default} name={itemName} />

			<Container>
				<Data data={itemData} lang={lang} name={itemName} />
				<Effects data={itemData} lang={lang} name={itemName} />
				<Descriptions data={itemData} lang={lang} />
				<Translations data={itemData} lang={lang} />
			</Container>
		</>
	)	
}

const Header = props => {
	const { img, name } = props

	return (
		<Box component="header" mb={5}>
			<Box p={1} mb={5} sx={{
				background: alpha(gray[100], 0.3),
				borderBottom: "2px solid",
				borderColor: "primary.main",
			}}>
				<Container>
					<Breadcrumbs color={text[300]} aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">
							{siteTitle}
						</Link>
						<Link underline="hover" color="inherit" href="/item/">
							Items
						</Link>
						<Typography fontWeight="medium" color="primary.main">
							{name}
						</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link underline="none" href="/item/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Items</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{name}</Typography>
				<img src={img} alt={name} style={{ marginLeft: 5 }} />
			</Container>
		</Box>
	)
}

const Effects = props => {
	const { data, lang, name } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>{name} Effects</Typography>
			{data.effect_entries.filter(f => f.language.name === lang).map((m,i) => (
				<Typography key={i}>{m.effect}</Typography>
			))}
			{data.baby_trigger_for && getBabyTrigger(getIdFromURL(data.baby_trigger_for.url), filterByLang('name', data.names, lang), lang)}
		</Box>
	)
}

const Data = props => {
	const { data, lang, name } = props

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Data on {name}</Typography>
			<Table>
				<TableBody>
					{data.category && (
						<TableRow>
							<TableCell>Category</TableCell>
							<TableCell>{data.category.name}</TableCell>
						</TableRow>
					)}
					{data.cost > 0 ? (
						<TableRow>
							<TableCell>Cost in Pokémarts</TableCell>
							<TableCell>{data.cost}</TableCell>
						</TableRow>
					) : (
						<TableRow>
							<TableCell>Cost in Pokémarts</TableCell>
							<TableCell>Not available in Pokémarts</TableCell>
						</TableRow>
					)}
					{data.fling_effect || data.fling_power && (
						<TableRow>
							<TableCell>Fling Effect</TableCell>
							<TableCell>
								<Typography variant="body2">{data.fling_effect ? `${data.fling_effect.name} effect` : `Flinging ${name} has no effect`}</Typography>
								<Typography variant="body2">{data.fling_power ? `${data.fling_power} fling power` : `Flinging ${name} has no power`}</Typography>
							</TableCell>
						</TableRow>
					)}
					{data.held_by_pokemon.length > 0 && (
						<TableRow>
							<TableCell>Held by Pokémon</TableCell>
							<TableCell>
								{data.held_by_pokemon.map((m,i) => (
									<Typography key={i} variant="body2">{m.pokemon.name}</Typography>
								))}
							</TableCell>
						</TableRow>
					)}
					{data.machines.length > 0 && (
						<TableRow>
							<TableCell>Machines</TableCell>
							<TableCell>
								{data.machines.map((m,i) => (
									<Typography key={i} variant="body2">{m.machine.url}</Typography>
								))}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</Box>
	)
}

const Descriptions = props => {
	const { data, lang } = props
	const flavor_text = data.flavor_text_entries.filter(f => f.language.name === lang)

	const version_groups = [
		{
			name: 'gen-i',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('red')}>Red</Typography> / <Typography variant="span" color={getColorFromGame('blue')}>Blue</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('yellow')}>Yellow</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'red-blue')[0] && flavor_text.filter(f => f.version_group.name === 'red-blue')[0].text }
		},
		{
			name: 'gen-ii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('gold')}>Gold</Typography> / <Typography variant="span" color={getColorFromGame('silver')}>Silver</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('crystal')}>Crystal</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'gold-silver')[0] && flavor_text.filter(f => f.version_group.name === 'gold-silver')[0].text }
		},
		{
			name: 'gen-iii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('ruby')}>Ruby</Typography> / <Typography variant="span" color={getColorFromGame('sapphire')}>Sapphire</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('emerald')}>Emerald</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('firered')}>FireRed</Typography> / <Typography variant="span" color={getColorFromGame('leafgreen')}>LeafGreen</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'ruby-sapphire')[0] && flavor_text.filter(f => f.version_group.name === 'ruby-sapphire')[0].text }
		},
		{
			name: 'gen-iv',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('diamond')}>Diamond</Typography> / <Typography variant="span" color={getColorFromGame('pearl')}>Pearl</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium" color={getColorFromGame('platinum')}>Platinum</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('heartgold')}>HeartGold</Typography> / <Typography variant="span" color={getColorFromGame('soulsilver')}>SoulSilver</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'diamond-pearl')[0] && flavor_text.filter(f => f.version_group.name === 'diamond-pearl')[0].text }
		},
		{
			name: 'gen-v',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('black')}>Black</Typography> / <Typography variant="span" color={getColorFromGame('white')}>White</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('black-2')}>Black 2</Typography> / <Typography variant="span" color={getColorFromGame('white-2')}>White 2</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'black-white')[0] && flavor_text.filter(f => f.version_group.name === 'black-white')[0].text }
		},
		{
			name: 'gen-vi',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('x')}>X</Typography> / <Typography variant="span" color={getColorFromGame('y')}>Y</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('omega-ruby')}>Omega Ruby</Typography> / <Typography variant="span" color={getColorFromGame('alpha-sapphire')}>Alpha Sapphire</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'x-y')[0] && flavor_text.filter(f => f.version_group.name === 'x-y')[0].text }
		},
		{
			name: 'gen-vii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('sun')}>Sun</Typography> / <Typography variant="span" color={getColorFromGame('moon')}>Moon</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('ultra-sun')}>Ultra Sun</Typography> / <Typography variant="span" color={getColorFromGame('ultra-moon')}>Ultra Moon</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'sun-moon')[0] && flavor_text.filter(f => f.version_group.name === 'sun-moon')[0].text }
		},
		{
			name: 'gen-viii',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('sword')}>Sword</Typography> / <Typography variant="span" color={getColorFromGame('shield')}>Shield</Typography>
					</Typography>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('brilliant-diamond')}>Brilliant Diamond</Typography> / <Typography variant="span" color={getColorFromGame('shining-pearl')}>Shining Pearl</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'sword-shield')[0] && flavor_text.filter(f => f.version_group.name === 'sword-shield')[0].text }
		},
		{
			name: 'gen-ix',
			label: (
				<>
					<Typography variant="body2" fontWeight="medium">
						<Typography variant="span" color={getColorFromGame('scarlet')}>Scarlet</Typography> / <Typography variant="span" color={getColorFromGame('violet')}>Violet</Typography>
					</Typography>
				</>
			),
			get flavor_text() { return flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0] && flavor_text.filter(f => f.version_group.name === 'scarlet-violet')[0].text }
		},
	]

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Game descriptions</Typography>
			<Table aria-label="flavor text by game">
				<TableBody>
					{version_groups.map(m => (
						m.flavor_text && (
							<TableRow key={m.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" size="small" sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right', }}>
									{m.label}
								</TableCell>
								<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
									<Typography>{m.flavor_text}</Typography>
								</TableCell>
							</TableRow>
						)
					))}
				</TableBody>
			</Table>
		</Box>
	)
}

const Translations = props => {
	const { data, lang } = props
	let rows = []

	const createData = (lang, name) => { return { lang, name } }

	const getLanguageName = lang => {
		const [name, setName] = useState()

		P.getLanguageByName(lang)
			.then(data => setName(filterByLang('name', data.names, lang)))

		return name
	}

	data.names.map(m => rows.push(createData(getLanguageName(m.language.name), m.name)))

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Translations</Typography>

			<Table aria-label={`translations of ${filterByLang('name', data.names, lang)}`}>
				<TableBody>
					{rows.filter(f => f.lang && f.name).sort((a,b) => a.lang.localeCompare(b.lang)).map(row => (
						<TableRow key={row.lang} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell size="small" sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right' }}>
								<Typography variant="body2" fontWeight="medium">{row.lang}</Typography>
							</TableCell>
							<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
								<Typography variant="body2">{row.name}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	)
}

const getBabyTrigger = (evoChain, itemName, lang) => {
	const [baby, setBaby] = useState()
	const [parents, setParents] = useState([])
	
	useEffect(() => {
		setBaby()
		setParents([])

		P.getEvolutionChainById(evoChain)
			.then(evo => {
				P.getPokemonSpeciesByName(evo.chain.species.name)
					.then(baby => setBaby(baby))
				
				evo.chain.evolves_to.map(m1 => {
					P.getPokemonSpeciesByName(m1.species.name)
						.then(parent => setParents(prev => [...prev, parent]))

					m1.evolves_to.map(m2 => {
						P.getPokemonSpeciesByName(m2.species.name)
							.then(parent => setParents(prev => [...prev, parent]))
					})
				})
			})
	}, [])


	if (baby && parents.length) {
		return (
			<Typography mt={2}>
				{parents.sort((a,b) => a.order-b.order).map((parent,i) => (
					<React.Fragment key={i}>
						<Link href={`/pokemon/${formatDexId(getNumByDex(parent.pokedex_numbers, 'national'), 1000)}`} underline="hover" fontWeight="medium">{filterByLang('name', parent.names, lang)}</Link>
						{i < parents.length-1 ? <>, </> : <> </>}
					</React.Fragment>
				))}
				will leave <Link href={`/pokemon/${formatDexId(getNumByDex(baby.pokedex_numbers, 'national'), 1000)}`} underline="hover" fontWeight="medium">{filterByLang('name', baby.names, lang)}</Link> eggs at the Pokémon Day Care when holding <Typography component="span" fontWeight="medium">{itemName}</Typography>.
			</Typography>
		)
	}
}

export default ItemContainer