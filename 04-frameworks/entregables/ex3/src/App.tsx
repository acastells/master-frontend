import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { CenteredLayout } from "./components/CenteredLayout";
import { ProductDetail } from "./components/ProductDetail";
import { ProductHeader } from "./components/ProductHeader";
import { getInitialPedidoData } from "./logic";
import { Pedido } from "./vm";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App() {
	const [pedido, setPedido] = React.useState<Pedido>(getInitialPedidoData());
	const send = () => alert("Done!");

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<CenteredLayout>
				<ProductHeader pedido={pedido} send={send} />
				<ProductDetail subpedidos={pedido.subpedidos} setPedido={setPedido} />
			</CenteredLayout>
		</ThemeProvider>
	);
}
