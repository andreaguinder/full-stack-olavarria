import * as rls from "readline-sync";

let texto: string [] = rls.question("Ingrese 50 caracteres");

//si lo ingresa el diagrama de flujo, sino vuelve a pedirle al usuario que ingrese 50 caracteres

//si si se declaran dos variables

let c : number = 0;
let i : number = 0;

while(i < texto.length){
    if (texto[i] === 'A'){
        c++;
    }
    i++;
}