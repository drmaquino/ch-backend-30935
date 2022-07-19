const operaciones = []

function guardar(obj) {
    operaciones.push(obj)
}

function listar() {
    return operaciones
}

export {
    guardar,
    listar
}
