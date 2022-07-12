export default class Persona {
    constructor(datos) {
        this.setData(datos)
    }

    setDatos({ nombre, apellido, direccion, whatsapp }) {
        if (!nombre) throw new Error('falta nombre')
        if (!apellido) throw new Error('falta apellido')
        if (!direccion) throw new Error('falta direccion')
        if (!whatsapp) throw new Error('falta whatsapp')

        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.whatsapp = whatsapp
    }
}
