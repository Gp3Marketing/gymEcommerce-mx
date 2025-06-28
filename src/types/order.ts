export interface PedidoProducto {
  slug?: string;
  nombreProducto: string;
  cantidad: number;
  precio: number;
}

export interface Order {
  id: string;
  productos: PedidoProducto[];
  fecha: string;
  total: number;
}
