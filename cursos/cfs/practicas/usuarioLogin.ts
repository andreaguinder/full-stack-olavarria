/*• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan*/

import * as rls from 'readline-sync';

let nombre : string = rls.question("Ingrese nombre: ");
let contraseña : string = rls.question("Ingrese contraseña: ");


if (nombre == 'Juan' && contraseña == 'claveJuan'){
    console.log('El usuario puede ingresar');
} else {
    console.log ('El usuario no puede ingresar');
}


