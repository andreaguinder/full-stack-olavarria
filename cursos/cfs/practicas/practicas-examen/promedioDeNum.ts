//Encuentra el promedio de una lista de números.
//Lista a modo de ejemplo: [1,5,4,6,8,7,6]

let arreglo:number [] = [1,5,4,6,8,7,6];
let suma: number = 0;
let promedio:number = 0;

function sumarLista(arreglo:number [], promedio:number) {

    for(let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
    }
    
    console.log(`La suma de los numeros de la lista es: ${suma}`)
    promedio = suma / arreglo.length;
    console.log(`El promedio de los numeros es: ${promedio}`);
    return promedio;
}

sumarLista(arreglo,promedio);