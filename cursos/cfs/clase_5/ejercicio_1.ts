/* Paso 1: Realice un programa que devuelva la potencia de un número. 
Paso 2: La base y el exponente deben ser ingresados por teclado. 
Paso 3: Sólo deben admitirse exponentes mayores o iguales a cero. 
Paso 4: Recuerde que el resultado de un numero elevado a 0 es 1.
Paso 5: Separe la lógica de calcular la potencia utilizando métodos. */

/*Potencia: es multiplicar varias veces el mismo número por sí mismo. El número que
multiplicamos se llama base, y el exponente es el número de veces que se multiplica.
Por ejemplo, 2 · 2 · 2 · 2 · 2= 25 = 32.*/


import * as rls from 'readline-sync';

let base: number = rls.questionInt("Ingrese un numero de base: ");
let exponente: number = rls.questionInt("Ingrese el número del exponente: ");
//let calcularResultado : number = base ^ exponente;
exponente >= 0;
/*
if(base === 0){
    base = rls.questionInt("Ingrese un numero de base: ");
} else if{
    calcularResultado;
}
*/
function calcularResultado(base : number, exponente : number){
    let resultado = 0;
    if(base === 0){
        resultado = 1
    } else if (base != 0){
        resultado = base ^ exponente;
        console.log(resultado);
    }
}

calcularResultado(base, exponente);