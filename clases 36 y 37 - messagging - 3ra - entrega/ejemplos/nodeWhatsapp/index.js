import twilio from 'twilio'

const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const mensaje = {
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491100000000',
    body: 'Hola soy un WSP desde Node.js!',
}

// mediaUrl: [ 'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg' ],

try {
    const message = await client.messages.create(mensaje)
    console.log(message)
} catch (error) {
    console.log(error)
}
