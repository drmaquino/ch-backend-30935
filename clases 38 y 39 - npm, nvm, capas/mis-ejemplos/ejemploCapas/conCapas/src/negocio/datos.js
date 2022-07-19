import { recuperarTodos, guardar } from '../persistencia/datos.js';

async function obtenerDatos() {
    return await recuperarTodos()
}

async function crearDato(dato) {
    dato.added = Date.now()
    await guardar(dato)
    return dato
}

export { obtenerDatos, crearDato }