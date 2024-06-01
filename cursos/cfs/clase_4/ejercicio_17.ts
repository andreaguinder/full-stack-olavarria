import * as rls from 'readline-sync';

let numeroDeseado : number = rls.questionInt('Escriba el número que quiere saber si es mayor a 20: ');

if(numeroDeseado >= 20){
    console.log('El número es mayor o igual a 20');
} else {
    console.log('El número es menor que 20');
}