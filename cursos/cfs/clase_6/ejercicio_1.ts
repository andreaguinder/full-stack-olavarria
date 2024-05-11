/*for >> dentro del primer ; PUNTO DE PARTIDA, dentro del segundo ;
condición que tiene que cumplirse para que siga iterando,
dentro del tercer ; INCREMENTO
{} >> DENTRO DE LAS LLAVES LO QUE QUIERO HACER EN CADA ITERACION*/


function dibujarLinea() {
    let linea: string = '';

    for (let i: number = 0; i <= 40; i++) {
        linea = linea + '-';
    }

//    console.log(linea);

// si tiene return se debe guardar en una vaiable para mostrarlo en algun lado
return linea;
}

let valor : string = dibujarLinea();

console.log(valor);