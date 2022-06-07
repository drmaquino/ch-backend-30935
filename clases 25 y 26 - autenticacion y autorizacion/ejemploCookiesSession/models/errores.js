export function crearErrorDatos(mensaje) {
    const error = new Error(mensaje)
    error.tipo = 'FALTAN_DATOS'
    return error
}

export function crearErrorAutenticacion() {
    const error = new Error('error en la autenticacion')
    error.tipo = 'AUTH_ERROR'
    return error
}

export function crearErrorNoEncontrado() {
    const error = new Error('recurso no encontrado')
    error.tipo = 'NOT_FOUND'
    return error
}