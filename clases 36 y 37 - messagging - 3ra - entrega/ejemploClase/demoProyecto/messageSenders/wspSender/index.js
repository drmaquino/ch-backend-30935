import WhatsappSender from './TwilioWhatsappSender.js'
import { twilioAccountSid, twilioAuthToken, twilioWhatsappPhoneNumber } from '../../config.js'

const credenciales = {
    numero: twilioWhatsappPhoneNumber,
    usuario: twilioAccountSid,
    contrasenia: twilioAuthToken
}

export const clienteWsp = new WhatsappSender(credenciales)