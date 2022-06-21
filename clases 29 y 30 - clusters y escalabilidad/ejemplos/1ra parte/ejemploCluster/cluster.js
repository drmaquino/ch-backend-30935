import cluster from 'cluster'
import os from 'os'
import { crearServidor } from './server.js'

const numCPUs = os.cpus().length

if (cluster.isPrimary) {
    console.log(`PID PRIMARIO ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    // cluster con balanceo de carga usando estrategia:
    // ROUND ROBIN

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
    })
} else {
    crearServidor(8000)
}
