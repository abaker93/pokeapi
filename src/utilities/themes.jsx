import { createTheme } from "@mui/material";
import { fighting, fire, grass, gray, ice, poison, text, water, white } from "./colors";

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