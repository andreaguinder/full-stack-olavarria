/*•
Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
•
Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
•
Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor
•
Escriba un programa que calcule la probabilidad de sacar todos los dados 6
 siendo que tiramos N dados (dato ingresado por el usuario)*/

import * as rls from 'readline-sync';

let numDados = rls.questionInt("Ingrese el número de dados a tirar: ");
let probabilidad = 1; // Inicializamos la probabilidad en 1

// Calculamos la probabilidad iterando sobre el número de dados
for (let i = 0; i < numDados; i++) {
    probabilidad *= (1 / 6); // Multiplicamos la probabilidad por 1/6 en cada iteración
}

console.log(`La probabilidad de sacar todos los dados con valor 6 al tirar ${numDados} dados es aproximadamente ${probabilidad.toFixed(10)}`);