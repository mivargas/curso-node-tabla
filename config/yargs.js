const yargv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Numero a ser usado como base'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'Listar tabla generada'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Numero maximo hasta donde llegara la tabla'
        },
    })
    .check((yargv, optios) => {
        if (isNaN(yargv.b)) {
            throw ('El valor de la base debe ser numerico')
        }

        if (isNaN(yargv.h)) {
            throw ('El valor de hasta debe ser numerico')
        }
        return true;
    })
    .argv;

module.exports =  yargv;