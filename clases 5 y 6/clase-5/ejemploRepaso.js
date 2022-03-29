const fs = require('fs')

let ultimoId = 0

class Caja {
    constructor(ruta) {
        this.ruta = ruta
        this.cosas = []
    }

    async guardar(cosa) {
        cosa.id = ultimoId + 1
        this.cosas.push(cosa)
        await fs.promises.writeFile(this.ruta, JSON.stringify(this.cosas))
        ultimoId++
    }
}

const caja = new Caja()

const cosa = {
    nombre: 'regla',
    precio: 150
}

caja.guardar(cosa)
