import { Box, Tab, Tabs } from '@mui/material'
import Pokedex from 'pokedex-promise-v2'
import { useEffect } from 'react'
import { useState } from 'react'
import { filterByLang } from '../../utilities/utilities'

const P = new Pokedex()


const Varieties = props => {
	const { lang, pokemon, species } = props
	const [varieties, setVarieties] = useState([])
	const [value, setValue] = useState(0)

	const getPokemonVarieties = varieties => {
		const urls = varieties.map(m => m.pokemon.url)

		P.getResource(urls)
			.then(data1 => {
				data1.forEach(poke => {
					poke.forms.forEach(form => {
						P.getResource(form.url)
							.then(formData => {
								setVarieties(arr => [...arr, {
									form_name: formData.form_name,
									names: formData.names.length < 1 ? species.names : formData.names,
								}])
							})
					})
				})
			})
	}

	useEffect(() =>{
		getPokemonVarieties(species.varieties)
	}, [species])

	return (
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={value} variant="scrollable" aria-label="pokemon variation navigation">
				{varieties.map(v => (
					<Tab label={filterByLang('name', v.names, lang)} href={v.form_name ? v.form_name : './'} onChange={(e, newValue) => setValue(newValue)} />
				))}
			</Tabs>
		</Box>
	)
}

export default Varieties