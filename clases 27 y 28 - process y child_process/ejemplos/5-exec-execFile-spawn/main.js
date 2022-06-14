import { exec, execFile, spawn } from 'child_process'

// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.log('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

// exec('node holamundox5.js', (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.log('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

// execFile('node', ['holamundox5.js'], (error, stdout, stderr) => {
//     if (error) {
//         throw error
//     }
//     if (stderr) {
//         console.log('hubo un error: ', stderr)
//     }
//     console.log(stdout)
// })

const spawned = spawn('node', ['holamundox5.js'])
spawned.stdout.on('data', data => {
    console.log(`STD: ${data}`)
})
spawned.stderr.on('data', data => {
    console.log(`ERR: ${data}`)
})



