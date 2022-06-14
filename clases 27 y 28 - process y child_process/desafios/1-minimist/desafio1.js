const parseArgs = require('minimist');

const options = {
    alias: {
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    },
    default: {
        modo: 'prod',
        puerto: 0,
        debug: false
    }
}

const commandLineArgs = process.argv.slice(2);

const { modo, puerto, debug, _ } = parseArgs(commandLineArgs, options);

console.log({ modo, puerto, debug, otros: _ });
