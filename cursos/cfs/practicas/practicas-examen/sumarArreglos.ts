// 4.Calcula la suma de dos arreglos elemento por elemento.
//Lista a modo de ejemplo: [1,5,4,6,8,7,6] , [2,3,5,4,1,2,3]

// paso1 definir variables
let arreglo1:number [] = [1,5,4,6,8,7,6];
let arreglo2:number [] = [2,3,5,4,1,2,3];

// paso2 creamos variable para almacenar la suma de los arreglos
let sumaArreglos:number [] = [];

//paso 3 funcion que sume los valores
function sumarValores(arreglo1:number [],arreglo2:number [],sumaArreglos:number[]): number [] {
    let i:number = 0;
    for(i; i < arreglo1.length; i++) {
        sumaArreglos[i] = arreglo1[i] + arreglo2[i];
    }

    console.log(`La suma de los arreglos: ${arreglo1} y ${arreglo2} es = ${sumaArreglos}`);
    return sumaArreglos;
}

sumarValores(arreglo1,arreglo2,sumaArreglos);