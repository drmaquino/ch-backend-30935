const express = require('express')

/******************  JWT  ******************/

const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "myprivatekey";

function generateToken(user) {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '24h' });
  return token;
}

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'not authenticated'
    });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        error: 'not authorized'
      });
    }

    req.user = decoded.data;
    next();
  });
};

/******************  DATABASE  ******************/

const usuarios = []

/******************  SERVER  ******************/

const app = express()

/******************  MIDDLEWARES  ******************/

app.use(express.json())

/******************  ROUTES  ******************/

// REGISTER
app.post('/register', (req, res) => {

  const { nombre, password, direccion } = req.body

  const yaExiste = usuarios.find(usuario => usuario.nombre == nombre)
  if (yaExiste) {
    return res.json({ error: 'ya existe ese usuario' });
  }

  const usuario = { nombre, password, direccion }

  usuarios.push(usuario)

  const access_token = generateToken(usuario)

  res.json({ access_token })
})

// LOGIN
app.post('/login', (req, res) => {

  const { nombre, password } = req.body

  const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)
  if (!usuario) {
    return res.json({ error: 'credenciales invalidas' });
  }

  const access_token = generateToken(usuario)

  res.json({ access_token })
})

// DATOS
app.get('/datos', auth, (req, res) => {
  const usuario = usuarios.find(usuario => usuario.nombre == req.user.nombre);
  res.json(usuario)
})

/******************  LISTEN  ******************/

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
