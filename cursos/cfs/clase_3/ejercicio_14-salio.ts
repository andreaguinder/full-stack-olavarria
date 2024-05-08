//• Dada la edad de una persona informa si es mayor de 18 o no

import * as rls from 'readline-sync';
let edad : number = rls.questionInt("Introduce: ");
if (edad >= 18) {
console.log("Es mayor de edad");
} else {
console.log("No es mayor de edad");
}