import axios from 'axios'
import { setTimeout } from 'timers/promises'

import '../src/server.js'

const host = 'http://localhost:8080'

const { data: dato1 } = await axios.post(`${host}/api/datos`, { nombre: 'aaa' })
console.log(dato1)

await setTimeout(100)
const { data: dato2 } = await axios.post(`${host}/api/datos`, { nombre: 'bbb' })
console.log(dato2)

await setTimeout(100)
const { data: dato3 } = await axios.post(`${host}/api/datos`, { nombre: 'ccc' })
console.log(dato3)

const { data: datos } = await axios.get(`${host}/api/datos`)
console.log(datos)