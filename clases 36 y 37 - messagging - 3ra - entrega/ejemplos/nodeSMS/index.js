import twilio from 'twilio'

const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+xxxxxxxxxxxxx',
    to: '+xxxxxxxxxxxxx'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
