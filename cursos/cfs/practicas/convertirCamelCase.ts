// toLowerCase & toUpperCase
// son funciones minis, llevan los parentesis ()
/*
let textoCombinado : string = 'aAaAaAa';
console.log(textoCombinado.toLowerCase()); // todo a minuscula
console.log(textoCombinado.toUpperCase()); // todo a mayuscula

console.log(textoCombinado[0].toUpperCase()); // solo la primera posicion devuelve y en mayuscula
*/
/*
Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

		convertir texto segun camel case

el programa lo debe convertir en:

		convertirTextoSegunCamelCase*/

        import * as rls from 'readline-sync';

        let textoCombinado : string = rls.question('Ingrese una frase de 4 palabras: ')