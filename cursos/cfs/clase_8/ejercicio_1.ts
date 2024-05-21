/*let nombreApellido : string = 'Juan Perez';
let inicialNombre : string = nombreApellido[0];
let inicialApellido : string = nombreApellido[5];
console.log(`Nombre y apellido: ${nombreApellido}, iniciales: ${inicialNombre} ${inicialApellido}`);

//length

let arreglo : string [] = ['a','b','c'];
// tiene longitud 3 pero su último índice es 2, porque es 0,1,2
console.log(arreglo.length);

//indexOf
let cadena : string = 'Tengo que hacer muchos ejercicios';
console.log(cadena.indexOf('hacer'));
//va a mostrarnos la posicion en la que comienza la palabra hacer en este caso en la posición 10
console.log(cadena.indexOf('hacer',20));
// no se va a encontrar porque ya paso el caracter de largo, va a devolver -1


//lastIndexOf
let cadena2 : string = 'Tengo que hacer y hacer y hacer muchos ejercicios';
console.log(cadena2.lastIndexOf('hacer'));
//va a mostrar la posicion de la ultima vez que encuentra la palabra hacer

//substring recibe parametro de inicio y final y devuelve la porcion de cadena entre esas posiciones
let cadena3 : string = 'Tengo que hacer y hacer y hacer muchos ejercicios';
console.log(cadena3.substring(10,15));

//substr(inicio, largo) son los parametros
// a partir del 10, se mueve 21 posiciones para adelante por eso muestra hacer y hacer y hacer
console.log(cadena3.substr(10,21));


// toLowerCase & toUpperCase
// son funciones minis, llevan los parentesis ()
let textoCombinado : string = 'aAaAaAa';
console.log(textoCombinado.toLowerCase()); // todo a minuscula
console.log(textoCombinado.toUpperCase()); // todo a mayuscula

console.log(textoCombinado[0].toUpperCase()); // solo la primera posicion devuelve y en mayuscula

// toString
let numero: number = 2024;
console.log(numero.toString());

/*
// parseInt para convertir un string en formato numero entero
let numeroString : string = '2024';
console.log(parseInt(numeroString));
*/
/*
// parseFloat para convertir un string en formato numero decimal
let numeroString2 : string = '2024.5';
console.log(parseFloat(numeroString2));


let numeroNumber : number = parseInt(numeroString);
console.log(parseInt(numeroString));

// es la cadena de texto convertida a numero
console.log(typeof parseInt(numeroString));

// muestra el tipo de dato que es numeroString
console.log(typeof numeroString);
*/
// split(recibe un parametro)
// se le encadena a una variable de tipo string y se le pasa el split para que separe los elementos
let numeroString : string = '20242024';
let arrayDenNumeros : string [] = numeroString.split('');
console.log(arrayDenNumeros);

let cadena : string = 'Tengo que hacer muchos ejercicios';
console.log(cadena.split(' '));
// te separa por lo que vos te digas que le separe, un espacio, un mas, etc
