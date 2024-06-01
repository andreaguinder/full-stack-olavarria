//3.Encuentra el número más pequeño en una lista.
//Lista a modo de ejemplo: [1,5,4,6,8,7,6]

let arreglo:number [] = [1,5,4,6,8,7,6];
let numMen:number = arreglo[0];

function encontrarNumMen(arreglo:number[], numMen:number):number {

    let i:number = 0;

    for(i; i < arreglo.length; i++){
        if(arreglo[i] < numMen ) {
            numMen = arreglo[i];
        }
    }

    console.log(`El numero menor de arreglo es: ${numMen}`);
    return numMen;
}

encontrarNumMen(arreglo,numMen);

// numMenor = 0 pos
// 0 = 1
// numMenor = 1
// 1pos = 5
//numMenor = 1 < 5