import { Router } from 'express'
import controlador from '../controlador/auth.js'

const router = Router()

router.get('/register', controlador.register)

export default router