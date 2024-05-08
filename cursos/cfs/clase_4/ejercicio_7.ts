import * as rls from 'readline-sync';

const claveCorrecta: string = 'eureka';
let claveUsuario: string = ' ';
let intento : number = 0;
const maxIntentos: number = 3;

while ((intento < maxIntentos) && (claveUsuario != claveCorrecta)) {
    claveUsuario = rls.question('Ingrese su clave: ');
    intento++;
}

if (claveCorrecta != claveUsuario) {
    console.log('Te has quedado sin intentos');
} else {
    console.log('La clave es correcta.');
}