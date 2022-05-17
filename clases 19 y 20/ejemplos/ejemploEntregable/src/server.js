import express from 'express'
import { personasRouter } from './routers/personasRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/personas', personasRouter)

export default app