import { Pedido, SubPedido } from "./vm";

export const getImporteTotal = (subPedidos: SubPedido[]) => {
	return subPedidos.reduce((total, subpedido) => total + subpedido.importe, 0);
};

export const getValidatedProcess = (subPedidos: SubPedido[]) => {
	return (
		subPedidos.reduce(
			(total, subpedido) => (subpedido.validated === true ? total + 1 : total),
			0
		) / subPedidos.length
	);
};

export const getInitialPedidoData = (): Pedido => {
	const subPedidos = getInitialSubPedidoData();
	const importeTotal = getImporteTotal(subPedidos);
	const validatedProcess = getValidatedProcess(subPedidos);

	return {
		id: 1,
		numero: Math.floor(Math.random() * 1000),
		proveedor: "Zoaman SL",
		fecha: 0,
		importeTotal: importeTotal,
		validatedProcess: validatedProcess,
		subpedidos: subPedidos,
	};
};

const getInitialSubPedidoData = (): SubPedido[] => {
	return [
		{ id: 1, validated: false, descripcion: "Reactivos maquinaria", importe: 2345 },
		{ id: 2, validated: true, descripcion: "Recambios impresión", importe: 135 },
		{ id: 3, validated: false, descripcion: "Soportes plataforma", importe: 540 },
		{ id: 4, validated: true, descripcion: "EPIs", importe: 90.5 },
	];
};
