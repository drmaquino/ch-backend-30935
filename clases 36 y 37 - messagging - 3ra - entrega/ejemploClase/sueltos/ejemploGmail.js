import nodemailer from 'nodemailer'

const nodemailerConfig = {
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxxxxxxxxxx@gmail.com',
        pass: 'xxxxxxxxxxxxx'
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const mailOptions = {
    from: 'xxxxxxxxxxxxxxx@gmail.com',
    to: 'xxxxxxxxxxxx@ethereal.email',
    subject: 'saludos con adjuntos desde gmail',
    html: `<h1>IUPIIIIII</h1>`,
    attachments: [
        { path: './nodemailer.png' },
        { path: './nodemailer.png' },
        { path: './nodemailer.png' },
    ]
}

try {
    const ack = await transporter.sendMail(mailOptions)
    console.log(ack)
    console.log('OK')
} catch (error) {
    console.log(error)
}