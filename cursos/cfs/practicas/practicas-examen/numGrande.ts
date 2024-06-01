//2. Encuentra el número más grande en una lista.
//Lista a modo de ejemplo: [1,5,4,6,8,7,6]

let arreglo:number [] = [1,5,4,6,8,7,6];

let numMayor:number = arreglo[0];

function encotrarNumMayor(arreglo:number[] ,numMayor:number): void  {
    let i :number = 0;

    for(i; i < arreglo.length; i++) {
        if(arreglo[i] > numMayor){
            numMayor = arreglo[i]
        }
    }

    console.log(`El numero mayor del arreglo es : ${numMayor}`);
}


encotrarNumMayor(arreglo,numMayor);

// 0 = 1 
//  0  > numMayor
//  1 = 5
// 1 > numMayor