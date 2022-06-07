import expressSession from 'express-session'

const session = expressSession({
    secret: 'blabla',
    resave: false,
    saveUninitialized: false
})

export default session