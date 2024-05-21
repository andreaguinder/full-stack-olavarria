import * as rls from 'readline-sync';

let nombreA : string;
let apellidoA : string;;

function obtenerNombre (){
    nombreA = rls.question('ingrese su nombre: ');
    apellidoA = rls.question('ingrese su apellido: ');
    while((nombreA === '') || (apellidoA === '')){
        nombreA = rls.question('ingrese su nombre: ');
        apellidoA = rls.question('ingrese su apellido: ');
    }

    return {nombreA, apellidoA};
}

function saludar(nombre: string, apellido: string) {
    console.log(`Usuario Autenticado: \n¡Hola, bienvenido/a ${nombre} ${apellido}!`);
}

function iniciarApp (){
    console.log('Iniciando App...');
    console.log('Autenticando usuario, por favor espere...')
    let {nombreA, apellidoA} = obtenerNombre()
    saludar(nombreA, apellidoA);
}

iniciarApp();
