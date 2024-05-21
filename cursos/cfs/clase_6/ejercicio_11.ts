/*Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario.
•Al final debe imprimir los valores por consola.
*/


// Algoritmo DosArreglos
import * as rls from 'readline-sync';
let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);
let indice: number;

for (indice = 0; indice < 2; indice++) {
    arregloNombres[indice] = rls.question(`Ingrese el nombre de la posicion ${indice}: `);
}
for (indice = 0; indice < 3; indice++) {
    arregloNumeros[indice] = rls.questionInt(`Ingrese el numero de la posicion ${indice}: `);
}
for (indice = 0; indice < 2; indice++) {
    console.log(`El nombre en la posicion ${indice} es: ${arregloNombres[indice]}`);
}
for (indice = 0; indice < 3; indice++) {
    console.log(`El numero en la posicion ${indice} es: ${arregloNumeros[indice]}`);
}