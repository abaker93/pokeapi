import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ColorModeProvider } from "./utilities/context"
import { CssBaseline } from '@mui/material'

import AbilityContainer from "./routes/AbilityContainer"
import EggGroupContainer from "./routes/EggGroupContainer"
import Error from './routes/Error'
import Home from './routes/Home'
import LocationContainer from "./routes/LocationContainer"
import MoveContainer from "./routes/MoveContainer"
import PokedexContainer from './routes/PokedexContainer'
import PokemonContainer from './routes/PokemonContainer'
import Root from './routes/Root'
import Styles from "./routes/Styles"
import ItemContainer from "./routes/ItemContainer"


const router = createBrowserRouter([{
	path: '/',
	element: <Root />,
	errorElement: <Error />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'pokedex/', element: <PokedexContainer dex="national" /> },
		{
			path: 'national/',
			children: [
				{ index: true, element: <PokedexContainer dex="national" /> },
				{ path: 'pokedex/', element: <PokedexContainer dex="national" /> },
				{ path: 'pokemon/:id/', 
					children: [
						{ index: true, element: <PokemonContainer dex="national" /> },
						{ path: ':variety/', element: <PokemonContainer dex="national" /> },
					],
				},
			],
		},
		{ path: 'pokemon/:id/', 
			children: [
				{ index: true, element: <PokemonContainer dex="national" /> },
				{ path: ':variety/', element: <PokemonContainer dex="national" /> },
			],
		},
		{ path: 'ability/:name/', element: <AbilityContainer />, },
		{ path: 'egg-group/',
			children: [
				{ path: 'field/', element: <EggGroupContainer group="ground" /> },
				{ path: ':name/', element: <EggGroupContainer /> },
			],
		},
		{ path: 'item/:name/', element: <ItemContainer />, },
		{ path: 'location/:name/', element: <LocationContainer />, },
		{ path: 'move/:name/', element: <MoveContainer />, },

		{ path: 'styles/', element: <Styles /> },
	],
}])



const App = () => {
	return (
		<ColorModeProvider>
			<CssBaseline />
			<RouterProvider router={router} />
		</ColorModeProvider>
	)
}

export default App