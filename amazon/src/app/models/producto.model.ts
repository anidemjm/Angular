export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    popular: boolean;

    constructor(pId, pNombre, pDescripcion, pPrecio, pCategoria, pPopular = false) {
        this.id = pId;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.precio = pPrecio;
        this.categoria = pCategoria;
        this.popular = pPopular;
    }
}
