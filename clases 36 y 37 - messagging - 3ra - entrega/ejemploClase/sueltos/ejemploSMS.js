import twilio from 'twilio'

const accountSid = 'xxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+xxxxxxxxx',
    to: '+xxxxxxxxx'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
