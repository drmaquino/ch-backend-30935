process.on('message', msg => {
    console.log(`mensaje del padre: ${msg}`)
    process.send('mundo!')
    process.exit()
})

process.send('listo')
