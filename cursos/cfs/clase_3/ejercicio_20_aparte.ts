/*Lista de compras:
Escribe un programa que permita al usuario ingresar una lista de compras. Luego,
muestra la lista de compras al usuario y le pregunta si
desea agregar más elementos a la lista.*/

import * as rls from 'readline-sync';

let itemIngresado1: string = rls.question("Ingrese un item a su Lista de cosas para hacer: ");
let itemIngresado2: string = rls.question("Ingrese un item a su Lista de cosas para hacer: ");
let itemIngresado3: string = rls.question("Ingrese un item a su Lista de cosas para hacer: ");
let itemIngresado4: string = rls.question("Ingrese un item a su Lista de cosas para hacer: ");

// Verificamos si se han ingresado elementos en la lista
if (itemIngresado1 || itemIngresado2 || itemIngresado3 || itemIngresado4) {
    console.log('Su lista de tareas para hacer es: \n' + itemIngresado1 + '\n' + itemIngresado2 + '\n' + itemIngresado3 + '\n' + itemIngresado4);
} else {
    // Si no se han ingresado elementos, preguntamos al usuario si desea agregar uno extra
    console.log('No ha ingresado ningún elemento a su lista de tareas.');

    const deseaAgregarExtra: string = rls.question('¿Desea agregar un item extra a su lista? (si/no): ');

    if (deseaAgregarExtra.toLowerCase() === 'si') {
        const itemIngresadoExtra: string = rls.question("Ingrese un nuevo item a su Lista de cosas para hacer: ");
        console.log('Su lista de tareas para hacer es: \n' + itemIngresado1 + '\n' + itemIngresado2 + '\n' + itemIngresado3 + '\n' + itemIngresado4 + '\n' + itemIngresadoExtra);
    } else {
        console.log('Gracias por usar la aplicación.');
    }
}