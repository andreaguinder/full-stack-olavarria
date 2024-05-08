/*•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/

import * as rls from 'readline-sync';

let numeroIngresado : number = rls.questionInt("Ingrese un número: ");

    // Verificamos si el valor ingresado es un número
    if (isNaN(numeroIngresado)) {
        console.log("¡Debe ingresar un número válido!");
    } else {
        if (numeroIngresado === 0) {
            console.log("El número es 0 (cero).");
        } else if (numeroIngresado % 2 === 0) {
            console.log("El número es par.");
        } else {
            console.log("El número es impar.");
        }
    }
