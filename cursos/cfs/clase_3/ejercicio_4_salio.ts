// El código compruena si un número es mayor que 20 o no

import * as rls from 'readline-sync';

let nroDeseado : number = rls.questionInt ('Escriba el número que desea verificar si es mayor o no a 20: ');

if (nroDeseado > 20) {
    console.log('El número es mayor a 20: ' + nroDeseado);
} else {
    console.log('El número es menor que 20: ' + nroDeseado);
}