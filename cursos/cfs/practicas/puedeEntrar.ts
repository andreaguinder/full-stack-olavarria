/*•Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más*/

import * as rls from 'readline-sync';
let alturaPersona : number = rls.questionInt('Ingrese cuánto mide en cm de altura: ');

if (alturaPersona > 130 ){
    console.log('Puede entrar a la montaña rusa');
} else {
    console.log ('No puede entrar a la montaña rusa');
}