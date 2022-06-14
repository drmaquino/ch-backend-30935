import { fork } from 'child_process'

const forked = fork('child.js')

forked.on('message', msg => {
    if (msg == 'listo') {
        forked.send('Hola, ')
    } else {
        console.log(`Mensaje del hijo: ${msg}`)
    }
})
