const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//---------------------------------------

const productos = []

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

io.on('connection', (socket) => {

    socket.emit('productos', productos)

    socket.on('nuevoProd', productos => {
        productos.push(producto)
        io.sockets.emit('productos', productos)
    })
})


const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en puerto ${server.address().port}`)
})