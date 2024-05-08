/*•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta*/


import * as rls from 'readline-sync';

let vuelta1 : number = rls.questionFloat('Escriba el tiempo de la 1ra vuelta: ');
let vuelta2 : number = rls.questionFloat('Escriba el tiempo de la 2da vuelta: ');
let vuelta3 : number = rls.questionFloat('Escriba el tiempo de la 3ra vuelta: ');
let vuelta4 : number = rls.questionFloat('Escriba el tiempo de la 4ta vuelta: ');

let tiempoPromedio : number = (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4;

console.log('El promedio de las 4 vueltas es: ' + tiempoPromedio);
