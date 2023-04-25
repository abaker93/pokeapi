import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Notes from "./routes/Notes";
import PokedexList from "./routes/PokedexList";
import PokedexTracker from "./routes/PokedexTracker";
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
        path: 'pokedex/',
        children: [
          { index: true, element: <PokedexList /> },
          {
            path: ':dex',
            element: <PokedexList />
          },
        ],
      },
      {
        path: 'pokemon/:pokeId',
        element: <Pokemon />,
      },
      {
        path: 'tracker/',
        children: [
          { index: true, element: <PokedexTracker /> },
          {
            path: ':game',
            element: <PokedexTracker />
          },
        ],
      },
      {
        path: 'notes',
        element: <Notes />,
      },
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