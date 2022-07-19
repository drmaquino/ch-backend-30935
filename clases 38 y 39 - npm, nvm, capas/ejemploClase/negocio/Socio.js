export default class Socio {
    #nroSocio
    #nombre
    #apellido
    #direccion
    #email

    constructor({ nroSocio, nombre, apellido, direccion, email }) {
        this.#setNroSocio(nroSocio)
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.email = email
    }

    #setNroSocio(nroSocio) {
        if (!nroSocio) {
            throw new Error(`falta 'nro de socio'`)
        }
        this.#nroSocio = nroSocio
    }

    set nombre(dato_nombre) {
        if (!dato_nombre) {
            throw new Error(`falta 'nombre'`)
        }
        this.#nombre = dato_nombre
    }

    set apellido(dato_apellido) {
        if (!dato_apellido) {
            throw new Error(`falta 'apellido'`)
        }
        this.#apellido = dato_apellido
    }

    set direccion(dato_direccion) {
        this.#direccion = dato_direccion
    }

    set email(dato_email) {
        if (!dato_email) {
            throw new Error(`falta 'email'`)
        }
        this.#email = dato_email
    }

    get nroSocio() { return this.#nroSocio }
    get nombre() { return this.#nombre }
    get apellido() { return this.#apellido }
    get direccion() { return this.#direccion }
    get email() { return this.#email }

    soloDatos() {
        return Object.freeze({
            nroSocio: this.#nroSocio,
            nombre: this.#nombre,
            apellido: this.#apellido,
            direccion: this.#direccion,
            email: this.#email,
        })
    }
}

// const socio = new Socio({
//     nroSocio: 'abc123',
//     nombre: 'marian',
//     apellido: 'profe',
//     direccion: '',
//     email: 'profe@coder.com'
// })

// console.log(socio.nroSocio)
// console.log(socio.nombre)
// console.log(socio.apellido)
// console.log(socio.direccion)
// console.log(socio.email)
// socio.nroSocio = 'xyz'
// console.log(socio.nroSocio)