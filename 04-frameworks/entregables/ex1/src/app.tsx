import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./core/providers/filter";
import { DetailPage, DetailPageRick, ListPage, ListPageRick, LoginPage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


export const routes = {
	login: "/",
	github: {
		list: "/github/list",
		detail: "/github/detail/:id"
	},
	rickandmorty: {
		list: "/rickandmorty/list",
		detail: "/rickandmorty/detail/:id"
	}
}

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
						<Route path={routes.login} element={<LoginPage />} />
						<Route path="/list" element={<ListPage />} />
						<Route path="/detail/:id" element={<DetailPage />} />
						<Route path={routes.rickandmorty.list} element={<ListPageRick />} />
						<Route path={routes.rickandmorty.detail} element={<DetailPageRick />} />
					</Routes>
				</Router>
			</FilterContextProvider>
		</ThemeProvider>
	);
};
