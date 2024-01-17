import { Button, Grid, TextField } from "@mui/material";
import { Pedido } from "../vm";

interface Props {
	pedido: Pedido;
	send: () => void;
}

export const ProductHeader = (props: Props) => {
	const { pedido, send } = props;

	return (
		<>
			<h3>Pedido a proveedor</h3>
			<Grid container flexDirection={"row"} sx={{ mb: 2 }}>
				<TextField
					sx={{ mr: 2 }}
					disabled
					label="Número"
					variant="standard"
					value={pedido.numero}
					type="number"
					// onChange={(e) => setPedido({ ...pedido, numero: Number(e.target.value) })}
				/>
				<TextField
					sx={{ mr: 2 }}
					disabled
					label="Proveedor"
					variant="standard"
					value={pedido.proveedor}
					// onChange={(e) => setPedido({ ...pedido, proveedor: e.target.value })}
				/>
				<TextField
					sx={{ mr: 2 }}
					disabled
					label="Fecha"
					variant="standard"
					value={pedido.fecha}
					// onChange={(e) => setPedido({ ...pedido, fecha: Number(e.target.value) })}
				/>
			</Grid>
			<Grid container flexDirection={"row"} sx={{ mb: 2 }}>
				<TextField
					variant="standard"
					sx={{ mr: 2 }}
					disabled
					label="Importe total"
					value={pedido.importeTotal}
				/>
				<TextField
					variant="standard"
					sx={{ mr: 2 }}
					disabled
					label="Estado válido"
					value={`${pedido.validatedProcess * 100} %`}
				/>
			</Grid>
			<Grid container flexDirection={"row"} justifyContent={"center"} sx={{ mb: 2 }}>
				<Button onClick={send} variant="outlined" disabled={pedido.validatedProcess !== 1}>Enviar</Button>
			</Grid>
		</>
	);
};
