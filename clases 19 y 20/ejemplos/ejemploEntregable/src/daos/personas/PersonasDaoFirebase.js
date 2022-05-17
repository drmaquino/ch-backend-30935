import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js"

class PersonasDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('personas')
    }
}

export default PersonasDaoFirebase
