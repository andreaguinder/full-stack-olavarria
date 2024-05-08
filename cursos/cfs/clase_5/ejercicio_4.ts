/*Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva
la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16,
por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior
*/


import * as rls from 'readline-sync';

function esMultiplo(numero: number, divisor: number): boolean {
    return numero % divisor === 0;
}

function cantidadDeDivisores(numero: number): number {
    let cantidad = 0;
    for (let i = 1; i <= numero; i++) {
        if (esMultiplo(numero, i)) {
            cantidad++;
        }
    }
    return cantidad;
}

let numero: number = rls.questionInt("Ingrese un número: ");
console.log('El número de divisores de ' + numero + ' es: ' + cantidadDeDivisores(numero));