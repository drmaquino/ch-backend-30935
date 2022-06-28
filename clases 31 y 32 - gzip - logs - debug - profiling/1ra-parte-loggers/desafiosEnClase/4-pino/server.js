import express from 'express'
import logger from './logger.js'

const app = express()

app.get('/sumar', (req, res) => {
  const n1 = parseInt(req.query.n1)
  const n2 = parseInt(req.query.n2)

  if (!isNaN(n1) && !isNaN(n2)) {
    logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`)
    res.send(`La suma de ${n1} más ${n2} es ${n1 + n2}`)
  } else {
    logger.error('Parámetros incorrectos para la suma')
    res.send('Parámetros de entrada no válidos')
  }
})

app.all('*', (req, res) => {
  const { url, method } = req
  logger.warn(`Ruta ${method} ${url} no implementada`)
  res.send(`Ruta ${method} ${url} no está implementada`)
})

const PORT = parseInt(process.argv[2]) || 8080

const server = app.listen(PORT, () => {
  logger.info(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => logger.error(`Error en servidor: ${error}`))
