const usuarios = []

export function guardarUsuario(usuario) {
    usuarios.push(usuario)
}

export function obtenerUsuarios() {
    return usuarios
}

export function obtenerUsuarioPorNombre(username) {
    const usuario = usuarios.find(u => u.username === username)
    if (!usuario) throw new Error('no existe un usuario con ese nombre')
    return usuario
}

export function asegurarNombreUnico(username) {
    const usuario = usuarios.find(u => u.username === username)
    if (usuario) throw new Error('el nombre de usuario no está disponible')
}

export function obtenerUsuarioPorId(id) {
    const usuario = usuarios.find(u => u.id === id)
    if (!usuario) throw new Error('no existe un usuario con ese id')
    return usuario
}
