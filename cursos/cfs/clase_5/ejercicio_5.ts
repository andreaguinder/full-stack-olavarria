/*Implemente un método llamado imprimirNombre que reciba un nombre y un apellido
y devuelva los dos datos concatenados en una variable de tipo string. 
El string devuelto debe imprimirse por consola.

Refactorizar el método dibujarGuiones utilizado para el ejercicio de la
calculadora realizado anteriormente */

import * as rls from 'readline-sync';

function imprimirNombre(nombre: string, apellido: string): void {
    let resultado = nombre + ' ' + apellido;

    while (nombre === '' || apellido === '') {
        console.log('Debe ingresar tanto un nombre como un apellido.');
        nombre = rls.question("Ingrese un nombre: ");
        apellido = rls.question("Ingrese un apellido: ");
        resultado = nombre + ' ' + apellido;
    }

    console.log('El nombre que ingresaste es: ' + resultado);
}

imprimirNombre(rls.question("Ingrese un nombre: "), rls.question("Ingrese un apellido: "));