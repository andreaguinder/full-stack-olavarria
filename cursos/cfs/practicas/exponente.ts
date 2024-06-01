/* Paso 1: Realice un programa que devuelva la potencia de un número. 
Paso 2: La base y el exponente deben ser ingresados por teclado. 
Paso 3: Sólo deben admitirse exponentes mayores o iguales a cero. 
Paso 4: Recuerde que el resultado de un numero elevado a 0 es 1.
Paso 5: Separe la lógica de calcular la potencia utilizando métodos. */

/*Potencia: es multiplicar varias veces el mismo número por sí mismo. El número que
multiplicamos se llama base, y el exponente es el número de veces que se multiplica.
Por ejemplo, 2 · 2 · 2 · 2 · 2= 25 = 32.*/


import * as rls from 'readline-sync';

function calcularPotencia(base: number, exponente: number): number {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

let base: number = rls.questionInt("Ingrese un número de base: ");
let exponente: number = rls.questionInt("Ingrese el número del exponente (mayor o igual a 0): ");

if (exponente < 0) {
    console.log("El exponente debe ser mayor o igual a 0.");
} else {
    let resultado = calcularPotencia(base, exponente);
    console.log("El resultado de", base, "elevado a", exponente, "es:", resultado);
}
