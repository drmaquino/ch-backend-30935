import validador from './validaciones/index.js';

export class Email {
    #email

    constructor(email) {
        this.#setEmail(email)
    }

    asString() {
        return this.#email;
    }

    #setEmail(mailAsString) {
        validador.validarContieneArroba(mailAsString)
        validador.validarDominioConocido(mailAsString)
        this.#email = mailAsString;
    }
}
