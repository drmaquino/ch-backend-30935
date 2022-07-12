import { createTransport as crearClienteDeMail } from 'nodemailer'

const nodemailerConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'xxxxxxxxxxxx@ethereal.email',
        pass: 'xxxxxxxxxxxxxx'
    }
}

const clienteDeMail = crearClienteDeMail(nodemailerConfig)

const mailOptions = {
    from: 'el profe',
    to: 'coco@coco.com',
    subject: 'mail para coco',
    // text: 'hola mundo',
    html: `<h1>Coco</h1>
Felicidades, coco!`
}

try {
    await clienteDeMail.sendMail(mailOptions)
    console.log('OK')
} catch (error) {
    console.log(error)
}