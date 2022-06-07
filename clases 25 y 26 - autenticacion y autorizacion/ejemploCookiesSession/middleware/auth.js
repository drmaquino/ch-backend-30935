import { crearErrorAutenticacion } from '../models/errores.js'

export function requiereAutenticacion(req, res, next) {
    if (!req.session.username) {
        next(crearErrorAutenticacion())
    } else {
        next()
    }
}
