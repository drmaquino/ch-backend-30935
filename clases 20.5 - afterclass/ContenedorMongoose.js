import Contenedor from './Contenedor.js'
import mongoose from 'mongoose'

export default class ContenedorMongoose extends Contenedor {
    constructor(nombreEntidad, esquema) {
        super(nombreEntidad)
        this.db = mongoose.model(nombreEntidad, new mongoose.Schema(esquema))
    }

    async agregar(cosa) {
        await this.db.create(cosa)
    }

    async listar() {
        return await this.db.find({}, { _id: 0, __v: 0 }).lean()
    }
}