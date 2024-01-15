import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlpacasScene, CalvesScene, StoreScene } from "../scenes";
import { switchRoutes } from "./routes";

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={switchRoutes.home} element={<StoreScene />} />
				<Route path={switchRoutes.store} element={<StoreScene />} />
				<Route path={switchRoutes.alpacas} element={<AlpacasScene />} />
				<Route path={switchRoutes.calves} element={<CalvesScene />} />
				<Route path={switchRoutes.checkout} element={<h1>Not implemented</h1>} />
				<Route path="*" element={<div>404! not found!</div>} />
			</Routes>
		</BrowserRouter>
	);
};
