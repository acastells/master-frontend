import { DetailGHScene, DetailRMScene, ListGHScene, ListRMScene, LoginScene } from "@/scenes";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path={switchRoutes.login} element={<LoginScene />} />
				<Route path={switchRoutes.github.list} element={<ListGHScene />} />
				<Route path={switchRoutes.github.detail} element={<DetailGHScene />} />
				<Route path={switchRoutes.rickandmorty.list} element={<ListRMScene />} />
				<Route path={switchRoutes.rickandmorty.detail} element={<DetailRMScene />} />				
				<Route path="*" element={<div>404! not found!</div>} />
			</Routes>
		</HashRouter>
	);
};
