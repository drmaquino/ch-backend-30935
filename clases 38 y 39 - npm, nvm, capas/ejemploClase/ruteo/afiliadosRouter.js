import { Router, json } from 'express'
import * as afiliadosController from './afiliadosController.js'

export const afiliadosRouter = Router()

afiliadosRouter.use(json())

afiliadosRouter.post('/', afiliadosController.post)