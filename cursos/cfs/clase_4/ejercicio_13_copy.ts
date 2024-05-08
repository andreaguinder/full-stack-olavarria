/*• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

import * as rls from 'readline-sync';

let valorUsuario : number = rls.questionInt('Ingrese números (0 para terminar) ');
let cantidadPositivos : number = 0;
let cantidadTotal : number = 0;

while(valorUsuario !== 0){
    if(valorUsuario > 0){
        cantidadPositivos++;
    }
    cantidadTotal++;
    valorUsuario = rls.questionInt('Ingrese números (0 para terminar) ');
}

// console.log(cantidadPositivos);
// console.log(cantidadTotal);

console.log('La cantidad de valores introducidos fue ' + cantidadTotal + ', de ellos ' + cantidadPositivos + ' fueron positivos, es decir, el porcentaje de positivos es ' + (cantidadPositivos/cantidadTotal * 100)) + '%';