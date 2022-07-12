import { Router, json } from 'express'
import * as personasController from './controllerPersonas.js'


export const routerPersonas = Router()

routerPersonas.use(json())

routerPersonas.post('/', personasController.post)