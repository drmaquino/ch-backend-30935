import { createTransport } from 'nodemailer';

const TEST_MAIL = 'ross.terry10@ethereal.email'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'AzRWwyuFNrb76h5FYb'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
