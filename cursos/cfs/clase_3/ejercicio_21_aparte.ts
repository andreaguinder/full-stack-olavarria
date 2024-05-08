/*Calculadora de edad de perro a humano:
Crea un programa que convierta la edad de un perro a la equivalente en años humanos.
Según algunas estimaciones, el primer año de vida de un perro equivale a 15 años humanos,
el segundo año equivale a 9 años humanos, y cada año subsiguiente equivale a 5 años humanos.*/

import * as rls from 'readline-sync';

let primerAnio : number = 15;
let segundoAnio : number = 9;
let tercerAnio : number = 5;

let tresAniosPerro : number = primerAnio + segundoAnio + tercerAnio;

console.log('El tiempo de vida en años humanos de un perro sera de: ' + tresAniosPerro);