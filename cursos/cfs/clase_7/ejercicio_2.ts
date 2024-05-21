/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt('Ingrese cuántos números tendrá el arreglo: ');
let ingresadosPorUsuario : number[] = new Array(dimensionArreglo);
let numerosAlReves : number [] = new Array(dimensionArreglo);
let i : number;

for (let i = 0; i < dimensionArreglo; i++) {
    ingresadosPorUsuario [i] = rls.questionInt('ingrese el valor del arreglo en la posición '+ i + ' ' );
    numerosAlReves[dimensionArreglo - i - 1 ] = ingresadosPorUsuario [i];
}

console.log('Los números ingresados son: ' + numerosAlReves);
