import yargsParser from 'yargs/yargs'

const yargs = yargsParser(process.argv.slice(2))

const argv = yargs
    .alias({
        n: 'nombre',
        a: 'apellido',
        v: 'vivo'
    })
    .default({
        nombre: 'pepe',
        apellido: 'copado',
        vivo: true
    })
    .boolean('vivo')
    .argv

console.log(argv)
