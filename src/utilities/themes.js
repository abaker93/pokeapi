import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#9754B1',
		},
		secondary: {
			main: '#89D6C9',
			contrastText: '#357C79',
		},
		text: {
			primary: '#263238',
			secondary: 'rgba(38,50,56,0.9)',
			disabled: 'rgba(38,50,56,0.5)',
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
			fontWeight: 700,
			fontSize: '1.5rem',
			lineHeight: 1.3,
		},
		h4: {
			fontWeight: 700,
			fontSize: '1.3rem',
			lineHeight: 1.3,
		},
		h5: {
			fontWeight: 700,
			fontSize: '1rem',
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
					backgroundColor: 'rgba(255,255,255,0.8)',
					backgroundImage: 'none',
					color: '#263238',
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
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#263238',
			paper: '#263238',
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
			fontWeight: 700,
			fontSize: '1.5rem',
			lineHeight: 1.3,
		},
		h4: {
			fontWeight: 700,
			fontSize: '1.3rem',
			lineHeight: 1.3,
		},
		h5: {
			fontWeight: 700,
			fontSize: '1rem',
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
					backgroundColor: 'rgba(38, 50, 56, 0.8)',
					backgroundImage: 'none',
					color: '#FFFFFF',
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
});

export { lightTheme, darkTheme };