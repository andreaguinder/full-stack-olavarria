/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from 'readline-sync';

let numeroIngresado: number = rls.questionInt("Ingrese que número desea multiplicar: ");
let limiteTabla: number = rls.questionInt("Ingrese hasta qué número desea que se multiplique: ");

console.log('Tabla de multiplicación del ' + numeroIngresado + ' hasta el ' + limiteTabla);

for(let i = 0; i <= limiteTabla; i++){
 let resultado : number = numeroIngresado * i;

 console.log('El resultado de ' + numeroIngresado + ' x ' + i + ' es: ')
 console.log(numeroIngresado + ' x ' + i + ' = ' + resultado);
}
