import path from 'path'
import dotenv from 'dotenv'

// esta variable existia en forma global antes de ES6
// pero ahora la podemos reemplazar, en este caso, por esta expresion
// que veremos en mas detalle en la clase siguiente :)
const __dirname = process.cwd()

dotenv.config({
  path:
    process.argv[2] === 'byn'
      ? path.resolve(__dirname, 'byn.env')
      : path.resolve(__dirname, 'colores.env'),
})

const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
  fondo,
  frente,
})
