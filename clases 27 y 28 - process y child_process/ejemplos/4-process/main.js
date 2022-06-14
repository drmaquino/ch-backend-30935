/* ------------------------------------------------------- */
/*   GLOBAL PROCESS: process ( Objeto global de Node.js)   */
/* ------------------------------------------------------- */

// 1) Eventos
// 2) Propiedades
// 3) Métodos

// 1)
console.log('--------------- Process Events -------------------')
process.on('exit', code => {
    setTimeout(() => {
        console.log('Esto no corre')
    }, 0)
    console.log('Salida con código: ' + code)
})

// 2)
console.log('--------------- Process Properties -------------------')
process.stdout.write('Hola\n')
process.stdout.write('Como\n')
process.stdout.write('Están!\n')

process.argv.forEach((arg, index) => {
    console.log(index + ' -> ' + arg)
});
console.log(process.execPath)
console.log(process.platform)
console.log(process.pid)
console.log('Versión actual', process.version)


// 3)
console.log('--------------- Process Methods -------------------')
console.log('Carpeta corriente:', process.cwd())
console.log('Uso de memoria', process.memoryUsage())
process.exit(0)

console.log('Programa terminado')
