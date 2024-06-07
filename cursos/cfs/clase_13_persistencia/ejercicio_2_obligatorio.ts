// importamos la libreria
import fs from 'node:fs';

//variable fija
const productos : string [] = ['Leche', 'Galletitas', 'Harina', 'Queso'];

// PRIMER EJERCICIO
//productos
let contenidoProductos : string = '';

// recorremos el arreglo y por cada uno que sume va a llenar con el nombre de un producto y un espacio
for(let i : number = 0; i < productos.length; i++){
    contenidoProductos += `${productos[i]} `;
}

//Guardar información en txt
fs.writeFileSync('./productos.txt', contenidoProductos);
console.log('Finalizado');

//Leer información del txt
const datosProductos : string = fs.readFileSync('./productos.txt', 'utf-8');

// para que lo devuelva como array

const datosProductos2 : string = datosProductos.trim(); //saca los espacios
const nuevoArrayProductos : string [] = datosProductos2.split(' ');
console.log(nuevoArrayProductos);

// SEGUNDO EJERCICIO
// variable fija
const precios : number [] = [525, 3500, 400, 1999];

let preciosString : string = precios.toString();

//Guardar información en txt
fs.writeFileSync('./precios.txt', preciosString);
console.log('Finalizado');

//Leer información del txt
const datosPrecios : string = fs.readFileSync('./precios.txt', 'utf-8');

// para que lo devuelva como array

const nuevoArrayPrecios : string [] = datosPrecios.split(' ');
console.log(nuevoArrayPrecios);