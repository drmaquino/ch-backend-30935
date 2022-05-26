import fs from 'fs'

// o usar dotenv !

function cargarCredenciales(ruta) {
    const archivo = fs.readFileSync(ruta, 'utf-8')
    const credenciales = {}
    const pares = archivo.split('\n')
    for (const par of pares) {
        const [key, value] = par.split('=')
        credenciales[key] = value
    }
    return credenciales
}

const credenciales = cargarCredenciales('./credenciales.txt')

console.log(credenciales)

export const sitio = credenciales.sitio ?? 'google.com'
export const mongoUser = credenciales.mongodb_user ?? 'admin'
export const mongoPass = credenciales.mongodb_pass ?? 'admin'

