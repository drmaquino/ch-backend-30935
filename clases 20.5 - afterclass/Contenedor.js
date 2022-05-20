export default class Contenedor {
    constructor(nombreEntidad) {
        this.nombreEntidad = nombreEntidad
    }

    agregar(cosa) {
        throw new Exception('falta implementar')
    }

    listar() {
        throw new Exception('falta implementar')
    }
}