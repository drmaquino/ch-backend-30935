import { obtenerUsuarioPorNombre } from '../persistencia/usuarios.js'

export function autenticar(username, password) {
    let usuario
    try {
        usuario = obtenerUsuarioPorNombre(username)
    } catch (error) {
        throw new Error('error de autenticacion')
    }
    if (usuario.password !== password) {
        throw new Error('error de autenticacion')
    }
    return usuario
}
