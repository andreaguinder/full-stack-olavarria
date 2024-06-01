// crea un numero al azar
function azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar)
}

//cargar arreglo
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = azar(numAzar);
    }
}

// Escribe el vector en una linea en la consola
function escribirEnunaLinea(arreglo: number[], cantidad: number) {
    let vector: string = '';

    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `

    }
    console.log(vector);
}

//Intemcambiar posiciones
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//compara los valores de los indices
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;

    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }

    return comparacion;
}

//funcion buirbuja

function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < cantidad - 1; j++) {
            if (comparar(arreglo, j, j + 1) === 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

let limite : number = 10;
let array : number [] = new Array (limite);
cargar(array, limite, 100);
escribirEnunaLinea(array, limite);
burbuja(array, limite);
escribirEnunaLinea(array, limite);

//ejecutar
