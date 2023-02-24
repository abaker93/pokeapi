import { createContext, useContext, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../utilities/themes';

const ColorModeContext = createContext(undefined);

export const ColorModeProvider = ({ children }) => {
	const [colorMode, setColorMode] = useState("light");
	
	const theme = (colorMode === "light" ? lightTheme : darkTheme )
	
	return (
		<ColorModeContext.Provider
			value={{
				colorMode,
				toggleColorMode: () => setColorMode(colorMode === "light" ? "dark" : "light"),
			}}
		>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export const useColorMode = () => useContext(ColorModeContext);