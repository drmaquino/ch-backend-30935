import { crearUsuario } from '../models/usuariosModel.js'
import usuariosPersistencia from '../database/usuariosPersistencia.js'

const usuariosController = {
    post: async (req, res, next) => {
        try {
            const datosUsuario = req.body
            // aca falta verificar que no exista previamente alguien con ese nombre de usuario
            const usuario = crearUsuario(datosUsuario)
            await usuariosPersistencia.guardar(usuario)
            res.status(201).json(usuario)
        } catch (error) {
            next(error)
        }
    },

    get: async (req, res, next) => {
        try {
            res.json(await usuariosPersistencia.obtenerTodos())
        } catch (error) {
            next(error)
        }
    }
}

export default usuariosController