const datos = {
    info: 'super secreta'
}

export const datosController = (req, res) => {
    res.json({ datos, user: req.user })
}