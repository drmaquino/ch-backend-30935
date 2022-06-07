import passport from 'passport'

export const registroController = passport.authenticate('registro', {
    failureRedirect: '/auth/failRegister',
    successRedirect: '/auth/successRegister'
})

export const loginController = passport.authenticate('login', {
    failureRedirect: '/auth/failLogin',
    successRedirect: '/auth/successLogin',
})

export function successRegisterController(req, res) {
    res.json({ msg: 'ok' })
}

export function failRegisterController(req, res) {
    res.status(400).json({ err: 'fallo el registro' })
}

export function successLoginController(req, res) {
    res.json({ msg: 'ok' })
}

export function failLoginController(req, res) {
    res.status(400).json({ err: 'fallo el login' })
}


export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 