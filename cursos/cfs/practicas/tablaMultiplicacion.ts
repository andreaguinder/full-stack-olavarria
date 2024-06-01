/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from 'readline-sync';

let numeroAmultiplicar : number = rls.questionInt ('Ingrese que número desea multiplicar: ');

for(let i = 1; i <= 10; i ++){
    let resultado : number = numeroAmultiplicar * i;

    console.log(`${numeroAmultiplicar} x ${i} = ${resultado}`);
}
