// Este código muestra un resultado de precio con descuento a un producto

import * as readlineSync from 'readline-sync';    

let precioProducto = readlineSync.questionInt('Ingrese el precio: '); 

let precioDescuento = precioProducto * 0.1;

let precioFinal: number = precioProducto - precioDescuento;

console.log('El precio final de su producto es: ' + precioFinal);


