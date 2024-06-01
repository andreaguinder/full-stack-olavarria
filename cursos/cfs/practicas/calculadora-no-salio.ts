/*Implemente un método llamado calcularResultado que
reciba por parámetros los dos números y la opción y
retorne el resultado de la operación*/

import * as rls from 'readline-sync';

function dibujarGuiones(cantidad: number) {
    let linea: string = "";
    for (let x = 1; x <= cantidad; x++) {
        linea += "-";
    }
    console.log(linea);
}

function calcularResultado(numero1: number, numero2: number, opcionMenu: number): number {
    let resultado: number;
    if (opcionMenu === 1) {
        resultado = numero1 + numero2;
    } else if (opcionMenu === 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}

const numero1: number = parseFloat(rls.question("Ingrese el primer número: "));
const numero2: number = parseFloat(rls.question("Ingrese el segundo número: "));
const opcionMenu: number = parseInt(rls.question("Ingrese la opción del menú (1 para suma, 2 para resta): "));

let resultado: number = calcularResultado(numero1, numero2, opcionMenu);

dibujarGuiones(50);
console.log("El resultado es:", resultado);
dibujarGuiones(50);