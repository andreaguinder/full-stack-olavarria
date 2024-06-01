//5. Encuentra el número de elementos pares en una lista.
////Lista a modo de ejemplo: [1,5,4,6,8,7,6]

//paso 1 declarar variables
let arreglo:number [] = [1,5,4,6,8,7,6];

//paso 2 crear variable para almacenar
let cantidadPares: number = 0; 
let numPares:number [] = [];

// paso 3 funcion para buscar los numeros pares
function buscarPares(arreglo:number [], numPares:number[]): number[] {

    let i:number = 0;

    for(i; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0) {
            cantidadPares ++       
        }
    }

    console.log(`Cantidad de pares del arreglo ${arreglo} es ${cantidadPares}`);
    return numPares;
}

buscarPares(arreglo,numPares);


