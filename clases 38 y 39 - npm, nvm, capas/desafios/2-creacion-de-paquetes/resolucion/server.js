const express = require('express')
const { suma, resta, mult, div } = require('cds-operaciones')

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Yarn')
})

app.get('/suma', (req, res) => {
    let { a, b } = req.query
    res.send(`La suma de ${a} y ${b} es ${suma(Number(a), Number(b))}`)
})

app.get('/resta', (req, res) => {
    let { a, b } = req.query
    res.send(`La resta de ${a} y ${b} es ${resta(Number(a), Number(b))}`)
})

app.get('/mult', (req, res) => {
    let { a, b } = req.query
    res.send(`La multiplicación de ${a} y ${b} es ${mult(Number(a), Number(b))}`)
})

app.get('/div', (req, res) => {
    let { a, b } = req.query
    res.send(`La división de ${a} y ${b} es ${div(Number(a), Number(b))}`)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))