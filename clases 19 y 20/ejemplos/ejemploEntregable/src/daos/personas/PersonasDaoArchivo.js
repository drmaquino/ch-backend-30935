import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js"

class PersonasDaoArchivo extends ContenedorArchivo {

    constructor(rutaDir) {
        super(`${rutaDir}/personas.json`)
    }
}

export default PersonasDaoArchivo
