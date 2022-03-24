const fs = require('fs')

// fs.writeFile('prueba.txt', 'probando...'.repeat(30_000_000), (err) => {
//     if (err) {
//         console.log(err)
//         console.log('terminé')
//     } else {
//         fs.readFile('prueba.txt', 'utf-8', (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(result)
//             }
//             console.log('terminé')
//         })
//     }
// })

// try {
//     fs.writeFileSync('prueba.txt', 'probando...'.repeat(3_000))
//     const result = fs.readFileSync('prueba.txt', 'utf-8')
//     console.log(result)
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log('terminé')
// }

fs.promises.writeFile('prueba.txt', 'probando...'.repeat(30_000_000))
    .then(() => fs.promises.readFile('prueba.txt', 'utf-8'))
    .then((datos) => console.log(datos))
    .catch((err) => console.log(err))
    .finally(() => console.log('terminé'))

async function trabajarConArchivos() {
    try {
        await fs.promises.writeFile('prueba.txt', 'probando...'.repeat(30))
        const datos = await fs.promises.readFile('prueba.txt', 'utf-8')
        console.log(datos)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('terminé')
    }
}

trabajarConArchivos()
console.log(10 + 10)