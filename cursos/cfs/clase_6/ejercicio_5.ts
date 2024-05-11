
import * as rls from 'readline-sync';

let numero : number = rls.questionInt('Ingrese un número: ');
let numeroDos : number = rls.questionInt('Ingrese un número que compruebe si es múltiplo del primero: ');

function esMultiplo(num: number, multiploDe : number){
    return num % multiploDe === 0;
}
let multiplo : boolean = esMultiplo(numero, numeroDos);
console.log(multiplo);
