/*•Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/
// Algoritmo SumaElementosArreglo

import * as rls from 'readline-sync';

let dimensionArreglo: number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;
let resultado: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
    arreglo[indice] = rls.questionInt(`Indique el nro que va en la posicion ${indice}: `);
    resultado += arreglo[indice];
}

for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log(`El numero en la posicion ${indice} es: ${arreglo[indice]}`);
}

console.log(`La suma del arreglo es: ${resultado}`); 
