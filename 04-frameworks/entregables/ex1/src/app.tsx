import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { FilterContextProvider } from "./core/providers/filter";
import { AppRouter } from "./router";

export const App = () => {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<FilterContextProvider>
				<AppRouter />
			</FilterContextProvider>
		</ThemeProvider>
	);
};
