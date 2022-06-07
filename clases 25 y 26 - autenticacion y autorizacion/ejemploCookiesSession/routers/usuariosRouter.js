import { Router } from 'express'

import usuariosController from '../controllers/usuariosController.js'

const usuariosRouter = Router()

usuariosRouter.post('/', usuariosController.post)
usuariosRouter.get('/', usuariosController.get)

export default usuariosRouter