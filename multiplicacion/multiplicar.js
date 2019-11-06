const fs = require('fs'); //constante 

let listarTabla = (base, limite) =>{
    for (let i=1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base *i}\n`);
        }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //validar que sea un numero
        if(!Number(base)){
            reject(`EL valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';

    for (let i=1; i <= limite; i++){
    data += `${base} * ${i} = ${base *i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => { //guarda archivos y agrega 
        if (err) 
            reject(err);
        else{
            resolve(`tabla-${base}-al${limite}.txt`)
        }
        });
    });
}

module.exports ={ //objeto > propiedad : valor
    crearArchivo
};