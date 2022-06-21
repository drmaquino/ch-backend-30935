import http from 'http'

export function crearServidor(port) {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Hola mundo desde el proceso ${process.pid}!`)
    }).listen(port)

    console.log(`Worker ${process.pid} started`)
}
