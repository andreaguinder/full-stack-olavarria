// let numerosDeseados : number[] = new Array(5);

// numerosDeseados[0] = 20;
// numerosDeseados[1] = 14;
// numerosDeseados[2] = 8;
// numerosDeseados[3] = 0;
// numerosDeseados[4] = 5;

// let i : number = 0;
// while (i < 5) {
//     console.log ("El numero en la posicion " + i + " es " + numerosDeseados[i]);
//     i++;
//     }


import * as rls from 'readline-sync';

let numerosDeseados : number[] = new Array(5);

numerosDeseados[0] = rls.questionInt('Ingrese un número: ');
numerosDeseados[1] = rls.questionInt('Ingrese un número: ');
numerosDeseados[2] = rls.questionInt('Ingrese un número: ');
numerosDeseados[3] = rls.questionInt('Ingrese un número: ');
numerosDeseados[4] = rls.questionInt('Ingrese un número: ');

let i : number = 0;
while (i < 5) {
    console.log ("El numero en la posicion " + i + " es " + numerosDeseados[i]);
    i++;
    }