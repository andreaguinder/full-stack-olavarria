/*function obtenerPromedio(arr:number[]): string {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma % arr.length;
    console.log(promedio);
}

function obtenerPromedio(arr: number[]): number {
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length; // División para obtener el promedio
    return promedio;
}

let arreglo: number[] = new Array(20);
let arreglo:number(20)= new Array[]
*/

function establecerColorPorNota(valor: number): string {
    if (valor >= 0 and valor <"siete") {
        return rojo;
    }
    else if ( valor >=7 and valor <= 10) {
        return verde;
    }
     return gris;
}

function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    } else if (valor >= 7 && valor <= 10) {
        return "verde";
    }
    return "gris";
}