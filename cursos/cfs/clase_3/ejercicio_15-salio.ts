/*•Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/

import * as rls from 'readline-sync';

let mes: string = rls.question("Ingrese el mes: ");
let cantidadDeLaCompra: number = rls.questionInt("Ingrese cantidad de la compra: ");
let precio: number = rls.questionInt("Ingrese el precio: ");

if (mes === 'Octubre' && cantidadDeLaCompra >= 1 && precio >= 1000) {
    let descuento = 0.1; // 10% de descuento
    if (cantidadDeLaCompra >= 5) {
        descuento += 0.05; // 5% de descuento adicional si la cantidad es mayor o igual a 5
    }
    let precioFinal = precio - (precio * descuento);
    console.log('El precio tendrá descuento y será el precio final de: $'+ precioFinal);
} else {
    console.log('El precio final será de $' + precio);
}