//ejercicio de notas con for
import * as rls from 'readline-sync';

let nota, suma, promedio : number;

suma = 0;

for(let contador : number = 1; contador <= 10; contador ++){
   nota = rls.questionFloat('Ingrese su nota: ') 
   suma += nota;
}

promedio = suma / 10;

console.log('El promedio del alumno es: ' + promedio);