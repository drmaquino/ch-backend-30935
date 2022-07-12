import express from 'express'

import { routerPersonas } from './routerPersonas.js'

const app = express()

app.use('/api/personas', routerPersonas)

app.use((err, req, res, next) => {
    res.status(400).json(err) // elegir codigo que corresponda! segun el error
})

export function conectar() { app.listen(8080) }