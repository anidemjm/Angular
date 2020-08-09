export class Empleado {
    id: number;
    nombre: string;
    apellidos: string;
    dni: string;
    email: string;
    departamento: string;
    imagen: string;
    activo: boolean;

    constructor(pId, pNombre, pApellido, pDni, pEmail, pDepartamento, pImagen, pActivo = false) {
        this.id = pId;
        this.nombre = pNombre;
        this.apellidos = pApellido;
        this.dni = pDni;
        this.email = pEmail;
        this.departamento = pDepartamento;
        this.imagen = pImagen;
        this.activo = pActivo;
    }
}