/*2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él. */

import * as rls from 'readline-sync';

let nombreIngresado: string = rls.question('Ingrese un nombre: ');

let arregloDeNombres: string[] = ['Andrea', 'Carla', 'Sofia', 'Carlos', 'Juan'];

// Imprimir el arreglo
console.log('Arreglo de nombres:', arregloDeNombres);

let encontrado: boolean = false;

// Verificar si el nombre está en el arreglo
for (let i = 0; i < arregloDeNombres.length; i++) {
    if (arregloDeNombres[i] === nombreIngresado) {
        encontrado = true;
        break;
    }
}

// Imprimir si el nombre está o no en el arreglo
if (encontrado) {
    console.log(`El nombre ${nombreIngresado} está en el arreglo.`);
} else {
    console.log(`El nombre ${nombreIngresado} no está en el arreglo.`);
}