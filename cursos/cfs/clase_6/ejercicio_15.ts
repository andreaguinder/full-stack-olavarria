/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

let arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMasGrande: number = arreglo[0];

// Encontrar el número más grande
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMasGrande) {
        numeroMasGrande = arreglo[i];
    }
}

// Función si es par
function esPar (){
    if (numeroMasGrande % 2 === 0) {
        console.log(numeroMasGrande + ' es un número par.');
    } else {
        console.log(numeroMasGrande + ' es un número impar.');
    }
}

esPar();