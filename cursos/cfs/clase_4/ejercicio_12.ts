/*Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

import * as rls from 'readline-sync';

let maximo: number = -10; // Inicializamos el máximo con el valor mínimo posible

while (true) {
    let valor: number = rls.questionInt("Ingrese un valor (0 para terminar): ");

    if (valor === 0) {
        break; // Salimos del bucle si se ingresa 0
    }

    if (valor > maximo) {
        maximo = valor; // Actualizamos el máximo si encontramos un valor mayor
    }
}

console.log("El máximo de los elementos introducidos es:", maximo);