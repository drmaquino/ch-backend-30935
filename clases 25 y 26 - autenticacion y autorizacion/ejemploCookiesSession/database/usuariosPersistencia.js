import { crearErrorNoEncontrado } from '../models/errores.js'

const usuariosArray = []

export default {
    guardar: async usuario => {
        usuariosArray.push(usuario)
        return usuario
    },
    obtenerTodos: async () => {
        return usuariosArray
    },
    obtenerPorUsername: async (username) => {
        const buscado = usuariosArray.find(u => u.username === username)
        if (!buscado) throw crearErrorNoEncontrado()
        return buscado

    }
}
