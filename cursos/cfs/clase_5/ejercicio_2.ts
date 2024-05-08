/* Paso 1: Realice un programa que devuelva la potencia de un número. 
Paso 2: La base y el exponente deben ser ingresados por teclado. 
Paso 3: Sólo deben admitirse exponentes mayores o iguales a cero. 
Paso 4: Recuerde que el resultado de un numero elevado a 0 es 1.
Paso 5: Separe la lógica de calcular la potencia utilizando métodos. */

/*Potencia: es multiplicar varias veces el mismo número por sí mismo. El número que
multiplicamos se llama base, y el exponente es el número de veces que se multiplica.
Por ejemplo, 2 · 2 · 2 · 2 · 2= 25 = 32.*/

import * as rls from 'readline-sync';

let base: number = rls.questionInt("Ingrese un número de base: ");
let exponente: number = rls.questionInt("Ingrese el número del exponente: ");

function calcularResultado(base : number, exponente : number){
    let resultado = 1;
    if(exponente >= 0){ // Sólo deben admitirse exponentes mayores o iguales a cero.
        for(let i = 0; i < exponente; i++){
            resultado *= base; // Multiplico la base por sí misma exponente veces.
        }
        console.log("El resultado es: " + resultado);
    } else {
        console.log("El exponente debe ser mayor o igual a cero.");
    }
}

calcularResultado(base, exponente);