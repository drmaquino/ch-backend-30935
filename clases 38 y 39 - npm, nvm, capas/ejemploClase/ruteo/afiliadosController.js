import { afiliarNuevoSocio } from '../negocio/socioService.js'

export async function post(req, res, next) {
    try {
        const datosPersonales = req.body
        const socio = await afiliarNuevoSocio(datosPersonales)
        res.status(201).json(socio.soloDatos())
    } catch (error) {
        res.status(400).json({ errMsg: error.message })
    }
}