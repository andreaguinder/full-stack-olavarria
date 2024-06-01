/*Implemente un algoritmo de ordenamiento con el método bubble sort
para que ordene un arreglo de logitud N en orden descendente*/

import * as rls from 'readline-sync';

let longitudNumero : number = rls.questionInt ('Indique la longitud del arreglo: ');
let listaNumeros : number [] = new Array(longitudNumero);

function llenarArreglo(listaNumeros : number []) : number [] {
    let i: number = 0;

    for(i; i < listaNumeros.length; i++) {
        listaNumeros[i] = rls.questionInt('Indique los números del arreglo: ');
    }

    console.log(listaNumeros);

    return listaNumeros;
}

llenarArreglo(listaNumeros);

function bubbleSort (listaNumeros : number []) : number [] {

    for(let i = 0; i < listaNumeros.length - 1; i++) {
        for(let j = 0; j < listaNumeros.length - i - 1; j++) {
            if(listaNumeros[j] < listaNumeros [j + 1]) {
                let aux = listaNumeros[j];
                listaNumeros[j] = listaNumeros[j + 1];
                listaNumeros[j + 1] = aux;
            }
        }

    }

    console.log(listaNumeros);
    return listaNumeros;
}

bubbleSort(listaNumeros);