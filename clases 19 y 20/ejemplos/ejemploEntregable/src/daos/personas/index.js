import config from '../../config.js'

let personasDao

switch (process.env.PERS) {
    case 'json':
        const { default: PersonasDaoArchivo } = await import('./PersonasDaoArchivo.js')
        personasDao = new PersonasDaoArchivo(config.fileSystem.path)
        break
    case 'firebase':
        const { default: PersonasDaoFirebase } = await import('./PersonasDaoFirebase.js')
        personasDao = new PersonasDaoFirebase()
        break
    case 'mongodb':
        const { default: PersonasDaoMongoDb } = await import('./PersonasDaoMongoDb.js')
        personasDao = new PersonasDaoMongoDb()
        break
    default:
        const { default: PersonasDaoMem } = await import('./PersonasDaoMem.js')
        personasDao = new PersonasDaoMem()
        break
}

export { personasDao }