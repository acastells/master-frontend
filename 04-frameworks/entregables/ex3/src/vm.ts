export interface Pedido {
	id: number;
	numero: number;
	proveedor: string;
	fecha: number;
	importeTotal: number;
	validatedProcess: number;
	subpedidos: SubPedido[];
}

export interface SubPedido {
	id: number;
	validated: boolean;
	descripcion: string;
	importe: number;
}