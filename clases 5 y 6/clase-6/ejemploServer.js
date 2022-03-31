const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    // console.log('llegó un evento!')
    // console.log(peticion)
    const { url: ruta } = peticion
    switch (ruta) {
        case '/llegada':
            respuesta.end('Hola mundo')
            break
        case '/salida':
            respuesta.end('Chau mundo')
            break
        default:
            respuesta.end('ok...')
            break
    }

    // console.log('\n\n//================================================================================================//\n\n')
    // respuesta.end('Hola mundo')
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
