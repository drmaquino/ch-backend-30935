import Socio from './Socio.js'
import Email from './Email.js'
import { crearNroSocio } from './NroSocio.js'
import { guardarSocio } from '../persistencia/daoAfiliados.js'

export async function afiliarNuevoSocio(datosPersonales) {
    datosPersonales.nroSocio = crearNroSocio()
    const email = new Email(datosPersonales.email)
    datosPersonales.email = email.value
    const socio = new Socio(datosPersonales)
    await guardarSocio(socio)
    return socio
}

// const socio = await afiliarNuevoSocio({
//     nroSocio: 'abc123',
//     nombre: 'marian',
//     apellido: 'profe',
//     direccion: '',
//     email: 'profe@coder.com'
// })

// console.log(socio.nroSocio)
// console.log(socio.nombre)
// console.log(socio.apellido)
// console.log(socio.direccion)
// console.log(socio.email)
// // socio.nroSocio = 'xyz'
// // console.log(socio.nroSocio)