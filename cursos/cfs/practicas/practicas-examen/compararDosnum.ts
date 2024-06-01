// 8.Encuentra el número más grande entre 2 números.
function generarNumero(min:number, max:number): number {
    return Math.floor(Math.random() * (min - max + 1) + max);
}

function buscarNumMayor() {

    let numero1:number = generarNumero(1,20);
    let numero2:number = generarNumero(1,20);

    if(numero1 === numero2) {
        console.log("Los numeros son iguales")
    } else if ( numero1 > numero2) {
        console.log(`El numero 1:  ${numero1} es mayor al numero ${numero2}`);
    } else {
        console.log(`El numero 2: ${numero2} es mayor al numero ${numero1}`);
    }
}

buscarNumMayor()