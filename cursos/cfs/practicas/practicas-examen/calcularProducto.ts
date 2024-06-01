//Calcula el producto de todos los elementos en una lista.
// Lista a modo de ejemplo: [1,5,4,6,8,7,6]

let listaNumeros:number [] = [1,5,4,6,8,7,6];

function calcularProducto (listaNumeros:number []): number  {

    let acumulador:number = 0;
    let i:number = 0;
    for(i; i < listaNumeros.length; i++) {
        acumulador += listaNumeros[i] * listaNumeros[i] ; 
    }

     console.log(`El producto de todos los elementos de la lista ${listaNumeros} es = ${acumulador}`);
     return acumulador;
}

calcularProducto(listaNumeros);
