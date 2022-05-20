import personas from './personas/index.js'
import autos from './autos/index.js'

await personas.agregar({ nombre: 'marian', edad: 36 })

console.log(await personas.listar())

await autos.agregar({ marca: 'ford', modelo: 'k' })
console.log(await autos.listar())