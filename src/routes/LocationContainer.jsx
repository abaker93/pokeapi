import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Pokedex from 'pokedex-promise-v2'

import { Box, Breadcrumbs, Container, Link, Typography, alpha } from '@mui/material'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

import { filterByLang } from '../utilities/utilities'
import { gray, text } from '../utilities/colors'

const P = new Pokedex()


const LocationContainer = () => {
	const location = useParams().name
	const lang = useOutletContext()

	const [loading, setLoading] = useState(true)
	const [locationData, setLocationData] = useState()

	const getLocationData = location => {
		P.getLocationAreaByName(location)
			.then(area => {

				P.getLocationByName(area.location.name)
					.then (loc => {
						// console.log(area, loc)

						setLocationData({
							id:				loc.id,
							name:			loc.name,
							names:		loc.names,
							pokemon:	area.pokemon_encounters
						})
					})

				
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		if (!locationData) {
			setLoading(true)
			getLocationData(location)
		} else { setLoading(false) }
	}, [location, locationData])

	console.log(locationData)


	if (loading) {
		// TODO: add loading skeleton
		return (
			<Typography>Loading...</Typography>
		)
	}


	return (
		<Header name={filterByLang('name', locationData.names, lang)} />
	)
}

const Header = props => {
	const { name } = props

	return (
		<Box component="header" mb={5}>
			<Box p={1} mb={5} sx={{
				background: alpha(gray[100], 0.3),
				borderBottom: "2px solid",
				borderColor: "primary.main",
			}}>
				<Container>
					<Breadcrumbs color={text[300]} aria-label="breadcrumb">
						<Link
							underline="hover"
							color="inherit"
							href="/"
						>
							Drifloon Database
						</Link>
						<Link
							underline="hover"
							color="inherit"
							href="/location/"
						>
							Locations
						</Link>
						<Typography
							fontWeight="medium"
							color="primary.main"
						>
							{name}
						</Typography>
					</Breadcrumbs>
				</Container>
			</Box>
			
			<Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Link underline="none" href="/location/"><Typography variant="h1" component="p" color={text[200]} fontSize="1.25rem">Locations</Typography></Link>
				<ArrowRightSharpIcon sx={{ fill: text[200] }} />
				<Typography variant="h1" textAlign="center" color="primary.main">{name}</Typography>
			</Container>
		</Box>
	)
}

export default LocationContainer