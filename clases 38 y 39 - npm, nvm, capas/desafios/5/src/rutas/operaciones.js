import { Router } from 'express'
import controlador from '../controlador/operaciones.js'

import { auth } from './middleware/auth.js'

const router = Router()

router.get('/suma', controlador.suma)

router.get('/resta', controlador.resta)

router.get('/mult', controlador.mult)

router.get('/div', controlador.div)

router.get('/listar', auth, controlador.listar)

export default router