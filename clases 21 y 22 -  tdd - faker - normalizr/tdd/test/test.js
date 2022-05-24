import assert from 'assert'
import { Email } from '../src/Email.js'

function test1() {
    const emailAsString = 'profe@coderhouse.com'
    const correo = new Email(emailAsString)

    const resultado = correo.asString()
    assert.strictEqual(resultado, emailAsString)
}

function test2() {
    const emailAsString = 'marian@coderhouse.com'
    const correo = new Email(emailAsString)

    const resultado = correo.asString()
    assert.strictEqual(resultado, emailAsString)
}

function test3() {
    try {
        const emailAsString = 'marian'
        new Email(emailAsString)
        throw new Error('falló el test 3')
    } catch (error) {
        const mensajeDeErrorEsperado = 'formato invalido: falta el @'
        assert.strictEqual(error.message, mensajeDeErrorEsperado)
    }
}

function test4() {
    try {
        const emailAsString = 'marian@xxxxx.com'
        new Email(emailAsString)
        throw new Error('falló el test 4')
    } catch (error) {
        const mensajeDeErrorEsperado = 'dominio desconocido: xxxxx.com'
        assert.strictEqual(error.message, mensajeDeErrorEsperado)
    }
}

test1()
test2()
test3()
test4()
console.log('TODO OK!')