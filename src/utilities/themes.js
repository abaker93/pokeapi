import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { typesArray } from "./data";
import "./colors";
import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, text, water, white } from "./colors";

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
	},
	typography: {
		fontFamily:		'source-sans-3, "Source Sans Pro", Helvetica, Arial, sans-serif',
		fontSize: 		16,
		htmlFontSize: 16,
		fontWeightLight:		300,
		fontWeightRegular:	350,
		fontWeightMedium: 	400,
		fontWeightBold:			500,
		h1: {
			fontSize: 	'2rem',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: 	'1.75rem',
			fontWeight:	300,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: 	'1.5rem',
			fontWeight:	350,
			lineHeight: 1.2,
		},
		h4: {
			fontSize: 	'1.375rem',
			fontWeight:	350,
			lineHeight: 1.2,
		},
		h5: {
			fontSize: 	'1.25rem',
			fontWeight:	350,
			lineHeight: 1.2,
		},
		h6: {
			fontSize: 	'1.125rem',
			fontWeight:	350,
			lineHeight: 1.2,
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight:	400,
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontWeight: 400,
		},
		body1: {
			fontSize: '1rem',
			fontWeight:	350,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight:	350,
			lineHeight: 1.5,
		},
		button: {
			fontWeight: 400,
			letterSpacing: '0.025em',
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
					backgroundImage:	'none',
					backdropFilter:		'blur(8px)',
				},
			},
		},
		MuiChip: {
			variants: [
				{
					props: { size:	'xsmall', },
					style: {
						fontSize:			'0.875rem',
						height:				'20px',
					},
				},
				{
					props: { type: 'bug', },
					style: { backgroundColor: bug[500], color: bug.color, },
				},
				{
					props: { type: 'dark', },
					style: { backgroundColor: dark[500], color: dark.color, },
				},
				{
					props: { type: 'dragon', },
					style: { backgroundColor: dragon[500], color: dragon.color, },
				},
				{
					props: { type: 'electric', },
					style: { backgroundColor: electric[500], color: electric.color, },
				},
				{
					props: { type: 'fairy', },
					style: { backgroundColor: fairy[500], color: fairy.color, },
				},
				{
					props: { type: 'fighting', },
					style: { backgroundColor: fighting[500], color: fighting.color, },
				},
				{
					props: { type: 'fire', },
					style: { backgroundColor: fire[500], color: fire.color, },
				},
				{
					props: { type: 'flying', },
					style: { backgroundColor: flying[500], color: flying.color, },
				},
				{
					props: { type: 'ghost', },
					style: { backgroundColor: ghost[500], color: ghost.color, },
				},
				{
					props: { type: 'grass', },
					style: { backgroundColor: grass[500], color: grass.color, },
				},
				{
					props: { type: 'ground', },
					style: { backgroundColor: ground[500], color: ground.color, },
				},
				{
					props: { type: 'ice', },
					style: { backgroundColor: ice[500], color: ice.color, },
				},
				{
					props: { type: 'normal', },
					style: { backgroundColor: normal[500], color: normal.color, },
				},
				{
					props: { type: 'poison', },
					style: { backgroundColor: poison[500], color: poison.color, },
				},
				{
					props: { type: 'psychic', },
					style: { backgroundColor: psychic[500], color: psychic.color, },
				},
				{
					props: { type: 'rock', },
					style: { backgroundColor: rock[500], color: rock.color, },
				},
				{
					props: { type: 'steel', },
					style: { backgroundColor: steel[500], color: steel.color, },
				},
				{
					props: { type: 'water', },
					style: { backgroundColor: water[500], color: water.color, },
				},
			],
			styleOverrides: {
				label: ({ ownerState }) => ({
					...(ownerState.size === 'xsmall' && {
						paddingLeft: '8px',
						paddingRight: '8px',
						paddingTop: '3px',
					}),
					...(ownerState.variant === 'type' && {
						fontWeight: 400,
						letterSpacing: '0.025em',
						textTransform: 'uppercase'
					}),
				}),
			},
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

// pokeTheme = responsiveFontSizes(pokeTheme);

export const lightTheme = createTheme(pokeTheme, {
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

export const darkTheme = createTheme(pokeTheme, {
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