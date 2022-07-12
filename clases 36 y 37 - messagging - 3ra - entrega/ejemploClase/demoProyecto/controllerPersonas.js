import { afiliarPersona } from './servicePersonas.js'

export async function post(req, res, next) {
    try {
        const { body: datosPersona } = req
        const resultadoAfiliacion = await afiliarPersona(datosPersona)
        res.status(201).json(resultadoAfiliacion)
    } catch (error) {
        next(error)
    }
}
