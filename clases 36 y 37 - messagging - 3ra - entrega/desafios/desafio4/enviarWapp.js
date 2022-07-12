import twilio from 'twilio'

const accountSid = 'ssssssssssssssssssssssssssssssssss';
const authToken = 'tttttttttttttttttttttttttttttttt';

const client = twilio(accountSid, authToken)

const numero = process.argv[ 2 ]
const mensaje = process.argv[ 3 ]

try {
    const message = await client.messages.create({
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`
    })
    console.log(message.sid)
} catch (error) {
    console.log(error)
}
