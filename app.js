const argv = require('yargs') //argv es un objeto se crea objeto
.command('crear', 'Crea un archivo con la tabla de multiplicar',{
    base: { //recibe como parametro base que es obligatorio
        demand: true,
        alias: 'b'
    ,
    description: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
})

.command('listar', 'Lista una tabla de multiplicar',{
    base: { //recibe como parametro base que es obligatorio
        demand: true,
        alias: 'b'
    ,
    description: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
})
.help()
.argv;

//importación simple
// const multiplicar = require('./multiplicacion/multiplicar'); //constante 

// importación con destructuracion
const {crearArchivo, listarTabla} = require('./multiplicacion/multiplicar');

let comando =argv._[0]


//utilizando expresiones regulares
// let regex = /(\d+)/g;
// let base = process.argv[2].match(regex)

// console.log(process.argv) //objeto process
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];

let argv2 = process.argv

console.log(comando);

switch(comando){
    case 'crear':       
    crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log( `Archivo creado: ${archivo}`))
        .catch(e => console.log(e));

        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log("comando no valido!")
}

