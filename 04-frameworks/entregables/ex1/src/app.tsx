import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./contexts";
import { DetailPage, ListPage, LoginPage } from "./pages";

export const App = () => {
	return (
		<FilterContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/list" element={<ListPage />} />
					<Route path="/detail/:id" element={<DetailPage />} />
					<Route path="/rickandmorty/list" element={<DetailPage />} />
					<Route path="/rickandmorty/detail/:id" element={<DetailPage />} />
				</Routes>
			</Router>
		</FilterContextProvider>
	);
};
