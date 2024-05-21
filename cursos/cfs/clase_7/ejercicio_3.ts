/*• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay

9

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros*/

import * as rls from 'readline-sync';

let dimensionArreglo: number = rls.questionInt('Ingrese cuántos números tendrá el arreglo: ');
let ingresadosPorUsuario: number[] = new Array(dimensionArreglo);
let i: number;


for (i = 0; i < dimensionArreglo; i++) {
    ingresadosPorUsuario[i] = rls.questionInt('ingrese el valor del arreglo en la posición ' + i + ' ');

}

let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;

for (i = 0; i < dimensionArreglo; i++) {
    if (ingresadosPorUsuario[i] == 0) {
        numCero++;
    } else if (ingresadosPorUsuario[i] > 0) {
        numPos++;
    } else {
        numNeg++;
    }
}
console.log(`Hay ${numPos} positivos, ${numNeg} negativos, ${numCero} ceros.`);