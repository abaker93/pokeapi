import { createTheme } from "@mui/material/styles";

const pokeTheme = createTheme({
	palette: {
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
	},
	typography: {
		fontFamily: 'source-sans-3, "Source Sans Pro", Helvetica, Arial, sans-serif',
		fontSize: 16,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		h1: {
			fontSize: '2.5rem',
			fontWeight: 700,
			lineHeight: 1.3,
		},
		h2: {
			fontSize: '2.3rem',
			fontWeight: 700,
			lineHeight: 1.3,
		},
		h3: {
			fontSize: '1.5rem',
			fontWeight: 700,
			lineHeight: 1.3,
		},
		h4: {
			fontSize: '1.3rem',
			fontWeight: 700,
			lineHeight: 1.3,
		},
		h5: {
			fontSize: '1rem',
			fontWeight: 700,
			lineHeight: 1.3,
		},
		h6: {
			fontSize: '0.9rem',
			fontWeight: 700,
		},
		japanese: {
			fontFamily: 'source-han-sans-japanese, "Source Sans Pro", Helvetica, Arial, sans-serif',
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
					backdropFilter: "blur(8px)",
				},
			},
		},
	},
	props: {
		MuiTooltip: {
			arrow: true,
		},
	},
})

const lightTheme = createTheme(pokeTheme, {
	palette: {
		mode: 'light',
		text: {
			primary: '#263238',
			secondary: 'rgba(38,50,56,0.9)',
			disabled: 'rgba(38,50,56,0.5)',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255,255,255,0.8)',
					color: '#263238',
				},
			},
		},
	},
});

const darkTheme = createTheme(pokeTheme, {
	palette: {
		mode: 'dark',
		text: {
			primary: '#FFFFFF',
			secondary: 'rgba(255, 255, 255, 0.75)',
			disabled: 'rgba(255, 255, 255, 0.5)',
		},
		background: {
			default: '#263238',
			paper: '#263238',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(38, 50, 56, 0.8)',
					color: '#FFFFFF',
				},
			},
		},
	},
});

export { lightTheme, darkTheme };