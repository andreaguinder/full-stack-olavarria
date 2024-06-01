/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información
*/

import * as rls from 'readline-sync';

let nota, suma, promedio, contador : number;
suma=0;
for (contador=1; contador<11; contador++) {
nota = rls.questionInt("Ingrese la nota " + contador + ": ");
suma +=nota;
}
promedio = suma/10;
console.log("El promedio de las notas es: " + promedio);