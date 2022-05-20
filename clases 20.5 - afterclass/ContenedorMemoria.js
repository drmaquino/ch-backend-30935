import Contenedor from './Contenedor.js'

export default class ContenedorMemoria extends Contenedor {
    constructor(nombreEntidad) {
        super(nombreEntidad)
        this.cosas = []
    }

    agregar(cosa) {
        this.cosas.push(cosa)
    }

    listar() {
        return [...this.cosas]
    }
}