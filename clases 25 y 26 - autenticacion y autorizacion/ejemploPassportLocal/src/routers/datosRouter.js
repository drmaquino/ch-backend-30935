import { Router } from 'express'

import { datosController } from '../controllers/datosController.js'
import { requiereAutenticacion } from '../middlewares/auth.js'

export const datosRouter = new Router()

datosRouter.get('/', requiereAutenticacion, datosController)