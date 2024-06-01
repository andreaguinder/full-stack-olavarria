/*Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

/*
import * as rls from 'readline-sync';

let clave : string = 'eureka';
let ingreseClave : number = 3;
for(ingreseClave  = 3; clave != 'eureka'; ingreseClave++){
    clave = rls.question('Ingrese la clave: ');
}*/

import * as rls from 'readline-sync';

const claveReal: string = 'eureka';
let claveUsuario: string = rls.question('Ingrese su clave: ');
let contador: number = 1;
let intentos: number = 3;

while ((contador < intentos) && (claveUsuario != claveReal)) {
    claveUsuario = rls.question('Ingrese su clave: ');
    contador++;
}

if (claveReal != claveUsuario) {
    console.log('Te has quedado sin intentos');
} else {
    console.log('La clave es correcta.');
}