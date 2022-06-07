import { crearId } from './ids.js'
import { crearErrorDatos } from './errores.js'

export function crearUsuario(datos) {
    if (!datos.username) {
        throw crearErrorDatos('falta el campo obligatorio "username"')
    }

    if (!datos.password) {
        throw crearErrorDatos('falta el campo obligatorio "password"')
    }

    if (!datos.direccion) {
        throw crearErrorDatos('falta el campo obligatorio "direccion"')
    }

    const usuario = {
        id: crearId(),
        username: datos.username,
        password: datos.password,
        direccion: datos.direccion,
    }

    return usuario
}