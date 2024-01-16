import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlpacasScene, CalvesScene, StoreScene } from "../scenes";
import { switchRoutes } from "./routes";
import { CartContextProvider } from "../core/providers/cart/cartContext";
import { CheckoutScene } from "../scenes/checkout.scene";
import { PaymentSuccess } from "../scenes/paymentSuccess.scene";

export const AppRouter: React.FC = () => {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path={switchRoutes.home} element={<StoreScene />} />
					<Route path={switchRoutes.store} element={<StoreScene />} />
					<Route path={switchRoutes.alpacas} element={<AlpacasScene />} />
					<Route path={switchRoutes.calves} element={<CalvesScene />} />
					<Route path={switchRoutes.checkout} element={<CheckoutScene />} />
					<Route path={switchRoutes.paymentSuccess} element={<PaymentSuccess />} />
					<Route path="*" element={<div>404! not found!</div>} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
};
