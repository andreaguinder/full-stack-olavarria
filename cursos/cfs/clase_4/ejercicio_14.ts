/*•
Diseñar un algoritmo que lea números enteros hasta teclear 0
•
Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
•
Pensar cuidadosamente cómo debemos inicializar las variables*/


import * as rls from 'readline-sync';

let numerosIngresados: number[] = [];
let numero: number;

// Leer números hasta que se ingrese 0
do {
    numero = rls.questionInt('Ingrese un número entero (0 para terminar): ');
    if (numero !== 0) {
        numerosIngresados.push(numero);
    }
} while (numero !== 0);

// Inicializar máximo y mínimo con el primer valor ingresado
let maximo: number = numerosIngresados[0];
let minimo: number = numerosIngresados[0];
let sumaTotal: number = 0;

// Calcular máximo, mínimo y suma total
for (let i = 0; i < numerosIngresados.length; i++) {
    sumaTotal += numerosIngresados[i];
    if (numerosIngresados[i] > maximo) {
        maximo = numerosIngresados[i];
    }
    if (numerosIngresados[i] < minimo) {
        minimo = numerosIngresados[i];
    }
}

// Calcular media
let media: number = sumaTotal / numerosIngresados.length;

// Calcular porcentaje de valores positivos
let cantidadPositivos: number = numerosIngresados.filter(num => num > 0).length;
let porcentajePositivos: number = (cantidadPositivos / numerosIngresados.length) * 100;

console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);
console.log("Media:", media.toFixed(2));
console.log("Porcentaje de valores positivos respecto del total:", porcentajePositivos.toFixed(2) + "%");