function sumar(num1, num2) {
    return num1 + num2
}

console.log(sumar(4, 5))

console.log(sumar('hola', 'chau'))


function cuentaDoble(num1, num2, operacion) {
    const result1 = operacion(num1, num2)
    const result2 = operacion(num1, num2)
    return result1 + result2
}

console.log(cuentaDoble(2, 3, sumar))

function crearMultiplicador(multip) {

    return function (n) {
        return multip * n
    }
}

// function doble(n) {
//     return 2 * n
// }

// function triple(n) {
//     return 3 * n
// }

// function cuadruple(n) {
//     return 4 * n
// }

const doble = crearMultiplicador(2)
const triple = crearMultiplicador(3)
const cuadruple = crearMultiplicador(4)

console.log(doble(10))
console.log(triple(10))
console.log(cuadruple(10))


const nombre = "marian"
// const fraseLarga = `hola como estas "${nombre}", todo bien? - '${sumar(2, 3)}'`

const fraseLarga = 'hola como estas "' + nombre + '", todo bien? - ' + "'" + (sumar(2, 3)) + "'"

console.log(fraseLarga)