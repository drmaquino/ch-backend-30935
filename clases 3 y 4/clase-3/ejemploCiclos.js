const diccionario = {
    nombre: 'marian',
    rol: 'profe',
    edad: 35,
    colorFavorito: 'rojo'
}

// const diccionarioAsJSON = "{ \n \"nombre\":\"marian\", \n \"rol\":\"profe\", \n \"edad\": 35, \n \"colorFavorito\": \"rojo\" \n "

// console.log(diccionario)
// // console.log(diccionario.nombre)
// console.log(diccionarioAsJSON)
// // console.log(diccionarioAsJSON.nombre)

const letras = ['a', 'b', 'c']

// const col = {
//     [0]: 'a',
//     [1]: 'b',
//     [2]: 'c'
// }

// console.log(col)
// for (const cosa in diccionario) { console.log(diccionario[cosa]) }

// for (const cosa of letras) {
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (const element of array) {

// }

// const [primeraLetra, segundaLetra, terceraLetra] = letras

// console.log(primeraLetra)
// console.log(segundaLetra)

// console.log(terceraLetra)

// const [primeraLetra] = letras

// console.log(primeraLetra)

const { nombre, edad } = diccionario
console.log(nombre, edad)