const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('Listar');
    break;
  case 'crear':
    console.log('Crear');
    crearArchivo(argv.base)
          .then(archivo => console.log(`Archivo creado: ${ archivo }`))
          .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido.');

}

//console.log(argv);

//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
// let param = argv[2];
// let base = param.split('=')[1];

// crearArchivo(base)
//           .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//           .catch(err => console.log(err));