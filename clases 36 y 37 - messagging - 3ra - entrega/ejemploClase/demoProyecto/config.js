import 'dotenv/config'

export const twilioAccountSid = process.env.TWILIO_ID
export const twilioAuthToken = process.env.TWILIO_TOKEN
export const twilioSmsPhoneNumber = process.env.TWILIO_SMS_NUMBER
export const twilioWhatsappPhoneNumber = process.env.TWILIO_WHATSAPP_NUMBER
export const smsAdmin = process.env.SMS_ADMIN