const datos = []

async function recuperarTodos() {
    return datos
}

async function guardar(dato) {
    datos.push(dato)
    return dato
}

export {
    recuperarTodos,
    guardar
}