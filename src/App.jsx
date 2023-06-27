import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ColorModeProvider } from "./utilities/context"
import { CssBaseline } from '@mui/material'

import Error from './routes/Error'
import Home from './routes/Home'
import PokedexContainer from './routes/PokedexContainer'
import PokemonContainer from './routes/PokemonContainer'
import Root from './routes/Root'



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
				{ path: 'pokemon/:id', element: <PokemonContainer dex="national" /> },
			]
		},
		{ path: 'pokemon/:id/', element: <PokemonContainer dex="national" /> },
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