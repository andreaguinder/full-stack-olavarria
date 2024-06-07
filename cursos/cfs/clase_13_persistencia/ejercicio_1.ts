import fs from 'node:fs';

//let contenido : string = 'nuevo contenido';

/*
let contenido : number = 9;

let contenidoString : string = contenido.toString();
*/

const nombres : string [] = ['Juan', 'Amalia', 'Nicolas', 'Carla'];

let contenido : string = '';

// recorremos el arreglo y por cada uno que sume va a llenar con un nombre y un espacio
for(let i : number = 0; i < nombres.length; i++){
    contenido += `${nombres[i]} `;
}

//Guardar información en txt
fs.writeFileSync('./test.txt', contenido);
console.log('Finalizado');

//Leer información del txt
const datos : string = fs.readFileSync('./test.txt', 'utf-8');

// para que nos lo devuelva como array
// el metodo trim elimina el espacio de una cadena de array de adelante y de atras

const datos2 : string = datos.trim(); //saca los espacios
const nuevoArray : string [] = datos2.split(' ');
console.log(nuevoArray);

