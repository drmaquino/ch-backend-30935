// persistencia
const datos = []

async function recuperarTodos() {
  return datos
}

async function guardar(dato) {
  datos.push(dato)
  return dato
}

// negocio
async function obtenerDatos() {
  return await recuperarTodos()
}

async function crearDato(dato) {
  dato.added = Date.now()
  await guardar(dato)
  return dato
}

// controladores
async function getDatosController(req, res) {
  const datos = await obtenerDatos()
  res.json(datos)
}

async function postDatosController(req, res) {
  const dato = req.body
  await crearDato(dato)
  res.status(201).json(dato)
}

// rutas
import { Router } from 'express'
const routerDatos = new Router()

routerDatos.get('/', getDatosController)
routerDatos.post('/', postDatosController)

// rest api
import express from 'express'
const app = express()
app.use(express.json())

app.use('/api/datos', routerDatos)

// start server
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  )
})
server.on('error', error => console.error(`Error en servidor`, error))
