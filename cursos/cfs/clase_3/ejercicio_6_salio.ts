// Suma de números con números ingresados por consola

import * as rls from 'readline-sync';
let primerNumero: number = rls.questionInt("Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero: number = rls.questionInt("Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
let resultado: number = primerNumero + segundoNumero;
console.log("El resultado de la suma es ", resultado);