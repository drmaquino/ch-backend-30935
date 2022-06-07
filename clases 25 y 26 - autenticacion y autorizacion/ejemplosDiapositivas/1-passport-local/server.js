const express = require('express');
const exphbs = require('express-handlebars');
const bCrypt = require('bcrypt');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require('./routes');
const config = require('./config');
const controllersdb = require('./controllersdb');
const User = require('./models');

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
},
  (req, username, password, done) => {
    User.findOne({ 'username': username }, function (err, user) {

      if (err) {
        console.log('Error in SignUp: ' + err);
        return done(err);
      }

      if (user) {
        console.log('User already exists');
        return done(null, false)
      }

      const newUser = {
        username: username,
        password: createHash(password),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }

      User.create(newUser, (err, userWithId) => {
        if (err) {
          console.log('Error in Saving user: ' + err);
          return done(err);
        }
        console.log(user)
        console.log('User Registration succesful');
        return done(null, userWithId);
      });
    });
  })
)

passport.use('login', new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err)
        return done(err);

      if (!user) {
        console.log('User Not Found with username ' + username);
        return done(null, false);
      }

      if (!isValidPassword(user, password)) {
        console.log('Invalid Password');
        return done(null, false);
      }

      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});

function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
}

function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

// ------------------------------------------------------------------------------
//  EXPRESS
// ------------------------------------------------------------------------------

const app = express();
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');


const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    httpOnly: false,
    secure: false,
    maxAge: config.TIEMPO_EXPIRACION
  },
  rolling: true,
  resave: true,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  next()
});

// ------------------------------------------------------------------------------
//  ROUTING GET POST
// ------------------------------------------------------------------------------
//  INDEX
app.get('/', routes.getRoot);

//  LOGIN
app.get('/login', routes.getLogin);
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), routes.postLogin);
app.get('/faillogin', routes.getFaillogin);

//  SIGNUP
app.get('/signup', routes.getSignup);
app.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup' }), routes.postSignup);
app.get('/failsignup', routes.getFailsignup);


function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get('/ruta-protegida', checkAuthentication, (req, res) => {
  const { user } = req;
  console.log(user);
  res.send('<h1>Ruta OK!</h1>');
});


//  LOGOUT
app.get('/logout', routes.getLogout);

//  FAIL ROUTE
app.get('*', routes.failRoute);


// ------------------------------------------------------------------------------
//  LISTEN SERVER
// ------------------------------------------------------------------------------
controllersdb.conectarDB(config.URL_BASE_DE_DATOS, err => {

  if (err) return console.log('error en conexión de base de datos', err);
  console.log('BASE DE DATOS CONECTADA');

  app.listen(port, (err) => {
    if (err) return console.log('error en listen server', err);
    console.log(`Server running on port ${port}`);
  });
});
