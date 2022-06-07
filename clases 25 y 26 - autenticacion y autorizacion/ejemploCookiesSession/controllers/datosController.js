const datosController = {
    get: (req, res) => {
        res.json({ msj: req.session.mensajeBienvenida })
    }
}

export default datosController