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
			styleOverrides: {
				root: ({ ownerState }) => ({
					color: white,
					...(ownerState.type1 === 'bug' && {
						...(ownerState.type2 === 'bug' && {
							background:	`linear-gradient(45deg, ${gradientBug.bug})`,
							color:			text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${gradientBug.dark})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${gradientBug.dragon})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${gradientBug.electric})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${gradientBug.fairy})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${gradientBug.fighting})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${gradientBug.fire})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${gradientBug.flying})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${gradientBug.ghost})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${gradientBug.grass})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${gradientBug.ground})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${gradientBug.ice})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${gradientBug.normal})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${gradientBug.poison})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${gradientBug.psychic})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${gradientBug.rock})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${gradientBug.steel})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${gradientBug.water})`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'dark' && {
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
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${electric.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${electric[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'fairy' && {
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${bug[alt]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fairy.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${fairy[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'fighting' && {
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
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${gradientFire.fire})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${gradientFire.flying})`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${fire[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'flying' && {
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${flying.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${flying[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'ghost' && {
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
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${ice.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${ice[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'normal' && {
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
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${psychic.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${rock[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${psychic[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'rock' && {
						...(ownerState.type2 === 'bug' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${bug[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dark' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${dark[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'dragon' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${dragon[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'electric' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${electric[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fairy' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fairy[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fighting' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fighting[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'fire' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${fire[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'flying' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${flying[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ghost' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ghost[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'grass' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${grass[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ground' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ground[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'ice' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${ice[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'normal' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${normal[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'poison' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${poison[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'psychic' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${psychic[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'rock' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${rock.alt} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'steel' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${steel[500]} 100%)`,
							color: text[500],
						}),
						...(ownerState.type2 === 'water' && {
							background: `linear-gradient(45deg, ${rock[500]} 0%, ${water[500]} 100%)`,
							color: text[500],
						}),
					}),
					...(ownerState.type1 === 'steel' && {
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
		}
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