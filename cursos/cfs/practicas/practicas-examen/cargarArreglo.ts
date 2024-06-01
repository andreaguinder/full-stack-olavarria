//llenar un arreglo por teclado la longitud y los numeros con una funcion

// paso 1 importar libreria
import * as rls from "readline-sync";

//paso 2 crear variables
let dimensionArreglo:number = rls.questionInt("ingresar longitud de arreglo: ");
let arreglo:number [] = new Array(dimensionArreglo);

function llenarArreglo(arreglo:number []): number [] {

    for(let i = 0; i < dimensionArreglo; i++) {
        arreglo[i] = rls.questionInt(`Ingrese los numeros del arreglo: `);
    }

    return arreglo;
}

llenarArreglo(arreglo);
console.log(`el arreglo es: [${arreglo}] `);

