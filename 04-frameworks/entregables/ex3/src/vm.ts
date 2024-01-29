export interface Pedido {
	id: number;
	numero: number;
	proveedor: string;
	fecha: Date;
	subpedidos: SubPedido[];
	// importeTotal: number;
	// validatedProcess: number;
}

export interface SubPedido {
	id: number;
	validated: boolean;
	descripcion: string;
	importe: number;
}