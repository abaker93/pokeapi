import { createTheme } from "@mui/material";
import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, gray, ground, ice, normal, poison, psychic, rock, steel, text, water, white } from "./colors";
import { gradientBug, gradientFire, gradientGrass, gradientNormal, gradientWater } from "./gradients";

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
		divider: gray[100],
		disabled: text[200],
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
			fontSize: 	'1.5rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: 	'1.4rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: 	'1.3rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h4: {
			fontSize: 	'1.2rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h5: {
			fontSize: 	'1.1rem',
			fontWeight:	700,
			lineHeight: 1.2,
		},
		h6: {
			fontSize: 	'1rem',
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
		caption: {
			fontSize: 	'0.75rem',
			fontWeight:	400,
			lineHeight: 1.5,
		},
		overline: {
			fontSize: 	'0.625rem',
			fontWeight:	400,
			lineHeight: 1.66,
			letterSpacing:	'0.08333em',
			textTransform: 'uppercase',
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
		MuiBox: {
			variants: [
				{
					props: { variant: 'pie', },
					style: {
						height:	'3rem',
						width:	'3rem',
						borderRadius:	'50%',
					},
				},
			],
		},
		MuiCard: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.type1 === 'bug' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background:	`linear-gradient(45deg, ${gradientBug.bug})`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${gradientBug.dark})`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${gradientBug.dragon})`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${gradientBug.electric})`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${gradientBug.fairy})`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${gradientBug.fighting})`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${gradientBug.fire})`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${gradientBug.flying})`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${gradientBug.ghost})`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${gradientBug.grass})`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${gradientBug.ground})`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${gradientBug.ice})`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${gradientBug.normal})`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${gradientBug.poison})`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${gradientBug.psychic})`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${gradientBug.rock})`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${gradientBug.steel})`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${gradientBug.water})`,
						}),
					}),
					...(ownerState.type1 === 'dark' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${dark.alt} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${dark[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'dragon' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${dragon.alt} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${dragon[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'electric' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${electric.alt} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${flying[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'fairy' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${bug[alt]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fairy.alt} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${flying[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'fighting' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${fighting.alt} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${fighting[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'fire' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${gradientFire.fire})`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${gradientFire.flying})`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'flying' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${flying.alt} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'ghost' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${ghost.alt} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${ghost[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'grass' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${grass.alt} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${gradientGrass.poison})`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${grass[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'ground' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${ground.alt} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${ground[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'ice' && {
						color:	text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${flying[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ice.alt} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'normal' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${gradientNormal.normal})`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${normal[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'poison' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${poison.alt} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${poison[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'psychic' && {
						color: text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${flying[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${psychic.alt} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${rock[500]} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'rock' && {
						color: text[500],
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${electric[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fairy[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fire[500]} 100%)`,
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${flying[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ice[500]} 100%)`,
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${psychic[500]} 100%)`,
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${rock.alt} 100%)`,
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'steel' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${steel.alt} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${steel[500]} 0%, ${water[500]} 100%)`,
						}),
					}),
					...(ownerState.type1 === 'water' && {
						color:	white,
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${bug[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${dark[500]} 100%)`,
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${dragon[500]} 100%)`,
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${fighting[500]} 100%)`,
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${ghost[500]} 100%)`,
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${grass[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${ground[500]} 100%)`,
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${normal[500]} 100%)`,
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${poison[500]} 100%)`,
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${water[500]} 0%, ${steel[500]} 100%)`,
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${gradientWater.water})`,
						}),
					}),
				}),
			},
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
					props: { direction: 'vertical', },
					style: {
						flexDirection: 'column',
						height: 'auto',
					}
				},
			],
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.type === 'bug' && {
						backgroundColor: bug[500],
						color: bug.color,
					}),
					...(ownerState.type === 'dark' && {
						backgroundColor: dark[500],
						color: dark.color,
					}),
					...(ownerState.type === 'dragon' && {
						backgroundColor: dragon[500],
						color: dragon.color,
					}),
					...(ownerState.type === 'electric' && {
						backgroundColor: electric[500],
						color: electric.color,
					}),
					...(ownerState.type === 'fairy' && {
						backgroundColor: fairy[500],
						color: fairy.color,
					}),
					...(ownerState.type === 'fighting' && {
						backgroundColor: fighting[500],
						color: fighting.color,
					}),
					...(ownerState.type === 'fire' && {
						backgroundColor: fire[500],
						color: fire.color,
					}),
					...(ownerState.type === 'flying' && {
						backgroundColor: flying[500],
						color: flying.color,
					}),
					...(ownerState.type === 'ghost' && {
						backgroundColor: ghost[500],
						color: ghost.color,
					}),
					...(ownerState.type === 'grass' && {
						backgroundColor: grass[500],
						color: grass.color,
					}),
					...(ownerState.type === 'ground' && {
						backgroundColor: ground[500],
						color: ground.color,
					}),
					...(ownerState.type === 'ice' && {
						backgroundColor: ice[500],
						color: ice.color,
					}),
					...(ownerState.type === 'normal' && {
						backgroundColor: normal[500],
						color: normal.color,
					}),
					...(ownerState.type === 'poison' && {
						backgroundColor: poison[500],
						color: poison.color,
					}),
					...(ownerState.type === 'psychic' && {
						backgroundColor: psychic[500],
						color: psychic.color,
					}),
					...(ownerState.type === 'rock' && {
						backgroundColor: rock[500],
						color: rock.color,
					}),
					...(ownerState.type === 'steel' && {
						backgroundColor: steel[500],
						color: steel.color,
					}),
					...(ownerState.type === 'water' && {
						backgroundColor: water[500],
						color: water.color,
					}),
				}),
				icon: ({ ownerState }) => ({
					color: 'inherit',
					...(ownerState.direction === 'vertical' && {
						marginTop:		4,
						marginRight:	0,
						marginLeft:		0,
					}),
				}),
				label: ({ ownerState }) => ({
					...(ownerState.size === 'xsmall' && {
						paddingLeft:	8,
						paddingRight: 8,
						paddingTop:		3,
					}),
					...(ownerState.variant === 'type' && {
						fontWeight:			400,
						letterSpacing:	'0.025em',
						textTransform:	'uppercase'
					}),
					...(ownerState.direction === 'vertical' && {
						lineHeight:	'1.2',
						marginBottom: 2,
					}),
				}),
			},
		},
		MuiIconButton: {
			variants: [
				{
					props: { variant: 'outlined', },
					style: {
						border: '1px solid rgba(38, 50, 56, 0.2)',
						borderRadius: 8,
					},
				},
			],
		},
	},
})



//	~~~~~~~~~~~~~~~~~~~~	//
//	--	LIGHT THEME		--	//
//	~~~~~~~~~~~~~~~~~~~~	//

export const ddLightTheme = createTheme(ddTheme, {
	palette: {
		mode: 'light',
		background: {
			default: '#F9F9F9',
			paper: '#F9f9f9',
		},
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