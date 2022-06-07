import { Router } from 'express'
import { requiereAutenticacion } from '../middleware/auth.js'
import datosController from '../controllers/datosController.js'

const datosRouter = new Router()

datosRouter.get('/', requiereAutenticacion, datosController.get)

export default datosRouter