import { Router } from 'express';
import { personasDao } from '../daos/personas/index.js'

const personasRouter = Router()

personasRouter.get('/', async (req, res) => {
    const productos = await personasDao.listarAll()
    res.json(productos)
})

personasRouter.get('/:id', async (req, res) => {
    const productos = await personasDao.listar(req.params.id);
    res.json(productos)
})

personasRouter.post('/', async (req, res) => {
    const prodAgregado = await personasDao.guardar(req.body);
    res.json(prodAgregado)
})

personasRouter.put('/:id', async (req, res) => {
    const prodActualizado = await personasDao.actualizar(req.body);
    res.json(prodActualizado)
})

personasRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await personasDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { personasRouter }