import nodemailer from 'nodemailer'

function createSendMail(mailConfig) {

  const transporter = nodemailer.createTransport(mailConfig);

  return function sendMail({ to, subject, text, html, attachments }) {
    const mailOptions = { from: mailConfig.auth.user, to, subject, text, html, attachments };
    return transporter.sendMail(mailOptions)
  }
}

function createSendMailEthereal() {
  return createSendMail({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: "mimaildeethreal",
      pass: "mipassdeethereal"
    }
  })
}

function createSendMailGoogle() {
  return createSendMail({
    service: 'gmail',
    auth: {
      user: 'mimaildegmail@gmail.com',
      pass: 'mipassdegmail'
    }
  })
}

// const sendMail = createSendMailEthereal()
const sendMail = createSendMailGoogle()

const cuentaDePrueba = 'rosario.price@ethereal.email'
const asunto = process.argv[ 2 ] || 'sin asunto'
const mensajeHtml = process.argv[ 3 ] || 'nada para decir'
const rutaAdjunto = process.argv[ 4 ]
const adjuntos = []
if (rutaAdjunto) {
  adjuntos.push({ path: rutaAdjunto })
}

const info = await sendMail({
  to: cuentaDePrueba,
  subject: asunto,
  html: mensajeHtml,
  attachments: adjuntos
})

console.log(info)