const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar = false, hasta) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) { //antes era estatico hasta 10

            //salida += `${base} X ${i} = ${base * i}\n`; //sin colors
            consola += `${colors.cyan(base)} ${'x'.green} ${colors.cyan(i)} ${'='.green}  ${colors.magenta(base * i)}\n`;
            salida += `${base} X ${i} = ${base * i}\n`; //sin colors

        }

        if (listar) {
            console.log("=================".green);
            console.log("   Tabla del".green, colors.blue(base));
            console.log("=================".green);
            console.log(consola);
        }
            /* 
            fs.writeFile(`tabla-${base}.txt`, salida, err => { //sin el writeFileSync
                if (err) throw err;
            
                console.log(`se ha creado la tabla del ${base}`);
            }); */

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return `tabla-${base}.txt`;

        } catch (err) {

            throw err;
        }
    }



/* const crearArchivoTabla = (base = 5) => {

    return new Promise((resolve, reject) => {

        console.log("=================");
        console.log("   Tabla del", 3);
        console.log("=================");

        let salida = '';

        for (let j = 1; j <= 10; j++) {
            const base2 = j;

            salida += `${base} X ${base2} = ${base * base2}\n`;
        }

        console.log(salida);


        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);

    }) 
    
}*/ // con new promise en lugar de async

module.exports = {
        crearArchivoTabla
        //funcion : crearArchivoTabla //tambienpuede hacerse clave valor mientras la clave sea diferente al objeto dl valor
    }