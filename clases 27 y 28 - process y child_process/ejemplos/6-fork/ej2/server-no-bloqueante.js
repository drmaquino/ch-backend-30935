import http from 'http'
import { fork } from 'child_process'


let visitas = 0

const server = http.createServer()
server.on('request', (req, res) => {
    const { url } = req
    if (url == '/calcular') {
        const computo = fork('./computo.js')
        computo.on('message', msg => {
            if (msg === 'listo') {
                computo.send('calcular!')
            } else {
                res.end(`La suma es ${msg}`)
            }
        })
    } else if (url == '/') {
        res.end('Ok ' + (++visitas))
    }
})

const PORT = 8080
server.listen(PORT, err => {
    if (err) throw new Error(`Error en servidor: ${err}`)
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})