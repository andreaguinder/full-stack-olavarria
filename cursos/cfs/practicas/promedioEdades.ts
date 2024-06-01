import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt('Ingrese cantidad de jugadores: ');
let edadesNinios : number[] = new Array(dimensionArreglo);


function cargarJugadores(edadesNinios: number[], dimensionArreglo: number) {
    let i: number = 0;
    for (i; i < edadesNinios.length; i++) {
        edadesNinios[i] = aleatorio(3, 7);
    }
}

function mostrarJugadores(edadesNinios : number [], dimensionArreglo : number){
    let i : number = 0
    let jugadores : string = '';
    for (i; i < edadesNinios.length; i++){
        jugadores += edadesNinios[i] + ' - ';
    }
    console.log('Los jugadores son ', jugadores);
}

function aleatorio(menorValor: number, mayorValor: number): number {
    let numeroAdevolver : number = 0;
    numeroAdevolver = Math.floor(Math.random()*(mayorValor - menorValor + 1) + menorValor);
    return numeroAdevolver;
}

function obtenerPromedioEdadesJugadores(edadesNinios: number [], dimensionArreglo : number) : number {
    let suma : number = 0;
    let i : number = 0;
    let promedio : number = 0;
    for(i; i < dimensionArreglo; i++){
        suma = suma + edadesNinios[i];
    }
    promedio = suma / dimensionArreglo;
    return promedio;
}
cargarJugadores(edadesNinios, dimensionArreglo);
mostrarJugadores(edadesNinios, dimensionArreglo);
console.log('El promedio de edades de los niños es ' + obtenerPromedioEdadesJugadores(edadesNinios, dimensionArreglo));

