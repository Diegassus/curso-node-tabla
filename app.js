const { number, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require("./config/yargs");

require("colors");

console.clear()

console.log(argv.base ," y " , argv.listar);

// const [ , , arg3="base=5" ] = process.argv;
// const [,base ] = arg3.split("=");

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));