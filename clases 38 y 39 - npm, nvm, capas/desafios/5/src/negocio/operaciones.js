import { suma, resta, mult, div } from 'cds-operaciones'
import { guardar, listar as listarPers } from '../persistencia/operaciones.js'

async function sumar(a, b) {
    let r = suma(a, b)
    await guardar({
        tipo: 'sumar',
        params: [ a, b ],
        result: r,
        timestamp: Date.now()
    })
    return r
}

async function restar(a, b) {
    let r = resta(a, b)
    await guardar({
        tipo: 'restar',
        params: [ a, b ],
        result: r,
        timestamp: Date.now()
    })
    return r
}

async function multiplicar(a, b) {
    let r = mult(a, b)
    await guardar({
        tipo: 'multiplicar',
        params: [ a, b ],
        result: r,
        timestamp: Date.now()
    })
    return r
}

async function dividir(a, b) {
    let r = div(a, b)
    await guardar({
        tipo: 'dividir',
        params: [ a, b ],
        result: r,
        timestamp: Date.now()
    })
    return r
}

async function listar() {
    return await listarPers()
}

export {
    sumar,
    restar,
    multiplicar,
    dividir,
    listar
}