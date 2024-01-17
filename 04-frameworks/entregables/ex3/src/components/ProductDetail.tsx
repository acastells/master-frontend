import { Button, Grid } from "@mui/material";
import {
	DataGrid,
	GridColDef,
	GridRowSelectionModel
} from "@mui/x-data-grid";
import React from "react";
import { Pedido, SubPedido } from "../vm";

interface Props {
	subpedidos: SubPedido[];
	setPedido: React.Dispatch<React.SetStateAction<Pedido>>;
}

const columns: GridColDef[] = [
	{
		field: "validated",
		headerName: "Estado",
		width: 160,
		valueGetter: ({ row }) => (row.validated ? "Válido" : "Pendiente"),
	},
	{ field: "descripcion", headerName: "Descripción", width: 360 },
	{ field: "importe", headerName: "Importe", type: "number", width: 160, editable: true },
];

export const ProductDetail = (props: Props) => {
	const { subpedidos, setPedido } = props;
	const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

	const updateRowValidation = (validate: boolean) => {
		if (rowSelectionModel.length === 0) {
			return;
		}

		const newSubpedidos = subpedidos.map((item) =>
			rowSelectionModel.includes(item.id) ? { ...item, validated: validate } : item
		);

		setPedido((prevPedido) => ({
			...prevPedido,
			subpedidos: newSubpedidos,
		}));
	};

	const validateRows = () => {
		updateRowValidation(true);
		setRowSelectionModel([]);
	};

	const invalidateRows = () => {
		updateRowValidation(false);
		setRowSelectionModel([]);
	};

	const handleOnCellEditStop = (updatedRow: SubPedido) => {
		const newSubpedidos = subpedidos.map((item) =>
			item.id === updatedRow.id ? { ...item, importe: updatedRow.importe } : item
		);
		setPedido((prevPedido) => ({
			...prevPedido,
			subpedidos: newSubpedidos,
		}));
		return updatedRow;
	};

	return (
		<>
			<Grid container flexDirection={"row"} sx={{ mb: 2 }}>
				<Button variant="outlined" onClick={validateRows}>
					Validar
				</Button>
				<Button variant="outlined" onClick={invalidateRows}>
					Invalidar
				</Button>
			</Grid>
			<DataGrid
				rows={subpedidos}
				columns={columns}
				checkboxSelection
				hideFooter
				rowSelectionModel={rowSelectionModel}
				onRowSelectionModelChange={setRowSelectionModel}
				processRowUpdate={handleOnCellEditStop}
			/>
		</>
	);
};
