/*• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/

import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese un número entero: ");
let numero2: number = rls.questionInt("Ingrese otro número entero: ");
let suma: number = 0;


for (let i = numero1; i <= numero2; i++) {
    suma += i;
}

console.log('La suma de los números entre ' + numero1 + ' y ' + numero2 + ' es igual a ' + suma);
