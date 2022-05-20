import { TIPO_PERSISTENCIA } from '../config.js'

import mongoose from 'mongoose'
mongoose.connect('mongodb://root:mongopassword@localhost/coderhouse', {
    authSource: 'admin'
})

let autos

switch (TIPO_PERSISTENCIA) {
    case 'mongodb':
        const { default: ContenedorMongoose } = await import('../ContenedorMongoose.js')
        const autosMongoose = new ContenedorMongoose('autos', {
            marca: { type: String, required: true },
            modelo: { type: String, required: true }
        })
        autos = autosMongoose
        break
    case 'archivo':
        const { default: ContenedorArchivo } = await import('../ContenedorArchivo.js')
        const autosArchivo = new ContenedorArchivo('autos', './autos.json')
        await autosArchivo.inicializar()
        autos = autosArchivo
        break
    default:
        const { default: ContenedorMemoria } = await import('../ContenedorMemoria.js')
        const autosMemoria = new ContenedorMemoria('autos')
        autos = autosMemoria
}

export default autos