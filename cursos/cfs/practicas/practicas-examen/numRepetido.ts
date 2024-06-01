// 6.Encuentra el número de veces que aparece un elemento en una lista.
// Lista a modo de ejemplo: [1,5,4,6,8,7,6]

// paso 1 declarar variables
let arreglo:number [] = [1,1,3,4,5,6,6];


function encontrarNumRepetido(arreglo:number[]):number [] {

    let numerosRepetidos: number [] = [];
    let i:number = 0;

    for(i; i < arreglo.length; i++) {
        let elemento = arreglo[i]
        if(!numerosRepetidos[elemento]){
            numerosRepetidos[elemento] = 1
        } else {
            numerosRepetidos[elemento]++
        }
    }

    console.log(`La cantidad de valores repetidos en el arreglo ${arreglo} es: ${numerosRepetidos}`)

    return numerosRepetidos;
}

encontrarNumRepetido(arreglo)


