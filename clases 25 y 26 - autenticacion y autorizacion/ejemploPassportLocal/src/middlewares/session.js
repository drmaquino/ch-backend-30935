import session from 'express-session'

export const sessionHandler = session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
})
