import { Router } from 'express'
import { getUsuariosController } from '../controllers/usuariosController.js'

export const usuariosRouter = new Router()

usuariosRouter.get('/', getUsuariosController)