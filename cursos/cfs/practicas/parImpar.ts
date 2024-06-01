/*• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

import * as rls from 'readline-sync';

let numeroIngresado : number = rls.questionInt('Ingrese un número: ');

if(numeroIngresado === 0){
    console.log('El número debe ser mayor que cero');
    numeroIngresado = rls.questionInt('Ingrese un número distinto a 0: ')
}else if(numeroIngresado % 2 === 0){
    console.log('El número ingresado es par.');
} else{
    console.log('El número ingresado es impar.')
}
/*
let numeroUsuario: number = rls.questionInt("Ingrese un número entero mayor que cero: ");

while (numeroUsuario <= 0) {
    console.log("El número ingresado debe ser mayor que cero.");
    numeroUsuario = rls.questionInt("Ingrese un número entero mayor que cero: ");
}

while (numeroUsuario !== 0) {
    if (numeroUsuario % 2 === 0) {
        console.log(numeroUsuario + ' es un número par.');
    } else {
        console.log(numeroUsuario + ' es un número impar.');
    }

    numeroUsuario = rls.questionInt("Ingrese otro número entero (o ingrese 0 para salir): ");
}*/