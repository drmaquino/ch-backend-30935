import SmsSender from './TwilioSmsSender.js'
import { twilioAccountSid, twilioAuthToken, twilioSmsPhoneNumber } from '../../config.js'

const credenciales = {
    numero: twilioSmsPhoneNumber,
    usuario: twilioAccountSid,
    contrasenia: twilioAuthToken
}

export const clienteSms = new SmsSender(credenciales)