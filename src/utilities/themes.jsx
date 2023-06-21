import { createTheme } from "@mui/material";
import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, gray, ground, ice, normal, poison, psychic, rock, steel, text, water, white } from "./colors";

//	~~~~~~~~~~~~~~~~~~~~	//
//	--	BASE THEME		--	//
//	~~~~~~~~~~~~~~~~~~~~	//

let ddTheme = createTheme({
	palette: {
		primary: {
			main:	poison[500],
		},
		secondary: {
			main:					ice[400],
			contrastText:	ice[800],
		},
		warning: {
			main:	fire[600],
		},
		error: {
			main:	fighting[500],
		},
		info: {
			main:	water[500],
		},
		success: {
			main:	grass[600],
		},
		divider:	gray[100],
	},
	typography: {
		fontFamily:		'source-sans-3, "Source Sans Pro", Helvetica, Arial, sans-serif',
		fontSize:			16,
		htmlFontSize:	16,
		fontWeightLight:		300,
		fontWeightRegular:	400,
		fontWeightMedium: 	500,
		fontWeightBold:			700,
		h1: {
			fontSize: 	'2rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: 	'1.75rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: 	'1.5rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h4: {
			fontSize: 	'1.375rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h5: {
			fontSize: 	'1.25rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h6: {
			fontSize: 	'1.125rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		subtitle1: {
			fontSize:		'1rem',
			fontWeight:	500,
		},
		subtitle2: {
			fontSize: 	'0.875rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: 	'1rem',
			fontWeight:	400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: 	'0.875rem',
			fontWeight:	400,
			lineHeight: 1.5,
		},
		button: {
			fontWeight:			400,
			letterSpacing:	'0.025em',
		},
		japanese: {
			fontFamily: 'source-han-sans-japanese, "Source Sans Pro", Helvetica, Arial, sans-serif',
		},
	},
	shape: { borderRadius: 8, },
	components: {
		MuiCard: {
			variants: [
				{
					props: { variant: 'pokedex', },
					style: {
						overflow: 'visible',
						marginBottom: 48,
						backgroundColor: gray[100],
					},
				},
			],
		},
		MuiChip: {
			variants: [
				{
					props: { size: 'xsmall', },
					style: {
						fontSize: '0.875rem',
						height: 20,
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
})



//	~~~~~~~~~~~~~~~~~~~~	//
//	--	LIGHT THEME		--	//
//	~~~~~~~~~~~~~~~~~~~~	//

export const ddLightTheme = createTheme(ddTheme, {
	palette: {
		mode: 'light',
		text: {
			primary: text[500],
			secondary: text[400],
			disabled: text[200],
		}
	}
})



//	~~~~~~~~~~~~~~~~~~~~	//
//	--	DARK THEME		--	//
//	~~~~~~~~~~~~~~~~~~~~	//

export const ddDarkTheme = createTheme(ddTheme, {
	palette: {
		mode: 'dark',
		text: {
			primary: white,
			secondary: text[50],
			disabled: text[100],
		}
	}
})