export function requiereAutenticacion(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({ msg: 'este recurso requiere autenticacion' })
    }
}