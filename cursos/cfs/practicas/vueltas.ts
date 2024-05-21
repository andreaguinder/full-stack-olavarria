/*•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta*/


import * as rls from 'readline-sync';

let primeraVuelta : number = rls.questionFloat('Ingrese el tiempo de la primera vuelta: ');
let segundaVuelta : number = rls.questionFloat('Ingrese el tiempo de la segunda vuelta: ');
let terceraVuelta : number = rls.questionFloat('Ingrese el tiempo de la tercera vuelta: ');
let cuartaVuelta : number = rls.questionFloat('Ingrese el tiempo de la cuarta vuelta: ');

let tiempoTotal : number = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedioVueltas : number = tiempoTotal / 4;

console.log(`El tiempo total de las vueltas es ${tiempoTotal} y el promedio de ellas es ${promedioVueltas}`)