/*• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una funcion
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/



//Algoritmo CompletarArreglo
let arregloCompletar: number[] = new Array(10);
let indice: number;

for (indice = 0; indice < 10; indice++) {
    arregloCompletar[indice] = Azar(100);
}

for (indice = 0; indice < 10; indice++) {
    console.log(`El numero en la posicion ${indice} es: ${arregloCompletar[indice]}`);
}

function Azar(tope: number): number {
    return Math.floor(Math.random() * tope);
};
