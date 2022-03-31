const express = require('express')

const app = express()

let contadorVisitas = 1

app.get('/', (req, res) => {
    res.send(`
<h1>Desafio Express</h1>
<p>esto es un texto</p>
<a href="/visitas">visitas</a>
`)
})

app.get('/pagina', (req, res) => {
    res.sendFile(process.cwd() + '/index.html')
})

app.get('/visitas', (req, res) => {
    const palabraFinal = contadorVisitas === 1 ? 'vez' : 'veces'
    res.send(`sitio visitado ${contadorVisitas++} ${palabraFinal}`)
})

app.get('/fyh', (req, res) => {
    const fecha = new Date()
    // const fechaStr = fecha.toLocaleDateString()
    // const fechaStr = fecha.toLocaleTimeString()
    const fechaStr = fecha.toLocaleString()
    res.send({
        fyh: fechaStr
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
