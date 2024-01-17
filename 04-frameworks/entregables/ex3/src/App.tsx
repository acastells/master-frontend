import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CenteredLayout } from "./components/CenteredLayout";
import { ProductHeader } from "./components/ProductHeader";
import { ProductDetail } from "./components/ProductDetail";
import React from "react";
import { Pedido } from "./vm";
import { getImporteTotal, getInitialPedidoData, getValidatedProcess } from "./logic";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App() {
	const [pedido, setPedido] = React.useState<Pedido>(getInitialPedidoData());
	const send = () => alert("Done!");

	React.useEffect(() => {
		setPedido({
			...pedido,
			importeTotal: getImporteTotal(pedido.subpedidos),
			validatedProcess: getValidatedProcess(pedido.subpedidos),
		});
	}, [pedido.subpedidos]);

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
