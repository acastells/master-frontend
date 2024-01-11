import { HomeScene } from "@/scenes";
import { HashRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path={switchRoutes.home} element={<HomeScene />} />
				<Route path={switchRoutes.kitties} element={<HomeScene />} />
				<Route path={switchRoutes.puppies} element={<HomeScene />} />
				<Route path={switchRoutes.alpacas} element={<HomeScene />} />
				<Route path={switchRoutes.calves} element={<HomeScene />} />
				<Route path={switchRoutes.checkout} element={<HomeScene />} />
				<Route path="*" element={<div>404! not found!</div>} />
			</Routes>
		</HashRouter>
	);
};
