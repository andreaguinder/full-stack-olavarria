/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from 'readline-sync';

let numeroIngresado: number = rls.questionInt("Ingrese el número para mostrar la tabla de multiplicación: ");
let limiteTabla: number = rls.questionInt("Ingrese hasta qué número desea mostrar la tabla de multiplicación: ");

console.log(`Tabla de multiplicación del ${numeroIngresado} hasta el ${limiteTabla}:`);

for (let i = 1; i <= limiteTabla; i++) {
    let resultado: number = numeroIngresado * i;
    console.log(`${numeroIngresado} x ${i} = ${resultado}`);
}