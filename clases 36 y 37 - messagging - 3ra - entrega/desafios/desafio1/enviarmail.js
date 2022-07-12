import nodemailer from 'nodemailer'

function createSendMail(mailConfig) {

  const transporter = nodemailer.createTransport(mailConfig);

  return function sendMail({ to, subject, text, html }) {
    const mailOptions = { from: mailConfig.auth.user, to, subject, text, html };
    return transporter.sendMail(mailOptions)
  }
}

function createSendMailEthereal() {
  return createSendMail({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: "mimaildeethereal",
      pass: "mipassdeethereal"
    }
  })
}

const sendMail = createSendMailEthereal()

const cuentaDePrueba = 'mimaildeethereal'
const asunto = process.argv[ 2 ] || 'sin asunto'
const mensajeHtml = process.argv[ 3 ] || 'nada para decir'

const info = await sendMail({
  to: cuentaDePrueba,
  subject: asunto,
  html: mensajeHtml
})

console.log(info)