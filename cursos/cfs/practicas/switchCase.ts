// practicas switch case

import * as rls from 'readline-sync';

//Solicitamos un valor al usuario
let nombreIngresado: string = rls.question("Ingrese un nombre: ");

while (nombreIngresado != 'ESC') {
    switch (nombreIngresado) {
        case 'Ana':
            console.log('Hola Ana');
            break;
        case 'Sofia':
            console.log('Hola Sofía');
            break;
        case 'Carlos':
            console.log('Hola Carlos');
            break;
        case 'Juan':
            console.log('Hola Juan');
            break;
    }

    nombreIngresado  = rls.question("Ingrese un nombre: ")
}