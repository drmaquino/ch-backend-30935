import { crearErrorAutenticacion } from '../models/errores.js'
import usuariosPersistencia from '../database/usuariosPersistencia.js'

async function autenticar(username, password) {
    let usuario
    try {
        usuario = await usuariosPersistencia.obtenerPorUsername(username)
    } catch (error) {
        throw crearErrorAutenticacion()
    }

    if (usuario.password !== password) {
        throw crearErrorAutenticacion()
    }
    return usuario
}

const authController = {
    login: async (req, res, next) => {
        const { username, password } = req.body
        try {
            const usuario = await autenticar(username, password)
            req.session.username = usuario.username
            req.session.mensajeBienvenida = `bienvenide, ${usuario.username}`
            res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    },
    logout: (req, res, next) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}

export default authController