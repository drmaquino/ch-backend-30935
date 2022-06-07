import express from 'express'

import session from './middleware/session.js'

import usuariosRouter from './routers/usuariosRouter.js'
import authRouter from './routers/authRouter.js'
import datosRouter from './routers/datosRouter.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())

app.use(session)

app.get('/', (_, res) => { res.send('ok') })

app.use('/api/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/api/datos', datosRouter)
app.use(errorHandler)


const server = app.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port} `)
})
