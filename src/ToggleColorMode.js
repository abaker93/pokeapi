import { createContext, useContext, useMemo, useState } from "react";
import { Box, Button, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Pokedex from "./routes/Pokedex";
import Pokemon from "./routes/Pokemon";


const ColorModeContext = createContext({ toggleColorMode: () => {} });

const router = createBrowserRouter([
	{
		path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'pokedex/:dex',
        element: <Pokedex />
      },
      {
        path: 'pokemon/:pokeId',
        element: <Pokemon />
      }
    ]
	}
])

const App = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<Box sx={{paddingTop: "100px"}}>
			<CssBaseline />
			<Button onClick={colorMode.toggleColorMode}>{theme.palette.mode} mode</Button>
			<RouterProvider router={router} />
		</Box>
	)
};

export default function ToggleColorMode() {
	const [mode, setMode] = useState('light');
	const colorMode = useMemo(() => ({
		toggleColorMode: () => {
			setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
		},
	}), []);

	const theme = createTheme({
		palette: {
			mode,
			text: {
				primary: '#263238',
				secondary: 'rgba(38,50,56,0.9)',
				disabled: 'rgba(38,50,56,0.5)',
			},
			primary: {
				main: '#9754B1',
			},
			secondary: {
				main: '#89D6C9',
				contrastText: '#357C79',
			},
			warning: {
				main: '#D97D3C',
			},
			error: {
				main: '#CE406B',
			},
			info: {
				main: '#4C8FD6',
			},
			success: {
				main: '#4FA44A',
			},
			divider: '#E2E2E2',
		}
	});

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}