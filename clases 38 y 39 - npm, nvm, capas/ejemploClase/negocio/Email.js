export default class Email {
    #value

    constructor(datoEmail) {
        this.#value = this.#crearEmail(datoEmail)
    }

    #crearEmail(emailString) {
        if (!emailString) {
            throw new Error('formato invalido de email')
        }

        if (!emailString.includes('@')) {
            throw new Error('formato invalido de email')
        }
        return emailString
    }

    get value() {
        return this.#value
    }
}