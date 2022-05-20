import Contenedor from './Contenedor.js';
import fs from 'fs'

export default class ContenedorArchivo extends Contenedor {
    constructor(nombreEntidad, rutaArchivo) {
        super(nombreEntidad)
        this.rutaArchivo = rutaArchivo
        this.cosas = []
    }

    async #leer() {
        this.cosas = JSON.parse(await fs.promises.readFile(this.rutaArchivo, 'utf-8'))
    }

    async #escribir() {
        await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(this.cosas, null, 2))
    }

    async inicializar() {
        //(si no esta el archivo, lo creo)
        await this.#escribir()
    }

    async agregar(cosa) {
        await this.#leer()
        this.cosas.push(cosa)
        await this.#escribir()
    }

    async listar() {
        await this.#leer()
        return [...this.cosas]
    }
}