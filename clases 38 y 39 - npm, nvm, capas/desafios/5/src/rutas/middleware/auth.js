export function auth(req, res, next) {
    if (req.header('secret') === 'palabraclave') {
        next()
    } else {
        res.status(403).json({ error: 'no tiene permiso para acceder a este recurso' })
    }
}