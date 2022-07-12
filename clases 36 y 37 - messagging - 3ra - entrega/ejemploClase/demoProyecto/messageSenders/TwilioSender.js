import twilio from 'twilio'

export default class TwilioSender {
    constructor({ numero, usuario, contrasenia }) {
        this.numero = numero
        this.cliente = twilio(usuario, contrasenia)
    }

    async enviar({ numero, texto }) {

        const mensaje = {
            from: this.numero,
            to: numero,
            body: texto,
        }

        try {
            await this.cliente.messages.create(mensaje)
        } catch (error) {
            const customError = new Error(error.message)
            customError.tipo = 'ERROR_MENSAJERIA'
            throw customError
        }
    }
}

