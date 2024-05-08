/*• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

import * as rls from 'readline-sync';

let cantidadPositivos: number = 0; // Inicializamos el contador de valores positivos
let totalValores: number = 0; // Inicializamos el contador del total de valores

while (true) {
    let valor: number = rls.questionInt("Ingrese un valor (0 para terminar): ");

    if (valor === 0) {
        break; // Salimos del bucle si se ingresa 0
    }

    totalValores++; // Incrementamos el contador del total de valores

    if (valor > 0) {
        cantidadPositivos++; // Incrementamos el contador de valores positivos si el valor es mayor a 0
    }
}

// Calculamos el porcentaje de valores positivos respecto del total
let porcentajePositivos: number = (cantidadPositivos / totalValores) * 100;

console.log("Cantidad de valores mayores a 0:", cantidadPositivos);
console.log("Porcentaje de valores positivos respecto del total:", porcentajePositivos.toFixed(2) + "%");