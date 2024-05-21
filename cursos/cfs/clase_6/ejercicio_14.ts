/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

let arreglo : number [] = new Array (4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16);
let numeroMasGrande : number;
let indice : number = 0;

while(indice < 12){
    console.log('El número de la posición ', indice, ' es ', arreglo[indice]);
    indice++;
}

if (arreglo [9] > 0){
    console.log('El número más grande es: ' + arreglo[9]);
}

numeroMasGrande = arreglo[9];

while (numeroMasGrande !== 0) {
    if (numeroMasGrande % 2 === 0) {
        console.log(numeroMasGrande + ' es un número par.');
    } else {
        console.log(numeroMasGrande + ' es un número impar.');
    }
}