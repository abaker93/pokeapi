import { CssBaseline } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Error from './routes/Error'
import Home from './routes/Home'
import Notes from './routes/Notes'
import Pokedex from './routes/Pokedex'
import Root from './routes/Root'
import Pokemon from './routes/Pokemon'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> }
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