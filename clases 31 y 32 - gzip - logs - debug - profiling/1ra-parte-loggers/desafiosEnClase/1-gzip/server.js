import express from 'express'
import compression from 'compression'

const app = express()

const mensaje = 'Hola que tal'
const mensajeLargooo = mensaje.repeat(1000)

app.get('/saludo', (req, res) => {
  res.send(mensajeLargooo)
})

app.get('/saludozip', compression(), (req, res) => {
  res.send(mensajeLargooo)
})

const PORT = parseInt(process.argv[2]) || 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
