import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import PokedexList from "./routes/PokedexList";
import Pokemon from "./routes/Pokemon";

import { ColorModeProvider } from "./utilities/context";

const router = createBrowserRouter([
	{
		path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'pokedex/:dex',
        element: <PokedexList />
      },
      {
        path: 'pokemon/:pokeId',
        element: <Pokemon />,
      }
    ]
	}
])

export default function App() {
	return (
		<ColorModeProvider>
			<CssBaseline />
			<RouterProvider router={router} />
		</ColorModeProvider>
	)
}