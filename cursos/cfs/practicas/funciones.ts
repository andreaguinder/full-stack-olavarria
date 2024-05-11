//practicando funciones
import * as rls from 'readline-sync';
/*

//función saludar

function saludar(){
    console.log('Hola gente!');
}
saludar();
*/

// funcion que pida un nombre al usuario y lo hace 3 veces porque llamamos a la funcion 3 veces
/*
function solicitarNombre (){
    let nombreIngresado : string = rls.question('Escribe un nombre: ');
    console.log('El nombre ingresado es: ' + nombreIngresado);
}

solicitarNombre();
solicitarNombre();
solicitarNombre();
*/

// funcion que pida un nombre al usuario y lo hace 3 veces porque usamos un ciclo for que la llama 3 veces
/*
function solicitarNombre (){
    let nombreIngresado : string = rls.question('Escribe un nombre: ');
    console.log('El nombre ingresado es: ' + nombreIngresado);
}

for(let i : number = 0; i < 3; i++){
    solicitarNombre();
}
*/

// funcion con parametros
/*
function conParametros (parametro1 : string, parametro2 : string){
    console.log(parametro1 + ' ' + parametro2);
}

conParametros ('Hola', 'gente');
*/

// funcion para sumar
// inicializamos resultado en 0
/*
let resultado : number = 0;

function suma (numero1 : number, numero2 : number){
    resultado = numero1 + numero2;
    console.log(resultado);
}

function mostrar (mensaje : number){
    console.log(mensaje);
}

suma(6,3);
mostrar(resultado);
suma(25,5);
mostrar(resultado);
*/
/*
function sumar(primerNumero: number, segundoNumero : number){
    return primerNumero + segundoNumero;
}

let resultado = sumar(5,8);
console.log(resultado);
*/
/* esta no funciono
let resultado : number = 0;

function sumar(primerNumero: number, segundoNumero : number){
    let numero1: number = rls.questionInt("Ingrese un número: ");
    let numero2: number = rls.questionInt("Ingrese un segundo número: ");

    if ((primerNumero = numero1) && (segundoNumero = numero2)){
        return resultado = numero1 + numero2;
    }
}

sumar(numero1 = rls.questionInt("Ingrese un número: "), numero2 = rls.questionInt("Ingrese un segundo número: "));
console.log(resultado);
*/

// funcion calculadora con switch case
/*
function calculadora(primerNumero : number, segundoNumero : number, operacion : string){
    switch (operacion){
        case '+':
            return primerNumero + segundoNumero;
            break;
        case '-':
            return primerNumero - segundoNumero;
            break;
        case '*':
            return primerNumero * segundoNumero;
        case '/':
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(5,2, '+'));
*/

// funciones anonimas
/*
const suma = function (a : number, b : number) {return a + b};
const resta = function (a : number,b : number){return a - b}

console.log(suma(2, 5));
console.log(resta(25, 5));
*/

