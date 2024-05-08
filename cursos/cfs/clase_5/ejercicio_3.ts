/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico
verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero*/


import * as rls from 'readline-sync';

function esMultiplo(numero: number, numero2: number): boolean {
    let resultado: number = numero % numero2;
    return resultado === 0;
}

let primerNumero: number = rls.questionInt("Ingrese un número: ");
let segundoNumero: number = rls.questionInt("Ingrese el segundo número: ");

console.log(esMultiplo(primerNumero, segundoNumero));
