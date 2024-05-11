
import * as rls from 'readline-sync';

let nombreA : string = rls.question('Ingrese un nombre: ');
let apellidoA : string = rls.question('Ingrese un apellido: ');

function imprimirNombre(nombre: string , apellido: string) : string {
    let nombreCompleto : string = nombre + ' ' + apellido;
    return nombreCompleto;
}

console.log('El nombre ingresado es: ' + imprimirNombre(nombreA, apellidoA));

