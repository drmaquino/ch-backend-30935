const express = require('express')
const exphbs = require('express-handlebars');
const session = require('express-session')

/* ------------------ PASSPORT -------------------- */
const passport = require('passport');
const { Strategy: TwitterStrategy } = require('passport-twitter');

const TWITTER_CONSUMER_KEY = 'Rrwmzd30UzqKM4c2oFYU9s6HM';
const TWITTER_CONSUMER_SECRET = 'hQxAMHPafw5ApDmUYL3nW9IpTlzNFYxwUJt6VirVjRsC5wHOXT';

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    console.log(userProfile)
    return done(null, userProfile);
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

/* ------------------------------------------------ */

const app = express()

app.use(session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

/* ------------------ PASSPORT -------------------- */
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------------------ */
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

/* --------- LOGIN ---------- */
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin'
}));

app.get('/faillogin', (req, res) => {
    res.render('login-error', {});
})

/* --------- DATOS ---------- */
app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        //reinicio contador
        if (!req.user.contador) req.user.contador = 0
        req.user.contador++
        res.render('datos', {
            nombre: req.user.displayName,
            username: req.user.username,
            foto: req.user.photos[0].value,
            contador: req.user.contador
        });
    } else {
        res.redirect('/login')
    }
})

/* --------- LOGOUT ---------- */
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
