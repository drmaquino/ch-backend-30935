import { Router } from 'express'
import controlador from '../controlador/operaciones.js'

const router = Router()

router.get('/suma', controlador.suma)

router.get('/resta', controlador.resta)

router.get('/mult', controlador.mult)

router.get('/div', controlador.div)

router.get('/listar', controlador.listar)

export default router