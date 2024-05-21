//practicando funciones
import * as rls from 'readline-sync';

let nombreUsuario: string = rls.question('Ingrese un nombre: ');
let apellidoUsuario: string = rls.question('Ingrese un apellido: ');

function imprimirNombre(nombre: string, apellido: string) {
    nombreUsuario = nombre;
    apellidoUsuario = apellido;
    while ((nombreUsuario === '') && (apellidoUsuario === '')) {
        nombreUsuario = rls.question('Debe ingresar un nombre: ');
        apellidoUsuario = rls.question('Deber ingresar un apellido: ');
    }
}
    imprimirNombre(nombreUsuario, apellidoUsuario);
    console.log('El nombre ingresado es ' + nombreUsuario + ' ' + apellidoUsuario);