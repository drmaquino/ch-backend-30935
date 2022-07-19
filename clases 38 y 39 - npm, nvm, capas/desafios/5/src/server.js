import express from 'express'
import routerOperaciones from './rutas/operaciones.js'
import routerAuth from './rutas/auth.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Yarn')
})

app.use('/operaciones', routerOperaciones)
app.use('/', routerAuth)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))
