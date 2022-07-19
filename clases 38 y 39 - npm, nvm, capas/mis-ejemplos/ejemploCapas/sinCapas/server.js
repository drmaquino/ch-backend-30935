import express from 'express'

const app = express()
app.use(express.json())

const datos = []

app.get('/api/datos', (req, res) => {
    res.json(datos)
})

app.post('/api/datos', (req, res) => {
    const dato = req.body
    dato.added = Date.now()
    datos.push(dato)
    res.status(201).json(dato)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))