/*Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva
la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16,
por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior
*/


import * as rls from 'readline-sync';

function cantidadDeDivisores(numero: number, numero2: number) : number{
    let resultado: number = numero / numero2;
    if(primerNumero / segundoNumero){
        return resultado;
    }
}

let primerNumero: number = rls.questionInt("Ingrese un número: ");
let segundoNumero: number = rls.questionInt("Ingrese un segundo número: ");
console.log(primerNumero);

console.log(cantidadDeDivisores(primerNumero, segundoNumero));