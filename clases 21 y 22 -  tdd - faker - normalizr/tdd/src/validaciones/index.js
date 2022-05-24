const dominiosConocidos = ['coderhouse.com'];

function extraerDominio(emailAsString) {
    return emailAsString.split('@')[1];
}

const validador = {
    validarContieneArroba: (mailAsString) => {
        if (!mailAsString.includes('@'))
            throw new Error('formato invalido: falta el @');
    },
    validarDominioConocido: (mailAsString) => {
        const dominio = extraerDominio(mailAsString);
        if (!dominiosConocidos.includes(dominio))
            throw new Error(`dominio desconocido: ${dominio}`);
    }
}

// import MailValidator from 'mail-validator'

// const validador = {
//     validarContieneArroba: (mailAsString) => {
//         MailValidator.validateArroba(mailAsString)
//     },
//     validarDominioConocido: (mailAsString) => {
//         MailValidator.validateDomain(mailAsString)
//     }
// }

export default validador