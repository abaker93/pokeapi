import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'
import { encounterMethods, generationsArray } from '../utilities/arrays';

const P = new Pokedex()

// TODO: Combine Kanto Victory Road 1 & 2... why are these separate?


const LocationContainer = () => {
	const location = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [locationData, setLocationData] = useState()
	const [areasData, setAreasData] = useState([])

	const getLocationData = location => {
		P.getLocationByName(location)
			.then(loc => {
				P.getRegionByName(loc.region.name)
					.then(region => {
						setLocationData({
							areas:				loc.areas,
							game_indices:	loc.game_indices,
							id:						loc.id,
							name:					loc.name,
							names:				loc.names,
							region:				region,
						})
					})
					.catch(err => console.log(err))

				loc.areas.map(m => {
					P.getLocationAreaByName(m.name)
						.then(area => setAreasData(prev => [...prev, area]))
						.catch(err => console.log(err))
				})
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		if (!locationData) {
			setLoading(true)
			getLocationData(location)
		}
	}, [location, locationData, areasData])

	useEffect(() => {
		if (locationData && areasData.length === locationData.areas.length) {
			setLoading(false)
		}
	}, [locationData, areasData])

	// console.log(locationData, areas)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}


	return (
		<>
			<Header name={filterByLang('name', locationData.names, lang)} region={filterByLang('name', locationData.region.names, lang)} />

			<Container>
				{generationsArray.map(gen => (
					<Generation key={gen.id} areasData={areasData} gen={gen}>
						{areasData.map(area => (
							<Area key={area.id} area={area} areaName={filterByLang('name', area.names, lang)} gen={gen}>
								{encounterMethods.map(method => (
									<Method key={method.id} area={area} gen={gen} method={method} methodName={filterByLang('name', method.names, lang)}>
										<Table name={filterByLang('name', locationData.names, lang)} area={filterByLang('name', area.names, lang)}>

										</Table>
									</Method>
								))}
							</Area>
						))}
					</Generation>
				))}

				<Translations data={locationData} lang={lang} />
			</Container>
			
		</>
	)
}

const Header = props => {
	const { name, region } = props

	return (
		<Box component="header" mb={5}>
			<Box p={1} mb={5} sx={{
				background: alpha(gray[100], 0.4),
				borderBottom: "2px solid",
				borderColor: "primary.main",
			}}>
				<Container>
					<Breadcrumbs color={text[300]} aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">Drifloon Database</Link>
						<Link underline="hover" color="inherit" href="/location/">Locations</Link>
						<Typography fontWeight="medium" color="primary.main">{name}</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link variant="h3" href="/location/" underline="hover" color={text[200]}>Locations</Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">
					{name}
					<Typography color={text[200]} variant="h3" component="span" sx={{ ml: 1 }}>({region})</Typography>
				</Typography>
			</Container>
		</Box>
	)
}

const Generation = props => {
	const { areasData, children, gen } = props
	const [areas, setAreas] = useState([])

	const renderChildren = () => {
		return React.Children.map(children, child => {
			return React.cloneElement(child, { areas: areas })
		})
	}

	const filterAreas = () => {
		let arr = []
		gen.location_groups.map(group => {
			// gen i
			group.games.map(game => {
				// red
				areasData.map(area => {
					// safari zone middle
					area.pokemon_encounters.map(poke => {
						// nidoran male
						const check = poke.version_details.some(version => version.version.name === game.name)
						check && arr.push(area)
					})
				})
			})
		})

		arr = arr.filter((v,i,a) => a.findIndex(t => (t.id === v.id)) === i)
		setAreas(arr)
	}

	useEffect(() => {
		filterAreas()
	}, [])

	if (areas.length) {
		return (
			<>
				<Typography variant="h2" sx={{ mb: 2 }}>{gen.label}</Typography>
				{renderChildren()}
			</>
		)
	}
}

const Area = props => {
	const { area, areaName, children, gen } = props
	const [encounters, setEncounters] = useState(false)

	console.log(props)

	const filterEncounters = () => {
		let en = false

		area.pokemon_encounters.map(a => {
			a.version_details.map(b => {
				gen.location_groups.map(c => {
					c.games.map(d => {
						if (d.name === b.version.name) {
							en = true
						}
					})
				})
			})
		})

		setEncounters(en)
	}

	useEffect(() => {
		filterEncounters()
	}, [])

	if (encounters) {
		return (
			<>
				<Typography variant="h3">{areaName}</Typography>
				<div>{children}</div>
			</>
		)
	}
}

const Method = props => {
	const { area, children, gen, method, methodName } = props
	const [encounters, setEncounters] = useState(false)

	const filterEncounters = () => {
		let en = false

		area.pokemon_encounters.map(a => {
			a.version_details.map(b => {
				gen.location_groups.map(c => {
					c.games.map(d => {
						if (d.name === b.version.name) {
							b.encounter_details.map(e => {
								if (e.method.name === method.name) {
									en = true
								}
							})
						}
					})
				})
			})
		})

		setEncounters(en)
	}

	useEffect(() => {
		filterEncounters()
	}, [])

	if (encounters) {
		return (
			<>
				<Typography component="h4" variant="h6">{methodName}</Typography>
				<div>{children}</div>
			</>
		)
	}
}

const Table = props => {
	const { children, name, area } = props

	return (
		<Box mb={5}>
			<MuiTable aria-label={`pokemon at ${name}`}>
				<TableHead>
					<TableRow sx={{
						'& td, & th': {
							padding: 1,
							backgroundColor: alpha(gray[100], 0.4),
							borderBottom: `1px solid ${gray[300]}`
						}
					}}>
						<TableCell>Name</TableCell>
						<TableCell>Games</TableCell>
						<TableCell>Rarity</TableCell>
						<TableCell>Levels</TableCell>
						<TableCell>Details</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{children}
				</TableBody>
			</MuiTable>
		</Box>
	)
}

const Translations = props => {
	const { data, lang } = props
	let rows = []

	const createData = (language, name) => { return { language, name } }

	const getLanguageName = language => {
		let [name, setName] = useState()

		P.getLanguageByName(language)
			.then(data => { setName(filterByLang('name', data.names, lang)) })

		return name
	}

	data.names.map(m => {
		rows.push(createData(getLanguageName(m.language.name), m.name))
	})

	return (
		<Box mb={5}>
			<Typography variant="h2" sx={{ mb: 2 }}>Translations</Typography>
			
			<MuiTable aria-label={`translations of ${data.name}`}>
				<TableBody>
					{rows.filter(f => f.language && f.name).sort((a,b) => a.language.localeCompare(b.language)).map(row => (
						<TableRow key={row.language} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell size="small" width={80} sx={{ pl: 0, pr: 1, borderBottomColor: 'divider', textAlign: 'right', }}>
								<Typography variant="body2" fontWeight="medium">{row.language}</Typography>
							</TableCell>
							<TableCell size="small" sx={{ pl: 1, pr: 0, borderBottomColor: 'divider' }}>
								<Typography>{row.name}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
		</Box>
	)
}

export default LocationContainer