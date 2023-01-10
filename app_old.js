//console.clear();
const { argv } = require('process');
const { crearArchivoTabla } = require('./helpers/multiplicar'); //desestructuracion de objetos
// const multiplicar = require('./helpers/multiplicar'); // sin desestructuracion de objetos
/* const yargv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero a ser usado como base'
    })
    .check((yargv, optios)=>{
        if(isNaN(yargv.b)){
            throw ('El valor debe ser numerico')
        }
        return true;
    })
    .argv; 
 */ //una sola opcion

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
            demandOption: false,
            default: false,
            describe: 'Listar tabla generada'
        },
    })
    .check((yargv, optios) => {
        if (isNaN(yargv.b)) {
            throw ('El valor debe ser numerico')
        }
        return true;
    })
    .argv;



//const base = 3;

//crearArchivoTabla(base);  //llamado desestructuracion
// multiplicar.crearArchivoTabla(base); //llamado sin desestructuracion


/* console.log(process.argv) //esto es por procesos de node, es mejor con el paquete yargs
//const [,,arg3] = process.argv; desestructuracion de arreglo (sin valor por defecto)
const [,,arg3='base=5'] = process.argv;
const [, base] = arg3.split('=');
 */
//console.log(arg3)

console.log(yargv);
const base = yargv.base;

//const base = 2;


crearArchivoTabla(base, yargv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
