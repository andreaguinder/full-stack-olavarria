
/*•Realice una calculadora que sume o reste
según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumarán
• Si ingresa 2 los números se restarán
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (40 guiones ‘-’ ):*/

import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese un primer número: ");
let numero2: number = rls.questionInt("Ingrese un segundo número: ");
let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
/*
function dibujarGuiones() {
    let i: number;
    let linea: string = "";
    for (i = 0; i <= 40; i++) {
        linea = linea + "-";
    };
    console.log(linea);
}
*/
if (opcionMenu == 1) {
    dibujarGuiones(30);
    console.log("el resultado es: ", numero1 + numero2);
    dibujarGuiones(100);
} else if (opcionMenu == 2) {
    dibujarGuiones(10);
    console.log("el resultado es: ", numero1 - numero2);
    dibujarGuiones(50);
}

function dibujarGuiones(cantidad:number) {
    let x:number, linea:string = "";
    for (x=1; x<=cantidad; x++) {
    linea += "-";
    }
    console.log(linea);
    }