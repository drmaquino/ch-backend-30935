const colors = require('colors')

function saludoAzul() {
    console.log(colors.blue('hola, mundo!'))
}

module.exports = { saludoAzul }