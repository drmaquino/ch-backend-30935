import { crearUsuario } from '../models/Usuario.js'
import { guardarUsuario, asegurarNombreUnico } from '../persistencia/usuarios.js'


export function registrarUsuario(datosUsuario) {
    asegurarNombreUnico(datosUsuario.username)
    const usuario = crearUsuario(datosUsuario)
    guardarUsuario(usuario)
    return usuario
}