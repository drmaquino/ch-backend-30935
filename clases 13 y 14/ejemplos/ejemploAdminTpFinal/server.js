import express from 'express'

const app = express()

let esAdmin = false

function soloParaAdmins(req, res, next) {
    if (esAdmin) {
        next()
    } else {
        res.sendStatus(403)
    }
}

app.get('/login', (req, res) => {
    esAdmin = true
    res.sendStatus(200)
})

app.get('/logout', (req, res) => {
    esAdmin = false
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    res.send('soy genial')
})

app.post('/', soloParaAdmins, (req, res) => {
    res.send('soy genial')
})

app.all('*', (req, res) => {
    res.status(404).json(/*no implementada!*/)
})

app.listen(8080)