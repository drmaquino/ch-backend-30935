const arr = [
    { nombre: 'a', edad: 11 },
    { nombre: 'b', edad: 12 },
    { nombre: 'c', edad: 13 },
    { nombre: 'd', edad: 14 },
]

// console.log(arr)

// console.log(...arr)

// console.log(1, 2, 3, 4, 5)

function mostrar(str) {
    console.log(str)
}

// mostrar(...arr)

// mostrar({ nombre: 'a', edad: 11 }, { nombre: 'b', edad: 12 }, { nombre: 'c', edad: 13 }, { nombre: 'd', edad: 14 })

// const arrTransformado = arr.map(elem => elem.nombre)
// const arrTransformado = arr.map(function (elem) { return elem.nombre })

function extraerNombre(objeto) {
    return objeto.nombre
}

function toUpperCase(string) {
    return string.toUpperCase()
}

const arrTransformado = arr
    .map(extraerNombre)
    .map(toUpperCase)
    .join(', ')

console.log(arrTransformado)
