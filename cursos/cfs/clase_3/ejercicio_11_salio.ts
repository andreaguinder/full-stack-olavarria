/*•Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más*/

import * as rls from 'readline-sync';

let alturaPersona : number = rls.questionFloat('Escriba la altura de la persona: ');
let alturaPermitida : number = 1.30;

if (alturaPersona >= alturaPermitida){
    console.log('La persona puede entrar a la montaña rusa');
} else  {
    console.log ('La persona no puede entrar a la montaña rusa');
}