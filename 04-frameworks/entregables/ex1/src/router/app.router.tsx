import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./router";
import { LoginPage, ListPage, DetailPage, ListPageRick, DetailPageRick } from "../pages";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={switchRoutes.login} element={<LoginPage />} />
				<Route path={switchRoutes.github.list} element={<ListPage />} />
				<Route path={switchRoutes.github.detail} element={<DetailPage />} />
				<Route path={switchRoutes.rickandmorty.list} element={<ListPageRick />} />
				<Route path={switchRoutes.rickandmorty.detail} element={<DetailPageRick />} />				
				<Route path="*" element={<div>404! not found!</div>} />
			</Routes>
		</BrowserRouter>
	);
};
