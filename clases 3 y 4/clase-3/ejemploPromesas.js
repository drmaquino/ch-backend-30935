function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('no se puede dividir por cero')
    }
    return dividendo / divisor
}

const resultado = dividir(4, 2)
const resultado2 = dividir(resultado, 2)

let datos

fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(function (res) {
        return res.json()
    })
    .then(function (obj) {
        console.log(obj)
        datos = obj
    })

async function main() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    const objeto = await response.json()
    console.log(objeto)
    datos = obj
    console.log(datos)
}

async function superMain() {
    await main()
    console.log('hola')
}

// el ejemplo de fetch funciona solamente con node v17, y ejecutando con:
// node --experimental-fetch ejemploPromesas.js