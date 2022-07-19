import { sumar, restar, multiplicar, dividir, listar as listarNeg } from '../negocio/operaciones.js'

const suma = async (req, res) => {
    let { a, b } = req.query
    res.send(`La suma de ${a} y ${b} es ${await sumar(Number(a), Number(b))}`)
}

const resta = async (req, res) => {
    let { a, b } = req.query
    res.send(`La resta de ${a} y ${b} es ${await restar(Number(a), Number(b))}`)
}

const mult = async (req, res) => {
    let { a, b } = req.query
    res.send(`La mult de ${a} y ${b} es ${await multiplicar(Number(a), Number(b))}`)
}

const div = async (req, res) => {
    let { a, b } = req.query
    res.send(`La div de ${a} y ${b} es ${await dividir(Number(a), Number(b))}`)
}

const listar = async (req, res) => res.json(await listarNeg())

export default {
    suma,
    resta,
    mult,
    div,
    listar
}
