const argv = require("yargs")
                        .option('b',{
                            alias:"base",
                            type:'number',
                            demandOption:true,
                            describe: "Es la base de la tabla de multiplicar"
                        })
                        .option('l',{
                            alias:"listar",
                            type:'boolean',
                            default:false,
                            describe: "Muestra la tabla de multiplicar"
                        })
                        .option('h',{
                            alias:"hasta",
                            type:"number",
                            default:10,
                            describe:"Es hasta donde llega la tabla de multiplos"
                        })
                        .check((argv,options)=>{
                            if( isNaN(argv.base) ){
                                throw "La base no es un numero"
                            }
                            return true;
                        })
                        .check((argv,options)=>{
                            if( isNaN(argv.hasta) ){
                                throw "El limite no es un numero"
                            }
                            return true;
                        })
                        .argv

module.exports = argv;