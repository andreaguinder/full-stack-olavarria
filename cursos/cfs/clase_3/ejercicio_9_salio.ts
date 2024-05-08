import * as rls from 'readline-sync';

// comprueba si puedo manejar de noche
let lucesEncendidas : string = rls.question('Escriba si las luces están encendidas: ');
let litrosNafta : number = rls.questionInt('Escriba los litros de nafta que tiene: ');

if ((lucesEncendidas === 'si') && (litrosNafta > 0)) {
 console.log('Puedo manejar de noche');
} else {
    console.log('No puedo manejar de noche')
}