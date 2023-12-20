import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import { DetailGHScene, DetailRMScene, ListGHScene, ListRMScene, LoginScene } from "../scenes";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={switchRoutes.login} element={<LoginScene />} />
				<Route path={switchRoutes.github.list} element={<ListGHScene />} />
				<Route path={switchRoutes.github.detail} element={<DetailGHScene />} />
				<Route path={switchRoutes.rickandmorty.list} element={<ListRMScene />} />
				<Route path={switchRoutes.rickandmorty.detail} element={<DetailRMScene />} />				
				<Route path="*" element={<div>404! not found!</div>} />
			</Routes>
		</BrowserRouter>
	);
};
