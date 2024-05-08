import * as rls from 'readline-sync';

const claveReal: string = 'eureka';
let claveUsuario: string = rls.question('Ingrese su clave: ');
let contador: number = 1;
let intentos: number = 3;

while ((contador < intentos) && (claveUsuario != claveReal)) {
    claveUsuario = rls.question('Ingrese su clave: ');
    contador++;
}

if (claveReal != claveUsuario) {
    console.log('Te has quedado sin intentos');
} else {
    console.log('La clave es correcta.');
}