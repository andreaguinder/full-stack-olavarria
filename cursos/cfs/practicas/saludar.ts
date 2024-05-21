import * as rls from 'readline-sync';

let nombreA : string = rls.question('ingrese su nombre: ');
let apellidoA : string = rls.question('ingrese su apellido: ');

function saludar (nombre : string, apellido : string){
    nombre = nombreA;
    apellido = apellidoA;
    while((nombre === '') || (apellido === '')){
        nombreA = rls.question('ingrese su nombre: ');
        apellidoA = rls.question('ingrese su apellido: ');
    }
}

saludar(nombreA, apellidoA);
console.log(`Hola bienvenido/a ${nombreA} ${apellidoA}`);