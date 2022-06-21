// -------------- MODO FORK -------------------
//pm2 start server.js --name="Server1" --watch -- 8081 FORK

// -------------- MODO CLUSTER -------------------
//pm2 start server.js --name="Server2" --watch -- 8082 CLUSTER

//pm2 list
//pm2 delete id/name
//pm2 desc name
//pm2 monit
//pm2 --help
//pm2 logs
//pm2 flush

// ------------------ NGINX ----------------------
//http://nginx.org/en/docs/windows.html
//start nginx
//tasklist /fi "imagename eq nginx.exe"
//nginx -s reload
//nginx -s quit

import express from 'express'
import cluster from 'cluster'
import * as os from 'os'

const modoCluster = process.argv[3] == 'CLUSTER'

/* --------------------------------------------------------------------------- */
/* MASTER */
if(modoCluster && cluster.isMaster) {
    const numCPUs = os.cpus().length
    
    console.log(`Número de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
else {
    const app = express()

    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/datos', (req,res) => {
        res.send(`Server en PORT(${PORT}) - PID(${process.pid}) - FYH(${new Date().toLocaleString()})`)
    })

    app.listen(PORT, err => {
        if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}