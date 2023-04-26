import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let pokeTheme = createTheme({
	palette: {
		primary: {
			main:	'#9754B1',
		},
		secondary: {
			main:					'#89D6C9',
			contrastText:	'#357C79',
		},
		warning: {
			main:	'#D97D3C',
		},
		error: {
			main:	'#CE406B',
		},
		info: {
			main:	'#4C8FD6',
		},
		success: {
			main:	'#4FA44A',
		},
		divider:		'#E2E2E2',
		'gray-50':	'#F3F3F3',
		'gray-100':	'#E2E2E2',
		'gray-200':	'#D1D1D1',
		'gray-300':	'#C0C0C0',
		'gray-400':	'#AFAFAF',
		'gray-500':	'#9E9E9E',
		'gray-600':	'#888888',
		'gray-700':	'#737373',
		'gray-800':	'#5D5D5D',
		'gray-900':	'#474747',
	},
	typography: {
		fontFamily:	'source-sans-3, "Source Sans Pro", Helvetica, Arial, sans-serif',
		fontSize: 	16,
		fontWeightLight:		300,
		fontWeightRegular:	350,
		fontWeightMedium: 	500,
		fontWeightBold:			700,
		h1: {
			fontSize: 	'calc(1.375rem + 1.5vw)',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: 	'calc(1.325rem + 0.9vw)',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: 	'calc(1.3rem + 0.6vw)',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h4: {
			fontSize: 	'calc(1.275rem + 0.3vw)',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h5: {
			fontSize: 	'1.25rem',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h6: {
			fontSize: 	'1rem',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		body1: {
			fontSize:		'1rem',
			fontWeight:	350,
			lineHeight: 1.2,
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
		MuiCard: {
			variants: [
				{
					props: { variant: 'pokedex' },
					style: {
						
					},
				},
			],
		},
	},

	// 	MuiCard: {
	// 		variants: [
	// 			{
	// 				props: { variant: 'type' },
	// 				style: {
	// 					color: '#FFFFFF',
	// 				},
	// 			},
	// 			{
	// 				props: { type: 'fighting' },
	// 				style: { backgroundColor: '#CE406B' },
	// 			},
	// 			{
	// 				props: { type: 'psychic' },
	// 				style: { backgroundColor: '#F97178' },
	// 			},
	// 			{
	// 				props: { type: 'fire' },
	// 				style: { backgroundColor: '#FE9D52' },
	// 			},
	// 			{
	// 				props: { type: 'ground' },
	// 				style: { backgroundColor: '#DB7948' },
	// 			},
	// 			{
	// 				props: { type: 'electric' },
	// 				style: { backgroundColor: '#F3D139' },
	// 			},
	// 			{
	// 				props: { type: 'bug' },
	// 				style: { backgroundColor: '#90BF2B' },
	// 			},
	// 			{
	// 				props: { type: 'grass' },
	// 				style: { backgroundColor: '#67BB5D' },
	// 			},
	// 			{
	// 				props: { type: 'ice' },
	// 				style: { backgroundColor: '#73CEBF' },
	// 			},
	// 			{
	// 				props: { type: 'steel' },
	// 				style: { backgroundColor: '#598FA1' },
	// 			},
	// 			{
	// 				props: { type: 'water' },
	// 				style: { backgroundColor: '#4C8FD6' },
	// 			},
	// 			{
	// 				props: { type: 'dragon' },
	// 				style: { backgroundColor: '#096CC3' },
	// 			},
	// 			{
	// 				props: { type: 'ghost' },
	// 				style: { backgroundColor: '#5269AD' },
	// 			},
	// 			{
	// 				props: { type: 'flying' },
	// 				style: { backgroundColor: '#92AADD' },
	// 			},
	// 			{
	// 				props: { type: 'dark' },
	// 				style: { backgroundColor: '#5B5365' },
	// 			},
	// 			{
	// 				props: { type: 'poison' },
	// 				style: { backgroundColor: '#AB69C9' },
	// 			},
	// 			{
	// 				props: { type: 'fairy' },
	// 				style: { backgroundColor: '#ED92E8' },
	// 			},
	// 			{
	// 				props: { type: 'rock' },
	// 				style: { backgroundColor: '#C8B689' },
	// 			},
	// 			{
	// 				props: { type: 'normal' },
	// 				style: { backgroundColor: '#909AA2' },
	// 			},
	// 		],
	// 	},
	// 	MuiChip: {
	// 		variants: [
	// 			{
	// 				props: { variant: 'type' },
	// 				style: {
	// 					textTransform: 'uppercase',
	// 					fontSize: "0.75rem",
	// 					letterSpacing: "0.1em",
	// 					color: '#FFFFFF',
	// 				},
	// 			},
	// 			{
	// 				props: { orientation: 'vertical' },
	// 				style: {
	// 					flexDirection: 'column',
	// 					height: 'max-content',
	// 					fontSize: '0.7rem',
	// 					color: '#FFFFFF',
	// 					fontWeight: '600',
	// 				},
	// 			},
	// 			{
	// 				props: { type: 'fighting' },
	// 				style: { backgroundColor: '#CE406B' },
	// 			},
	// 			{
	// 				props: { type: 'psychic' },
	// 				style: { backgroundColor: '#F97178' },
	// 			},
	// 			{
	// 				props: { type: 'fire' },
	// 				style: { backgroundColor: '#FE9D52' },
	// 			},
	// 			{
	// 				props: { type: 'ground' },
	// 				style: { backgroundColor: '#DB7948' },
	// 			},
	// 			{
	// 				props: { type: 'electric' },
	// 				style: { backgroundColor: '#F3D139' },
	// 			},
	// 			{
	// 				props: { type: 'bug' },
	// 				style: { backgroundColor: '#90BF2B' },
	// 			},
	// 			{
	// 				props: { type: 'grass' },
	// 				style: { backgroundColor: '#67BB5D' },
	// 			},
	// 			{
	// 				props: { type: 'ice' },
	// 				style: { backgroundColor: '#73CEBF' },
	// 			},
	// 			{
	// 				props: { type: 'steel' },
	// 				style: { backgroundColor: '#598FA1' },
	// 			},
	// 			{
	// 				props: { type: 'water' },
	// 				style: { backgroundColor: '#4C8FD6' },
	// 			},
	// 			{
	// 				props: { type: 'dragon' },
	// 				style: { backgroundColor: '#096CC3' },
	// 			},
	// 			{
	// 				props: { type: 'ghost' },
	// 				style: { backgroundColor: '#5269AD' },
	// 			},
	// 			{
	// 				props: { type: 'flying' },
	// 				style: { backgroundColor: '#92AADD' },
	// 			},
	// 			{
	// 				props: { type: 'dark' },
	// 				style: { backgroundColor: '#5B5365' },
	// 			},
	// 			{
	// 				props: { type: 'poison' },
	// 				style: { backgroundColor: '#AB69C9' },
	// 			},
	// 			{
	// 				props: { type: 'fairy' },
	// 				style: { backgroundColor: '#ED92E8' },
	// 			},
	// 			{
	// 				props: { type: 'rock' },
	// 				style: { backgroundColor: '#C8B689' },
	// 			},
	// 			{
	// 				props: { type: 'normal' },
	// 				style: { backgroundColor: '#909AA2' },
	// 			},
	// 		],
	// 		styleOverrides: {
	// 			icon: ({ ownerState }) => ({
	// 				...(ownerState.variant === 'type' && {
	// 					color: '#FFFFFF',
	// 					width: '1em',
	// 					height: '1em',
	// 					fontSize: '1.71rem',
	// 					...(ownerState.orientation === 'vertical' && {
	// 						width: '1.2rem',
	// 						height: '1.2rem',
	// 						fontSize: '0.75rem',
	// 						margin: '3px 3px 0',
	// 					}),
	// 				}),
	// 			}),
	// 			label: ({ ownerState }) => ({
	// 				...(ownerState.orientation === 'vertical' && {
	// 					padding: 0,
	// 					paddingBottom: '3px',
	// 				}),
	// 			}),
	// 		},
	// 	},
	// },
	// props: {
	// 	MuiTooltip: {
	// 		arrow: true,
	// 	},
	// },
})

pokeTheme = responsiveFontSizes(pokeTheme);

const lightTheme = createTheme(pokeTheme, {
	// palette: {
	// 	mode: 'light',
	// 	text: {
	// 		primary: '#263238',
	// 		secondary: 'rgba(38,50,56,0.9)',
	// 		disabled: 'rgba(38,50,56,0.5)',
	// 	},
	// },
	// components: {
	// 	MuiAppBar: {
	// 		styleOverrides: {
	// 			root: {
	// 				backgroundColor: 'rgba(255,255,255,0.1)',
	// 				borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
	// 				color: '#263238',
	// 			},
	// 		},
	// 	},
	// },
});

const darkTheme = createTheme(pokeTheme, {
	// palette: {
	// 	mode: 'dark',
	// 	text: {
	// 		primary: '#FFFFFF',
	// 		secondary: 'rgba(255, 255, 255, 0.75)',
	// 		disabled: 'rgba(255, 255, 255, 0.5)',
	// 	},
	// 	background: {
	// 		default: '#263238',
	// 		paper: '#263238',
	// 	},
	// },
	// components: {
	// 	MuiAppBar: {
	// 		styleOverrides: {
	// 			root: {
	// 				backgroundColor: 'rgba(38, 50, 56, 0.8)',
	// 				color: '#FFFFFF',
	// 			},
	// 		},
	// 	},
	// },
});

export { lightTheme, darkTheme };