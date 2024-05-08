"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.question('Ingrese su altura');
console.log(alturaPersona);
var precioProducto = readlineSync.question('Ingrese el precio');
console.log(precioProducto);
/*
let precioFinal = precioProducto * 0.1;

console.log(precioFinal);
*/ 
