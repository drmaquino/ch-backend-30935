import twilio from 'twilio'

const acctSid = 'xxxxx'
const authToken = 'xxxxx'

const twilioClient = twilio(acctSid, authToken)

const from = 'mi_nro'
const to = process.argv[2] || 'mi_nro'
const body = process.argv[3] || 'sms de prueba desde twilio'

const info = await twilioClient.messages.create({ body, from, to })

console.log(info)

// sample response
// {
//     body: 'Sent from your Twilio trial account - otro sms de prueba desde twilio',
//     numSegments: '1',
//     direction: 'outbound-api',
//     from: 'mi_nro',
//     to: 'algun_nro',
//     dateUpdated: 2021-07-14T16:40:47.000Z,
//     price: null,
//     errorMessage: null,
//     uri: '/2010-04-01/Accounts/AC429651f99e462fbfa8dcd49223746d53/Messages/SM50536d22b31848ca8cb90e1dd8e18a41.json',
//     accountSid: 'xxxxx',
//     numMedia: '0',
//     status: 'queued',
//     messagingServiceSid: null,
//     sid: 'SM50536d22b31848ca8cb90e1dd8e18a41',
//     dateSent: null,
//     dateCreated: 2021-07-14T16:40:47.000Z,
//     errorCode: null,
//     priceUnit: 'USD',
//     apiVersion: '2010-04-01',
//     subresourceUris: {
//       media: '/2010-04-01/Accounts/AC429651f99e462fbfa8dcd49223746d53/Messages/SM50536d22b31848ca8cb90e1dd8e18a41/Media.json'
//     }
//   }