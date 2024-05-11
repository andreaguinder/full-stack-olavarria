// practicas ciclo for

import * as rls from 'readline-sync';

//Solicitamos un valor al usuario
let numeroIngresado: number = rls.questionInt("Ingrese un número entero: ");

// En cada repetición, calculamos el número ingresado x el número de repetición
for (let i : number = 1; i <= 10; i++){
    let resultado : number = numeroIngresado * i;
    console.log(numeroIngresado + ' x ' + i + ' = ' + resultado);
}

