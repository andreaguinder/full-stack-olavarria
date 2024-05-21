/*•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/

import * as rls from 'readline-sync';

let precio : number = rls.questionInt('Escriba el monto de la compra: ');


if (precio >= 1000){
    console.log('El precio es $' + (precio - precio * 0.1));
} else {
    console.log ('El precio es $' + precio);
}
