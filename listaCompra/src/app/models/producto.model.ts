export class Producto {

    titulo: string;
    precio: number;
    cantidad: number;

    constructor(pTitulo = '', pPrecio = 0, pCantidad = 0) {
        this.titulo = pTitulo;
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }


}