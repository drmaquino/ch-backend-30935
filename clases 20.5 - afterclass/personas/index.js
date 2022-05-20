import { TIPO_PERSISTENCIA } from '../config.js'

import mongoose from 'mongoose'
mongoose.connect('mongodb://root:mongopassword@localhost/coderhouse', {
    authSource: 'admin'
})

let personas

switch (TIPO_PERSISTENCIA) {
    case 'mongodb':
        const { default: ContenedorMongoose } = await import('../ContenedorMongoose.js')
        const personasMongoose = new ContenedorMongoose('personas', {
            nombre: { type: String, required: true },
            edad: { type: Number, required: true }
        })
        personas = personasMongoose
        break
    case 'archivo':
        const { default: ContenedorArchivo } = await import('../ContenedorArchivo.js')
        const personasArchivo = new ContenedorArchivo('personas', './personas.json')
        await personasArchivo.inicializar()
        personas = personasArchivo
        break
    default:
        const { default: ContenedorMemoria } = await import('../ContenedorMemoria.js')
        const personasMemoria = new ContenedorMemoria('personas')
        personas = personasMemoria
}

export default personas