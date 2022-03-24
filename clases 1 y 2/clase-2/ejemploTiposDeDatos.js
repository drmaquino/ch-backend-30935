const array = [1, 2, 3, 4, 5]

const diccionario = {
    nombre: 'marian', // key: value    ==>   k,v
    apellido: 'aquino',
    rol: 'profe'
}

// esto se puede
array.push(6)

// esto no funciona! tira error! porque es CONST
array = []

// esto si se puede
diccionario['pais'] = 'argentina'
diccionario.provincia = 'capital federal'

// esto no funciona! tira error! porque es CONST
diccionario = {
    animales: 'perros'
}

function nombre(parametros) {
    //cuerpo
}