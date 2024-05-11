
import * as rls from 'readline-sync';

let base : number = rls.questionInt('Ingrese la base: ');
let exponente : number = rls.questionInt('Ingrese el exponente: ');

while (exponente < 0){
    console.log('Solo se permiten exponentes Mayor o Igual a cero.');
    exponente = rls.questionInt ('Ingrese el número del exponente: ');
}

function calcularPotencia (base : number, exponente : number){
    let resultado : number;
    resultado = base**exponente;
    return resultado;
}

let resultadoFinal = calcularPotencia(base, exponente);
console.log('El resultado es: ' + resultadoFinal);

calcularPotencia(base, exponente);