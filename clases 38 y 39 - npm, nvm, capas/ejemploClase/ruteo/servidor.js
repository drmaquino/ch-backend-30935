import express from 'express'

import { afiliadosRouter } from './afiliadosRouter.js'

export const app = express()

app.use('/api/afiliados', afiliadosRouter)