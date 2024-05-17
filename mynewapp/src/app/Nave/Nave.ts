
export class Naves {

    id: number;
    nombre: String;
    empresa_fabricacion: String;
    raza_origen: String;
    imagen: String;
    costo: String;
    descripcion: String;
    bando: String;

    constructor(id: number, nombre: String, empresa_fabricacion: String, raza_origen: String, imagen: String, costo: String, descripcion: String, bando: String) {
        this.id = id;
        this.nombre = nombre;
        this.empresa_fabricacion = empresa_fabricacion;
        this.raza_origen = raza_origen;
        this.imagen = imagen;
        this.costo = costo;
        this.descripcion = descripcion;
        this.bando = bando;
    }
}

