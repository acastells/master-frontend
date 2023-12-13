import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./contexts";
import { DetailPage, DetailPageRick, ListPage, ListPageRick, LoginPage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
				<Router>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/list" element={<ListPage />} />
						<Route path="/detail/:id" element={<DetailPage />} />
						<Route path="/rickandmorty/list" element={<ListPageRick />} />
						<Route path="/rickandmorty/detail/:id" element={<DetailPageRick />} />
					</Routes>
				</Router>
			</FilterContextProvider>
		</ThemeProvider>
	);
};
