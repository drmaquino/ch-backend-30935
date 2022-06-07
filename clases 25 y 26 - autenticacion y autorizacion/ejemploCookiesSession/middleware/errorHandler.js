function errorHandler(error, req, res, next) {
    switch (error.tipo) {
        case 'FALTAN_DATOS':
            res.status(400)
            break
        case 'AUTH_ERROR':
            res.status(401)
            break
        case 'NOT_FOUND':
            res.status(404)
            break
        default:
            res.status(500)
    }
    res.json({ msj: error.message })
}

export default errorHandler