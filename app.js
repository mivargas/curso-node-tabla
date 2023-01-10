const { crearArchivoTabla } = require('./helpers/multiplicar'); //desestructuracion de objetos
const  yargv  = require('./config/yargs')
require('colors');

console.log(yargv);
const base = yargv.base;


crearArchivoTabla(base, yargv.l, yargv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
