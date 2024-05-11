// practicas ciclo for

import * as rls from 'readline-sync';

for (let i : number = 1; i <= 5; i++){
    // En cada repetición, solicitamos un nombre
    let ingresarNombre: string = rls.question("Ingrese un nombre: ");
    console.log('Turno Nº ' + i + ' Nombre: ' + ingresarNombre);
}
