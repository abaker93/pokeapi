import { CssBaseline } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Error from './routes/Error'
import Home from './routes/Home'
import Notes from './routes/Notes'
import PokedexContainer from './routes/PokedexContainer'
import Root from './routes/Root'
import Pokemon from './routes/Pokemon'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'pokedex/', element: <PokedexContainer /> },
			{
				path: 'national/',
				children: [
					{ index: true, element: <PokedexContainer /> },
					{ path: 'pokedex/', element: <PokedexContainer /> }
				]
			},
		]
	}
])

const App = () => {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	)
}

export default App