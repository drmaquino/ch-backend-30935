import { obtenerDatos, crearDato } from '../negocio/datos.js'

async function getDatosController(req, res) {
    const datos = await obtenerDatos()
    res.json(datos)
}

async function postDatosController(req, res) {
    const dato = req.body
    await crearDato(dato)
    res.status(201).json(dato)
}

export { getDatosController, postDatosController }